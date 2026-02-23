import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactSidebar from '@/components/FloatingContactSidebar';
import ProductPageContent from './ProductPageContent';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.title} | GCCSOFI`,
    description: product.description,
  };
}

export default function ProductPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar locale={params.locale} />
      <ProductPageContent product={product} locale={params.locale} />
      <Footer locale={params.locale} />
      <FloatingContactSidebar />
    </main>
  );
}
