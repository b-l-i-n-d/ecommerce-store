"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Currency } from "@/components/ui/currency";
import { useCart } from "@/hooks/use-cart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

interface SummaryProps {}

export const Summary: React.FC<SummaryProps> = ({}) => {
    const { items, removeAllItems } = useCart();
    const searchParams = useSearchParams();

    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const onCheckout = async () => {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/checkout}`,
            {
                items: items.map((item) => ({
                    id: item.id,
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

    return (
        <Card className="bg-muted">
            <CardHeader>
                <CardTitle className="text-base font-bold">
                    Order Summary
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center">
                    <h2 className="text-base font-bold">Total</h2>
                    <Currency value={totalPrice} />
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button className="w-full">Checkout</Button>
            </CardFooter>
        </Card>
    );
};