'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import AddToCartButton from '../add-to-card-button';

function ProductCard({ item }) {
  const router = useRouter();

  return (
    <Card>
      <CardContent>
        <div className="w-full aspect-w-12 aspect-h-6 lg:h-50">
          <img
            src={item?.thumbnail}
            alt={item?.title}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="p-6">
          <CardTitle className="text-sm font-bold text-gray-900">
            {item?.title}
          </CardTitle>
          <div className="mt-4 flex justify-between items-center flex-wrap gap-2">
            <p className="text-sm font-extrabold text-gray-800">
              $ {item?.price}
            </p>
            <div>
              <Button
                className="sm"
                onClick={() => router.push(`/products/${item?.id}`)}
              >
                Details
              </Button>
            </div>
          </div>
          <AddToCartButton productItem={item} />
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
