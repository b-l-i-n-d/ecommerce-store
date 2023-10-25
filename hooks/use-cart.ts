import { toast } from "sonner";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { IProduct } from "@/types";

interface ICartStore {
    items: (IProduct & { quantity: number; selectedSize: string })[];
    addItem: (item: IProduct) => void;
    removeItem: (id: string, selectedSize: string) => void;
    increaseItemQuantity: (id: string, selectedSize: string) => void;
    decreaseItemQuantity: (id: string, selectedSize: string) => void;
    removeAllItems: () => void;
    selectedSize: string | undefined;
    setSelectedSize: (size: string | undefined) => void;
}

export const useCart = create(
    persist<ICartStore>(
        (set, get) => ({
            items: [],
            addItem: (item) => {
                const currentItems = get().items;
                const isItemExist = // get the the matched item
                    currentItems.filter(
                        (currentItem) =>
                            currentItem.id === item.id &&
                            currentItem.selectedSize === get().selectedSize
                    ) ?? [];
                if (get().selectedSize === undefined) {
                    return toast.error("Please select size");
                }

                if (isItemExist.length > 0) {
                    const newItems = currentItems.map((currentItem) => {
                        if (currentItem.id === isItemExist[0].id) {
                            if (
                                currentItem.selectedSize ===
                                    get().selectedSize &&
                                (currentItem.sizes.find(
                                    (size) =>
                                        size.size.id === get().selectedSize
                                )?.stock ?? 0) > currentItem.quantity
                            ) {
                                toast.success("Item added to cart");
                                return {
                                    ...currentItem,
                                    quantity: currentItem.quantity + 1,
                                    selectedSize: get().selectedSize ?? "",
                                };
                            } else if (
                                currentItem.selectedSize ===
                                    get().selectedSize &&
                                (currentItem.sizes.find(
                                    (size) =>
                                        size.size.id === get().selectedSize
                                )?.stock ?? 0) <= currentItem.quantity
                            ) {
                                toast.error("Item out of stock");
                                return currentItem;
                            } else {
                                return currentItem;
                            }
                        } else {
                            toast.success("Item added to cart");
                            return {
                                ...currentItem,
                                quantity: 1,
                                selectedSize: get().selectedSize ?? "",
                            };
                        }
                    });

                    return set({ items: newItems });
                } else {
                    toast.success("Item added to cart");
                    return set({
                        items: [
                            ...currentItems,
                            {
                                ...item,
                                quantity: 1,
                                selectedSize: get().selectedSize ?? "",
                            },
                        ],
                    });
                }
            },
            removeItem: (id, selectedSize) => {
                toast.success("Item removed from cart");

                return set({
                    items: get().items.filter(
                        (item) =>
                            item.id !== id || item.selectedSize !== selectedSize
                    ),
                });
            },
            increaseItemQuantity: (id, selectedSize) => {
                const currentItems = get().items;
                const newItems = currentItems.map((currentItem) => {
                    if (
                        currentItem.id === id &&
                        currentItem.selectedSize === selectedSize
                    ) {
                        if (
                            currentItem.sizes.find(
                                (size) => size.size.id === get().selectedSize
                            )?.stock ??
                            0 > currentItem.quantity
                        ) {
                            toast.success("Item added to cart");
                            return {
                                ...currentItem,
                                quantity: currentItem.quantity + 1,
                            };
                        } else {
                            toast.error(
                                "Item will be out of stock, can't add more"
                            );
                            return currentItem;
                        }
                    } else {
                        return currentItem;
                    }
                });

                return set({ items: newItems });
            },
            decreaseItemQuantity: (id, selectedSize) => {
                const currentItems = get().items;
                const newItems = currentItems.map((currentItem) => {
                    if (
                        currentItem.id === id &&
                        currentItem.selectedSize === selectedSize &&
                        currentItem.quantity > 1
                    ) {
                        toast.success("Item removed from cart");
                        return {
                            ...currentItem,
                            quantity: currentItem.quantity - 1,
                        };
                    } else {
                        return currentItem;
                    }
                });

                return set({ items: newItems });
            },
            removeAllItems: () => set({ items: [] }),
            selectedSize: undefined,
            setSelectedSize: (size) => set({ selectedSize: size }),
        }),
        {
            name: "cart",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
