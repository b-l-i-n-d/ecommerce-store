"use client";

import { ShoppingCart } from "lucide-react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Currency } from "@/components/ui/currency";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

import { useCart } from "@/hooks/use-cart";

import { cn } from "@/lib/utils";
import { IProduct } from "@/types";

interface InfoProps {
    product: IProduct;
}

export const Info: React.FC<InfoProps> = ({ product }) => {
    const addItem = useCart((state) => state.addItem);
    const selectedSize = useCart((state) => state.selectedSize);
    const setSelectedSize = useCart((state) => state.setSelectedSize);

    useEffect(() => {
        setSelectedSize(undefined);
    }, [setSelectedSize]);

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
                        <h3 className="font-semibold">Sizes:</h3>
                        <RadioGroup
                            defaultValue={undefined}
                            value={selectedSize}
                            className="flex"
                            onValueChange={(value) => setSelectedSize(value)}
                        >
                            {product?.sizes?.map((size) => (
                                <div
                                    key={size.size.id}
                                    className="flex items-center space-x-2"
                                >
                                    <RadioGroupItem
                                        value={size.size.id}
                                        id={size.size.id}
                                        className="peer sr-only"
                                    />
                                    <Label
                                        htmlFor={size.size.id}
                                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                                    >
                                        {size.size.name}
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
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

                    <p
                        className={cn(
                            "text-sm font-semibold text-muted-foreground",
                            product?.sizes?.find(
                                (size) => size.size.id === selectedSize
                            )?.stock! < 10 && "text-destructive"
                        )}
                    >
                        {selectedSize === undefined
                            ? "Select a size"
                            : product?.sizes?.find(
                                  (size) => size.size.id === selectedSize
                              )?.stock! > 10
                            ? "In stock"
                            : product?.sizes?.find(
                                  (size) => size.size.id === selectedSize
                              )?.stock! < 10
                            ? `Only ${
                                  product?.sizes?.find(
                                      (size) => size.size.id === selectedSize
                                  )?.stock
                              } left in stock`
                            : "Out of stock"}
                    </p>
                </div>
            </CardContent>

            <CardFooter>
                <Button
                    onClick={() => addItem(product)}
                    disabled={
                        selectedSize === undefined ||
                        product?.sizes?.find(
                            (size) => size.size.id === selectedSize
                        )?.stock === 0
                    }
                >
                    <ShoppingCart size={16} />
                    <span className="ml-2">Add to cart</span>
                </Button>
            </CardFooter>
        </Card>
    );
};
