import Image from "next/image";
import { whatsappLink } from "@/lib/site";

export function Method() {
  return (
    <section id="metodo" className="bg-waves">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-32">
        <div className="reveal mx-auto w-full max-w-[600px]">
          <Image
            src="/images/metodo-aula-ingles.webp"
            alt="Aula de inglês online por videochamada, com aluno sorrindo e mensagem de boas-vindas"
            width={810}
            height={514}
            sizes="(min-width: 1024px) 600px, 92vw"
            className="h-auto w-full"
          />
        </div>

        <div className="reveal mx-auto min-w-0 max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight text-ink sm:text-[2.75rem]">
            Fale, compreenda e conquiste novos desafios
          </h2>
          <div className="mt-8 space-y-1 text-lg leading-[1.9] text-muted">
            <p>Temos um método próprio de ensinar!</p>
            <p>
              Oferecemos a fluência do idioma com material didático próprio e atualizado dando{" "}
              <strong className="text-ink">ênfase nas quatro habilidades</strong> (compreensões oral e
              escrita e expressões oral e escrita) sem esquecer os pontos gramaticais. E também
              oferecemos a oportunidade de{" "}
              <strong className="text-ink">obter um diploma de valor internacional</strong> (
              <strong className="text-ink">DELF</strong> para o francês e{" "}
              <strong className="text-ink">CAMBRIDGE</strong> para o inglês).
            </p>
          </div>
          <a
            href={whatsappLink("Olá! Gostaria de reservar uma vaga no curso de idiomas.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full bg-pink px-10 py-5 text-lg font-bold uppercase text-white shadow-[0_10px_30px_rgb(255_10_122/0.25)] transition hover:-translate-y-0.5 hover:bg-pink-dark"
          >
            Reserve sua vaga!
          </a>
        </div>
      </div>
    </section>
  );
}
