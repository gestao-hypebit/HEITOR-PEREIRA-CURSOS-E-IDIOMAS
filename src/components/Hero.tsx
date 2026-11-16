import Image from "next/image";
import { Plane, Smile, VideoChat } from "./icons";

export function Hero() {
  return (
    <section id="inicio" className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-8 lg:pb-28 lg:pt-6">
        <div className="text-center">
          <h1 className="text-balance text-[2rem] font-bold leading-[1.15] text-ink sm:text-[2.6rem] xl:text-[2.75rem]">
            Liberte sua voz no mundo: aprenda um novo idioma sem complicação!
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-[1.6rem] sm:leading-snug">
            Estude com <strong className="font-bold text-ink">os melhores professores</strong>, aulas
            dinâmicas e flexibilidade total para você.
          </p>
          <a
            href="#metodo"
            className="mt-10 inline-flex rounded-full bg-pink px-16 py-6 text-[17px] font-bold uppercase text-white shadow-[0_10px_30px_rgb(255_10_122/0.25)] transition hover:-translate-y-0.5 hover:bg-pink-dark"
          >
            Conheça mais
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-[740px] lg:mt-4">
          <div className="overflow-hidden shadow-[0_40px_60px_-20px_rgb(0_0_0/0.45)]">
            <Image
              src="/images/hero-aula-online.webp"
              alt="Aula de idiomas ao vivo pelo Google Meet com o professor Heitor Pereira e alunos"
              width={1024}
              height={834}
              preload
              sizes="(min-width: 1024px) 740px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <span className="absolute -left-3 top-[16%] inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-[0_8px_24px_rgb(0_0_0/0.18)] sm:-left-12 sm:px-5 sm:text-lg">
            <span className="relative flex size-3">
              <span className="absolute inset-0 animate-ping rounded-full bg-online opacity-60" />
              <span className="relative size-3 rounded-full bg-online" />
            </span>
            Aulas 100% Online!
          </span>
        </div>
      </div>
    </section>
  );
}

const highlights = [
  { Icon: VideoChat, text: "Todos os níveis são bem-vindos." },
  { Icon: Plane, text: "Preparamos para obter Diploma internacional." },
  { Icon: Smile, text: "Turmas reduzidas para mais atenção dos professores." },
];

export function Highlights() {
  return (
    <section aria-label="Diferenciais" className="bg-sun">
      <ul className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-center lg:gap-10 lg:py-14 xl:gap-14">
        {highlights.map(({ Icon, text }) => (
          <li key={text} className="flex items-center gap-3 text-base font-bold text-ink xl:whitespace-nowrap xl:text-[1.05rem]">
            <Icon className="size-7 shrink-0" />
            {text}
          </li>
        ))}
      </ul>
    </section>
  );
}
