"use client";

import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Currency } from "@/components/ui/currency";

import { useCart } from "@/hooks/use-cart";

import { IProduct } from "@/types";

interface CartItemProps {
    item: IProduct & { quantity: number; selectedSize: string };
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const removeItem = useCart((state) => state.removeItem);
    const increaseItemQuantity = useCart((state) => state.increaseItemQuantity);
    const decreaseItemQuantity = useCart((state) => state.decreaseItemQuantity);

    return (
        <div className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image
                    src={item.images[0].url}
                    fill
                    alt="Product Image"
                    className="object-cover object-center"
                />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-[5] right-0 top-0">
                    <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full"
                        onClick={() => removeItem(item.id, item.selectedSize)}
                    >
                        <X size={15} />
                    </Button>
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <Link href={`/products/${item.id}`}>
                            <h3 className="text-lg font-semibold text-primary hover:underline">
                                {item.name}
                            </h3>
                        </Link>
                    </div>
                    <div className="mt-1 flex text-sm">
                        <p className="text-muted-foreground pl-4 border-l">
                            {item.color.name}
                        </p>
                        <p className="text-muted-foreground ml-4 border-l pl-4">
                            {
                                // item.sizes.find(
                                //     (size) => size.size.id === item.selctedSize
                                // )?.size.name
                                // get the item, where size.size.id === item.selctedSize

                                item?.sizes?.find(
                                    (size) => size.size.id === item.selectedSize
                                )?.size.name ?? item.selectedSize
                            }
                        </p>
                    </div>
                    <Currency value={item.price} />
                </div>
                {item.selectedSize === undefined ? (
                    ""
                ) : item?.sizes?.find(
                      (size) => size.size.id === item.selectedSize
                  )?.stock! -
                      item.quantity >
                  10 ? (
                    <p className="text-muted-foreground transition-all duration-150">
                        Currenlty in stock.
                    </p>
                ) : item?.sizes?.find(
                      (size) => size.size.id === item.selectedSize
                  )?.stock! < 10 &&
                  item?.sizes?.find(
                      (size) => size.size.id === item.selectedSize
                  )?.stock! > 0 ? (
                    <p className="text-muted-foreground transition-all duration-150">
                        Only{" "}
                        {
                            item?.sizes?.find(
                                (size) => size.size.id === item.selectedSize
                            )?.stock
                        }{" "}
                        left in stock.
                    </p>
                ) : (
                    <p className="text-destructive transition-all duration-150">
                        Will be out of stock.
                    </p>
                )}
                <div className="flex gap-x-6 items-center">
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() =>
                            increaseItemQuantity(item.id, item.selectedSize)
                        }
                    >
                        <Plus size={15} />
                    </Button>
                    <p className="text-primary text-lg font-semibold">
                        {item.quantity}
                    </p>
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() =>
                            decreaseItemQuantity(item.id, item.selectedSize)
                        }
                    >
                        <Minus size={15} />
                    </Button>
                </div>
            </div>
        </div>
    );
};
