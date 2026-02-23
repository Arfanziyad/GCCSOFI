import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import ProductGrid from '@/components/ProductGrid';
import ContactForm from '@/components/ContactForm';
import BrochureDownloads from '@/components/BrochureDownloads';
import Footer from '@/components/Footer';
import FloatingContactSidebar from '@/components/FloatingContactSidebar';

export default function HomePage({ params }: { params: { locale: string } }) {
  return (
    <main className="min-h-screen">
      <Navbar locale={params.locale} />
      <HeroSlider />
      <ProductGrid locale={params.locale} />
      <ContactForm />
      <BrochureDownloads />
      <Footer locale={params.locale} />
      <FloatingContactSidebar />
    </main>
  );
}
