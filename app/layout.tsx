import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

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
  metadataBase: new URL("https://www.atlasservice.com.br"),
  title: {
    default: "Atlas Service | Aluguel de Compressor de Parafuso em Betim, BH e MG",
    template: "%s | Atlas Service",
  },
  description:
    "Aluguel de compressor de parafuso em Betim, BH e toda Minas Gerais com assistência técnica inclusa e opção de compra. Venda de máquinas, filtros, óleo e manutenção para mineração e indústria.",
  keywords: [
    "aluguel de compressor de parafuso",
    "locação de compressor Betim",
    "compressor de parafuso BH",
    "compressor de ar para mineração",
    "compressor de parafuso para indústria",
    "manutenção de compressor de parafuso MG",
    "venda de compressor de parafuso",
    "assistência técnica compressor Betim",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Atlas Service",
    title: "Atlas Service | Compressores de Parafuso em Betim e MG",
    description:
      "Aluguel com assistência técnica inclusa, venda, filtros, óleo e manutenção de compressores de parafuso para mineração e indústria em Minas Gerais.",
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
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
