"use client";

import { ShoppingCart } from "lucide-react";

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

import { IProduct } from "@/types";
import { cn } from "@/lib/utils";

interface InfoProps {
    product: IProduct;
}

export const Info: React.FC<InfoProps> = ({ product }) => {
    const { addItem } = useCart();

    return (
        <Card>
            <CardHeader>
                <CardTitle>{product.name}</CardTitle>

                <Currency value={product.price} />
            </CardHeader>
            <Separator className="mb-4" />
            <CardContent>
                <div className="flex flex-col gap-y-6">
                    <div className="flex items-center gap-x-4 text-primary">
                        <h3 className="font-semibold">Size:</h3>
                        <div>{product?.size?.name}</div>
                    </div>

                    <div className="flex items-center gap-x-4 text-primary">
                        <h3 className="font-semibold">Color:</h3>
                        <div
                            className="h-6 w-6 rounded-full border border-muted-foreground"
                            style={{
                                backgroundColor:
                                    product?.color?.value ?? "transparent",
                            }}
                            data-testid="color"
                        />
                        <div>{product?.color?.name}</div>
                    </div>

                    <div
                        className={cn(
                            "text-sm font-semibold text-muted-foreground",
                            product?.stock < 10 && "text-destructive"
                        )}
                    >
                        {product?.stock > 10
                            ? "In stock"
                            : product?.stock < 10 && product?.stock > 0
                            ? `Only ${product?.stock} left in stock`
                            : "Out of stock"}
                    </div>
                </div>
            </CardContent>

            <CardFooter>
                <Button onClick={() => addItem(product)}>
                    <ShoppingCart size={16} />
                    <span className="ml-2">Add to cart</span>
                </Button>
            </CardFooter>
        </Card>
    );
};
