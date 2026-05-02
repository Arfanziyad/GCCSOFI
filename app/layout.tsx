import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Gulf Solidarity – Architectural Products Division",
  description: "Gulf Solidarity Architectural Products Division — premium operable walls, moving glass walls, HPL washroom cubicles, pivot doors, hydraulic doors, terrace solutions, and office partitions across the GCC region.",
  keywords: "operable walls, moving glass walls, HPL cubicles, office partitions, architectural products, GCC, Dubai, Saudi Arabia",
  authors: [{ name: "Gulf Solidarity" }],
  openGraph: {
    title: "Gulf Solidarity – Architectural Products Division",
    description: "Premium architectural product solutions across the GCC.",
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
      <body className={`${inter.className} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
