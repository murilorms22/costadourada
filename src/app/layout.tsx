import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Costa Dourada Residencial | Vista para o Mar em Balneário Piçarras/SC",
  description: "Costa Dourada Residencial — apartamentos de 157 a 172 m² com 3 suítes e vaga dupla de garagem no Centro de Balneário Piçarras. Unidades exclusivas com terraço e piscina privativa.",
  icons: {
    icon: "/images/logo-oma.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} h-full antialiased scroll-smooth`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P29929TD');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P29929TD" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
