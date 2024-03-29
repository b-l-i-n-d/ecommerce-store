import { NextPage } from "next";

import { getProduct } from "@/actions/get-product";
import { getProducts } from "@/actions/get-products";

import { Gallery } from "@/components/gallery";
import { Info } from "@/components/info";
import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

interface ProductPageProps {
    params: {
        productId: string;
    };
}

export const revalidate = 0;

const Product: NextPage<ProductPageProps> = async ({ params }) => {
    const product = await getProduct(params?.productId);
    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id,
    });
    return (
        <Container>
            <div className="px-4 py-10 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    <Gallery images={product.images} />
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <Info product={product} />
                    </div>
                </div>

                <Separator className="my-10" />

                <ProductList
                    title="Related Products"
                    products={suggestedProducts.filter(
                        (p) => p.id !== product.id
                    )}
                />
            </div>
        </Container>
    );
};

export default Product;
