import Image from "next/image";
import { SITE_NAME, whatsappLink } from "@/lib/site";
import { WhatsApp } from "./icons";

export function About() {
  return (
    <section id="sobre" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8 lg:py-28">
        <div className="reveal relative mx-auto w-full max-w-[480px]">
          <Image
            src="/images/sobre-heitor.webp"
            alt="Heitor Pereira palestrando para alunos"
            width={1400}
            height={1158}
            sizes="(min-width: 1024px) 480px, 92vw"
            className="aspect-[16/15] w-full rounded-3xl object-cover shadow-[0_40px_60px_-25px_rgb(0_0_0/0.55)]"
          />
        </div>

        <div className="reveal text-center lg:text-left">
          <h2 className="text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Olá, eu sou
            <br />
            Heitor Pereira! <span aria-hidden>👋</span>
          </h2>
          <div className="mt-8 space-y-7 text-lg leading-[1.95] text-muted lg:text-justify">
            <p>
              Minha jornada com os idiomas começou com uma mala e uma imersão profunda em solo europeu.
              Foi morando e estudando na França que descobri que aprender uma nova língua é, na verdade,
              descobrir uma nova versão de si mesmo.
            </p>
            <p>
              Em 1994, trouxe essa bagagem para Belém e comecei a transformar a vida dos meus primeiros
              alunos. Consolidei essa paixão com a formação em Letras-Francês pela UFPA e, desde então,
              construí um curso baseado em um único propósito:{" "}
              <strong className="text-ink">a excelência no ensino de idiomas.</strong> Hoje, guio
              dezenas de alunos rumo à fluência, com a mesma energia e dedicação do primeiro dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="contato" className="bg-sun px-4 py-20 text-center">
      <h2 className="reveal mx-auto max-w-2xl text-balance text-4xl font-bold leading-tight text-ink sm:text-5xl sm:leading-[1.3]">
        Vamos destravar o seu próximo idioma?
      </h2>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-black px-8 py-5 text-lg font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#222]"
      >
        <WhatsApp className="size-6" />
        Iniciar conversa
      </a>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <Image
          src="/images/logo.png"
          alt={SITE_NAME}
          width={265}
          height={82}
          className="h-16 w-auto"
        />
        <p className="text-center text-lg leading-relaxed text-muted sm:text-right">
          Copyright © {SITE_NAME}
          <br />
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-16 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_rgb(0_0_0/0.25)] transition hover:scale-105"
    >
      <WhatsApp className="size-9" />
    </a>
  );
}
