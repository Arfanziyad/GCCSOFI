import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GCCSOFI - Gulf Solidarity | Construction & Interior Solutions",
  description: "Leading provider of operable walls, moving glass walls, HPL washroom cubicles, pivot doors, hydraulic doors, terrace solutions, and office partitions across the GCC region.",
  keywords: "operable walls, moving glass walls, HPL cubicles, office partitions, construction, interior, GCC, Dubai, Saudi Arabia",
  authors: [{ name: "GCCSOFI" }],
  openGraph: {
    title: "GCCSOFI - Gulf Solidarity",
    description: "Professional construction and interior solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
