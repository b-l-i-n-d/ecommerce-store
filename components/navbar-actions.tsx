"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import { useCart } from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

export const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);
    const { items } = useCart();
    const router = useRouter();

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button
                className="rounded-full"
                onClick={() => router.push("/cart")}
            >
                <ShoppingBag size={20} className="mr-2" />
                <span className="text-sm font-medium">{totalItems}</span>
            </Button>
        </div>
    );
};
