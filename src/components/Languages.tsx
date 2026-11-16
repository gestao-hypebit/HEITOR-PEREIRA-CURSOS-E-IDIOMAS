import type { ComponentType, SVGProps } from "react";
import { ChevronDown, FlagFR, FlagUS } from "./icons";

type Lang = {
  name: string;
  Flag: ComponentType<SVGProps<SVGSVGElement>>;
  lead: string;
  body: string;
};

const languages: Lang[] = [
  {
    name: "Inglês",
    Flag: FlagUS,
    lead: 'Do "the book is on the table" para o mundo. 🌍',
    body: "Chega de travar na hora de falar! Aprenda o inglês que você realmente vai usar: para maratonar séries sem legenda, garantir aquele job internacional e pedir seu café em Londres sem fazer mímica. Um método direto, atual e sem enrolação. Bora destravar o seu potencial global?",
  },
  {
    name: "Francês",
    Flag: FlagFR,
    lead: "Voulez-vous aprender francês? 🥐",
    body: 'Muito além do "biquinho", a gente te ensina a falar com confiança e estilo. Esqueça as aulas engessadas; aqui você aprende a língua mais charmosa do mundo de um jeito leve e prático. Ideal para quem busca cultura, viagens inesquecíveis e aquele je ne sais quoi no currículo. C\'est parti!',
  },
];

export function Languages() {
  return (
    <section id="aulas" className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
        <h2 className="reveal mx-auto max-w-lg text-balance text-center text-3xl font-bold leading-tight text-ink sm:text-[2.75rem]">
          Qual idioma combina mais com o seu futuro?
        </h2>

        <div className="mx-auto mt-14 max-w-md space-y-4">
          {languages.map(({ name, Flag, lead, body }) => (
            <details key={name} name="idiomas" className="group">
              <summary className="flex cursor-pointer items-center gap-6 rounded-lg py-5 outline-offset-4 focus-visible:outline-2 focus-visible:outline-pink">
                <Flag className="size-10 shrink-0" />
                <span className="flex flex-1 items-center justify-between border-b border-transparent pb-1 text-xl font-semibold text-[#444] transition-colors group-open:border-black/10 group-open:text-brand-red group-hover:text-brand-red">
                  {name}
                  <ChevronDown className="chevron size-5 transition-transform duration-300" />
                </span>
              </summary>
              <div className="pb-6 pl-16 text-lg leading-relaxed text-muted">
                <p>
                  <strong className="text-ink">{lead}</strong> {body}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Banner() {
  return (
    <section className="bg-sky px-4 py-12 text-center text-white sm:py-14">
      <h2 className="text-balance text-3xl font-bold sm:text-[2.6rem]">
        Aulas práticas. Satisfação garantida.
      </h2>
      <p className="mt-3 text-lg sm:text-[1.35rem] sm:leading-snug">
        Cursos flexíveis e acessíveis para você aprender no seu ritmo.
        <br />
        Comece agora a jornada rumo à fluência!
      </p>
    </section>
  );
}
