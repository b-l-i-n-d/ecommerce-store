import { getBillboards } from "@/actions/get-billboards";
import { getProducts } from "@/actions/get-products";

import { BillboardSwiper } from "@/components/billboard-swiper";
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

                {products?.map((product) => {
                    return JSON.stringify(product);
                })}
            </div>
        </Container>
    );
};

export default HomePage;
