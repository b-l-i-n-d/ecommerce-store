"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { cn } from "@/lib/utils";
import { ICategory } from "@/types";

interface MainNavProps {
    data: ICategory[];
}

export const MainNav: React.FC<MainNavProps> = ({ data }) => {
    const pathname = usePathname();

    const routes = data.map((route: any) => ({
        href: `/category/${route.id}`,
        label: route.name,
        isActive: pathname === `/category/${route.id}`,
    }));

    return (
        <nav className="mx-6 flex items-center gap-x-4 lg:gap-x-6">
            {routes.map((route: any) => (
                <Link
                    href={route.href}
                    key={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        route.isActive
                            ? "text-black dark:text-white font-bold"
                            : "text-muted-foreground"
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    );
};
