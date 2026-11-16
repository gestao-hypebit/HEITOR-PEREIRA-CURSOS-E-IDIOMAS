import { About, FinalCta, Footer, WhatsAppFloat } from "@/components/About";
import { Header } from "@/components/Header";
import { Hero, Highlights } from "@/components/Hero";
import { Banner, Languages } from "@/components/Languages";
import { Method } from "@/components/Method";
import { Teachers } from "@/components/Teachers";
import { Testimonials } from "@/components/Testimonials";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Heitor Pereira Curso de Idiomas",
  description:
    "Cursos de inglês e francês online com material didático próprio e preparação para os diplomas DELF e Cambridge.",
  foundingDate: "1994",
  founder: { "@type": "Person", name: "Heitor Pereira" },
  address: { "@type": "PostalAddress", addressLocality: "Belém", addressRegion: "PA", addressCountry: "BR" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Method />
        <Languages />
        <Banner />
        <Teachers />
        <Testimonials />
        <About />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
