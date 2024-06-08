import { fetchAllProducts } from '@/actions';
import ProductCard from '@/components/product-card';
import { redirect } from 'next/navigation';

export default async function Home() {
  const getAllProducts = await fetchAllProducts();

  return (
    <div className="p-6">
      <h1 className="items-center">All Products</h1>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto p-2">
        {getAllProducts && getAllProducts.data && getAllProducts.data.length > 0
          ? getAllProducts.data.map(productItem => (
              <ProductCard key={productItem.id} item={productItem} />
            ))
          : null}
      </div>
    </div>
  );
}
