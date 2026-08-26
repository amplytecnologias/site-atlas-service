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

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });

// Trava o zoom por gesto no celular (pedido do cliente) e fixa a escala.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Atlas Service | Aluguel de Compressor de Parafuso em BH e MG",
    template: "%s | Atlas Service",
  },
  description:
    "Aluguel de compressor de parafuso na região metropolitana de BH e em toda Minas Gerais, com assistência técnica inclusa, venda, filtros, óleo e manutenção.",
  alternates: { canonical: "/" },
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Atlas Service",
    title: "Atlas Service | Compressores de Parafuso em BH e MG",
    description:
      "Aluguel com assistência técnica inclusa, venda, filtros, óleo e manutenção de compressores de parafuso para mineração e indústria em Minas Gerais.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Atlas Service — Aluguel e Venda de Compressores de Parafuso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Service | Compressores de Parafuso em BH e MG",
    description:
      "Aluguel, venda, filtros, óleo e manutenção de compressores de parafuso para mineração e indústria em Minas Gerais.",
    images: ["/og-image.jpg"],
  },
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
