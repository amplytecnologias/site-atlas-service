import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { StructuredData } from "@/components/site/structured-data";
import { GA_ADS_ID, GA4_ID } from "@/lib/gtag";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });

// Trava o zoom por gesto no celular (pedido do cliente) e fixa a escala.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const HOME_SEO = {
  title: "Aluguel de Compressor de Parafuso em MG | Atlas Service",
  description:
    "Locação, venda, manutenção, filtros e óleo de compressores de ar de parafuso industriais para mineração e indústria em BH e Minas Gerais.",
  path: "/",
};

// Metadata padrão (vale para a home). As demais páginas usam pageMetadata()
// com title/description/canonical/OG próprios.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata(HOME_SEO),
  title: {
    default: HOME_SEO.title,
    template: "%s | Atlas Service",
  },
  keywords: [
    "aluguel de compressor de parafuso",
    "locação de compressor região metropolitana de BH",
    "compressor de parafuso BH",
    "compressor de ar para mineração",
    "compressor de parafuso para indústria",
    "manutenção de compressor de parafuso MG",
    "venda de compressor de parafuso",
    "assistência técnica compressor BH",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light">
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        {/* Tag do Google (gtag.js) carregada uma única vez — serve o Google Ads
            (conversões) e o GA4 (tráfego) lado a lado */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ADS_ID}');
            gtag('config', '${GA4_ID}');
          `}
        </Script>
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
