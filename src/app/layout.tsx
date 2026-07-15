import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Costa Dourada Residencial | Frente Mar em Balneário Piçarras/SC",
  description: "Costa Dourada Residencial — apartamentos de 157 a 172 m² com 3 suítes e vaga dupla de garagem no Centro de Balneário Piçarras. Unidades exclusivas com terraço e piscina privativa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
