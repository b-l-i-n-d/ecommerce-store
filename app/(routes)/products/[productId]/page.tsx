import { getProduct } from "@/actions/get-product";
import { Container } from "@/components/ui/container";

interface ProductPageProps {
    params: {
        productId: string;
    };
}

const Product: React.FC<ProductPageProps> = async ({ params }) => {
    const product = await getProduct(params.productId);
    return (
        <Container>
            <div>Product: {product.name}</div>
        </Container>
    );
};

export default Product;
