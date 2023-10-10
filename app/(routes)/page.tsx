import { getBillboards } from "@/actions/get-billboards";
import { getProducts } from "@/actions/get-products";

import { BillboardSwiper } from "@/components/billboard-swiper";
import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const billboards = await getBillboards();
    const products = await getProducts({
        isFeatured: true,
    });

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <BillboardSwiper data={billboards} />

                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList
                        title="Featured Products"
                        products={products}
                    />
                </div>
            </div>
        </Container>
    );
};

export default HomePage;
