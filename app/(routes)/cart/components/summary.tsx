"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Currency } from "@/components/ui/currency";

import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";

interface SummaryProps {}

export const Summary: React.FC<SummaryProps> = ({}) => {
    const items = useCart((state) => state.items);
    const removeItem = useCart((state) => state.removeItem);
    const removeAllItems = useCart((state) => state.removeAllItems);

    const searchParams = useSearchParams();

    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const onCheckout = async () => {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
            {
                items: items.map((item) => ({
                    id: item.id,
                    selectedSize: item.selectedSize,
                    quantity: item.quantity,
                })),
            }
        );

        window.location = response.data.url;
    };

    useEffect(() => {
        if (searchParams.get("success")) {
            toast.success("Payment completed!");
            removeAllItems();
        }

        if (searchParams.get("canceled")) {
            toast.error("Something went wrong!");
        }
    }, [removeAllItems, searchParams]);

    useEffect(() => {
        const outOfStockItems = items.filter(
            (item) =>
                item.sizes.find((size) => size.size.id === item.selectedSize)
                    ?.stock === 0
        );

        for (const item of outOfStockItems) {
            removeItem(item.id, item.selectedSize);
        }

        if (outOfStockItems.length > 0) {
            toast.error(
                `${outOfStockItems.length} items went out of stock and were removed from your cart.`
            );
        }
    }, [items, removeItem]);

    return (
        <Card className="bg-muted">
            <CardHeader>
                <CardTitle className="text-base font-bold">
                    Order Summary
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center">
                    <h2 className="text-base font-bold">Total Items</h2>
                    <span className="text-sm font-semibold">
                        {items.reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                </div>

                <Separator className="my-2" />

                <div className="flex justify-between items-center">
                    <h2 className="text-base font-bold">Total</h2>
                    <Currency value={totalPrice} />
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button
                    className="w-full"
                    onClick={onCheckout}
                    disabled={items.length === 0}
                >
                    Checkout
                </Button>
            </CardFooter>
        </Card>
    );
};
