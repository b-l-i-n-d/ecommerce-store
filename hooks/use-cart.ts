import { toast } from "sonner";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { IProduct } from "@/types";

interface ICartStore {
    items: (IProduct & { quantity: number })[];
    addItem: (item: IProduct) => void;
    removeItem: (id: string) => void;
    increaseItemQuantity: (id: string) => void;
    decreaseItemQuantity: (id: string) => void;
    removeAllItems: () => void;
}

export const useCart = create(
    persist<ICartStore>(
        (set, get) => ({
            items: [],
            addItem: (item) => {
                const currentItems = get().items;
                const isItemExist = currentItems.some(
                    (currentItem) => currentItem.id === item.id
                );

                if (item.stock === 0) {
                    return toast.error("Item out of stock");
                }

                if (isItemExist) {
                    const newItems = currentItems.map((currentItem) => {
                        if (currentItem.id === item.id) {
                            if (currentItem.stock > currentItem.quantity) {
                                toast.success("Item added to cart");
                                return {
                                    ...currentItem,
                                    quantity: currentItem.quantity + 1,
                                };
                            } else {
                                toast.error("Item out of stock");
                                return currentItem;
                            }
                        } else {
                            toast.success("Item added to cart");
                            return currentItem;
                        }
                    });

                    return set({ items: newItems });
                } else {
                    toast.success("Item added to cart");
                    return set({
                        items: [...currentItems, { ...item, quantity: 1 }],
                    });
                }
            },
            removeItem: (id) => {
                toast.success("Item removed from cart");

                return set({
                    items: get().items.filter((item) => item.id !== id),
                });
            },
            increaseItemQuantity: (id) => {
                const currentItems = get().items;
                const newItems = currentItems.map((currentItem) => {
                    if (currentItem.id === id) {
                        if (currentItem.stock > currentItem.quantity) {
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
            decreaseItemQuantity: (id) => {
                const currentItems = get().items;
                const newItems = currentItems.map((currentItem) =>
                    currentItem.id === id
                        ? {
                              ...currentItem,
                              quantity:
                                  currentItem.quantity > 1
                                      ? currentItem.quantity - 1
                                      : currentItem.quantity,
                          }
                        : currentItem
                );

                return set({ items: newItems });
            },
            removeAllItems: () => set({ items: [] }),
        }),
        {
            name: "cart",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
