import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Aprenda inglês e francês sem complicação com os melhores professores. Aulas 100% online, turmas reduzidas, material didático próprio e preparação para os diplomas internacionais DELF e Cambridge.";

export const metadata: Metadata = {
  // Defina NEXT_PUBLIC_SITE_URL no deploy (ex.: https://www.heitorpereira.com.br)
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Heitor Pereira Curso de Idiomas | Inglês e Francês Online",
  description,
  keywords: [
    "curso de inglês",
    "curso de francês",
    "aulas online",
    "DELF",
    "Cambridge",
    "Belém",
    "Heitor Pereira",
  ],
  openGraph: {
    title: "Heitor Pereira Curso de Idiomas",
    description,
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/hero-aula-online.webp" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} antialiased`}>
      <body className="min-h-full overflow-x-clip font-sans">{children}</body>
    </html>
  );
}
