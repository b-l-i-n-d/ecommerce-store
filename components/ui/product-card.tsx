"use client";

import { Expand, ExternalLink, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { IProduct } from "@/types";

import { usePreviewModal } from "@/hooks/use-preview-modal";

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
import { useCart } from "@/hooks/use-cart";

interface ProductCardProps {
    product: IProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    // const addItem = useCart((state) => state.addItem);
    // const selectedSize = useCart((state) => state.selectedSize);
    const setSelectedSize = useCart((state) => state.setSelectedSize);
    const onOpen = usePreviewModal((state) => state.onOpen);
    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${product.id}`);
    };

    const onPreview = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        onOpen(product);
    };

    // const onAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.stopPropagation();

    //     if (selectedSize) {
    //         addItem(product);
    //     }
    // };

    useEffect(() => {
        setSelectedSize(undefined);
    }, [setSelectedSize]);

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
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={onPreview}
                        >
                            <Expand size={20} />
                        </Button>
                        <Button variant="outline" size="icon">
                            <ExternalLink size={20} />
                        </Button>
                    </div>
                </div>
            </CardHeader>
            {/* Description */}
            <CardContent className="py-0 mb-auto">
                <CardTitle className="font-semibold text-lg line-clamp-2">
                    {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
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
