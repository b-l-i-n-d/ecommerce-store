"use client";

import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import { useCart } from "@/hooks/use-cart";

export const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);
    const { items } = useCart();

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Link href="/cart">
                <Button className="rounded-full">
                    <ShoppingBag size={20} className="mr-2" />
                    <span className="text-sm font-medium">{totalItems}</span>
                </Button>
            </Link>
        </div>
    );
};
