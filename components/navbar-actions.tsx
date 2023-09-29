"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button className="rounded-full">
                <ShoppingBag size={20} className="mr-2" />
                <span className="text-sm font-medium">0</span>
            </Button>
        </div>
    );
};
