import ProductCard from './ProductCard';
import { products } from '@/data/products';

interface ProductGridProps {
  locale: string;
}

export default function ProductGrid({ locale }: ProductGridProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
            Architectural Products Division
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Washroom cubicles, Alifu cubicles, IPS panels, lockers, glass partitions, movable partitions, and raised floor systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              locale={locale}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
