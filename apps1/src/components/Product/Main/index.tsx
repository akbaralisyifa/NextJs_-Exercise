import { ProductType } from '@/types/product.type';
import Link from 'next/link';

const ProductView = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="w-full mt-10">
      <h1 className="text-center my-5 text-3xl">All Products</h1>
      <div className=" mt-20 gap-5 flex flex-wrap justify-center">
        {products.length > 0 ? (
          <>
            {products.map((product: ProductType) => (
              <Link href={`/product/${product.id}`} key={product.id} className="w-96">
                <img src={product.image} alt={product.name} />
                <h4 className="text-xl font-semibold">{product.name}</h4>
                <p className="font-semibold text-lg text-gray-500">{product.category}</p>
                <p>
                  {product.price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}
                </p>
              </Link>
            ))}
          </>
        ) : (
          <>
            <div className="animate-pulse bg-slate-400 w-96" />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductView;
