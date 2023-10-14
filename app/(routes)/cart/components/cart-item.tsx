"use client";

import { Button } from "@/components/ui/button";
import { Currency } from "@/components/ui/currency";
import { useCart } from "@/hooks/use-cart";
import { IProduct } from "@/types";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
    item: IProduct & { quantity: number };
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const { removeItem, increaseItemQuantity, decreaseItemQuantity } =
        useCart();

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
                <div className="absolute z-10 right-0 top-0">
                    <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full"
                        onClick={() => removeItem(item.id)}
                    >
                        <X size={15} />
                    </Button>
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <h3 className="text-lg font-semibold text-primary">
                            {item.name}
                        </h3>
                    </div>
                    <div className="mt-1 flex text-sm">
                        <p className="text-muted-foreground pl-4 border-l">
                            {item.color.name}
                        </p>
                        <p className="text-muted-foreground ml-4 border-l pl-4">
                            {item.size.name}
                        </p>
                    </div>
                    <Currency value={item.price} />
                </div>
                <div className="flex gap-x-6 items-center">
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() => increaseItemQuantity(item.id)}
                    >
                        <Plus size={15} />
                    </Button>
                    <p className="text-primary text-lg font-semibold">
                        {item.quantity}
                    </p>
                    <Button
                        size="icon"
                        variant="outline"
                        onClick={() => decreaseItemQuantity(item.id)}
                    >
                        <Minus size={15} />
                    </Button>
                </div>
            </div>
        </div>
    );
};
