import { IProduct } from "@/types";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Currency } from "./ui/currency";
import { Separator } from "./ui/separator";

interface InfoProps {
    product: IProduct;
}

export const Info: React.FC<InfoProps> = ({ product }) => {
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
                </div>
            </CardContent>

            <CardFooter>
                <Button>
                    <ShoppingCart size={16} />
                    <span className="ml-2">Add to cart</span>
                </Button>
            </CardFooter>
        </Card>
    );
};
