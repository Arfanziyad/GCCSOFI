import HeroSlider from '@/components/HeroSlider';
import ProductGrid from '@/components/ProductGrid';
import ContactForm from '@/components/ContactForm';
import BrochureDownloads from '@/components/BrochureDownloads';

export default function HomePage({ params }: { params: { locale: string } }) {
  return (
    <main className="min-h-screen">
      <HeroSlider />
      <ProductGrid locale={params.locale} />
      <ContactForm />
      <BrochureDownloads />
    </main>
  );
}
