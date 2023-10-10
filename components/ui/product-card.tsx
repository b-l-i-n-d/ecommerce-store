"use client";

import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";

import { IProduct } from "@/types";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Currency } from "@/components/ui/currency";
import { useRouter } from "next/navigation";

interface ProductCardProps {
    product: IProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${product.id}`);
    };

    return (
        <Card
            onClick={handleClick}
            className="bg-background group cursor-pointer rounded-xl border p-3 space-y-4"
        >
            <CardHeader className="aspect-square rounded-xl bg-muted relative p-0">
                <Image
                    src={product.images?.[0]?.url}
                    alt={product.name}
                    fill
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <Button variant="outline" size="icon">
                            <Expand size={20} />
                        </Button>
                        <Button variant="outline" size="icon">
                            <ShoppingCart size={20} />
                        </Button>
                    </div>
                </div>
            </CardHeader>
            {/* Description */}
            <CardContent className="py-0">
                <CardTitle className="font-semibold text-lg">
                    {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                    {product.category?.name}
                </CardDescription>
            </CardContent>
            {/* Price & Reiew */}
            <CardFooter className="flex items-center justify-between py-0">
                <Currency value={product.price} />
            </CardFooter>
        </Card>
    );
};
