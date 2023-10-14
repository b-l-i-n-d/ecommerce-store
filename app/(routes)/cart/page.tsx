"use client";

import { Container } from "@/components/ui/container";
import { useCart } from "@/hooks/use-cart";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { CartItem } from "./components/cart-item";
import { Summary } from "./components/summary";

const CartPage: NextPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const { items } = useCart();

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <Container>
            <div className="px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-3xl font-bold text-primary">
                    Shopping Cart
                </h1>
                <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                    <div className="lg:col-span-7">
                        {totalItems === 0 ? (
                            <p className="text-muted-foreground">
                                No items in the cart.
                            </p>
                        ) : (
                            items.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))
                        )}
                    </div>

                    <div className="lg:col-span-5">
                        <Summary />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CartPage;
