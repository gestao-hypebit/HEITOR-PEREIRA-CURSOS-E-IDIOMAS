import { QuoteClose, QuoteOpen, Star } from "./icons";

const testimonials = [
  {
    quote:
      "Gosto de estudar com Heitor pelo compromisso que ele tem com cada aluno(a) e com o processo de ensino/aprendizagem. Pelo uso de material próprio e certeza de que ele sabe o que está fazendo. Não se trata de um cursinho convencional que toma o teu tempo sem garantia de retorno. Aqui aprende-se de verdade!",
    name: "Walther Carvalho",
    role: "Biólogo e professor do CESUPA.",
  },
  {
    quote:
      "Aprender outro idioma é uma tarefa tão difícil quanto ensiná-lo, por isso, o compromisso assumido por aluno e professor é vital para que todo processo seja concluído com êxito. Não há como aprender sem a dedicação e o esforço do professor. Estudar com o Heitor Pereira é uma grande experiência de aprendizado, pois além do seu domínio sobre o idioma, seu maior diferencial é não apenas o ensino, mas fazer a mais absoluta questão que o aluno realmente aprenda tudo o que lhe é repassado. Não à toa, eu sempre indico o Curso de Idiomas Heitor Pereira para meus amigos e alunos.",
    name: "Daniel Ferraz",
    role: "Biólogo e professor do IFPA.",
  },
  {
    quote:
      "Recomendo demais! O método de ensino motiva! Mesmo a distância, está sendo perfeito para conseguir destravar e melhorar o meu speaking. Além disso, a equipe de ensino é altamente qualificada!",
    name: "Edgar Wilson",
    role: "Publicitário, Designer e estudante de Mestrado em Design e Publicidade em Lisboa.",
  },
];

export function Testimonials() {
  return (
    <section id="alunos" className="bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <h2 className="reveal text-balance text-center text-3xl font-bold text-ink sm:text-[2.75rem]">
          Você pode ser a próxima história de sucesso!
        </h2>

        <div className="mt-16 space-y-16 lg:space-y-20">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal relative px-2 sm:px-20 ${i === testimonials.length - 1 ? "mx-auto max-w-4xl" : ""}`}
            >
              <QuoteOpen className="absolute -left-1 bottom-6 hidden w-16 text-sky sm:block" />
              <QuoteClose className="absolute -right-1 top-0 hidden w-16 text-sky sm:block" />

              <div className="flex gap-1 text-sky" aria-label="5 de 5 estrelas" role="img">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-5" />
                ))}
              </div>
              <blockquote className="mt-4 text-[17px] leading-[1.9] text-muted sm:text-justify sm:text-lg">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-right text-sky">
                <span className="block text-lg font-bold">{t.name}</span>
                <span className="block text-[17px]">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
