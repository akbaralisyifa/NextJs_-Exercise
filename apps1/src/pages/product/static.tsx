import ProductView from '@/components/Product/Main';
import { ProductType } from '@/types/product.type';

const ProductPage = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default ProductPage;

export async function getServerSideProps() {
  // fetch data dari server
  const response = await fetch('http://localhost:3000/api/product');
  const responseJson = await response.json();

  return {
    props: {
      products: responseJson.data,
    },
  };
}
