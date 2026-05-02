import { locales } from '@/data/site';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactSidebar from '@/components/FloatingContactSidebar';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Navbar locale={params.locale} />
      {children}
      <Footer locale={params.locale} />
      <FloatingContactSidebar />
    </>
  );
}
