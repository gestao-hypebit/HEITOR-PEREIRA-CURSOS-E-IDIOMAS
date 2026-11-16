import Image from "next/image";
import { whatsappLink } from "@/lib/site";
import { Cam, FlagUS, HangUp, Mic } from "./icons";

export function CallControls({ size = "md" }: { size?: "sm" | "md" }) {
  const btn = size === "sm" ? "size-5 p-1" : "size-7 p-1.5";
  return (
    <div className="flex items-center gap-1.5">
      <span className={`${btn} grid place-items-center rounded-full bg-white text-call`}>
        <Mic />
      </span>
      <span className={`${btn} grid place-items-center rounded-full bg-white text-call`}>
        <Cam />
      </span>
      <span className={`${btn} grid place-items-center rounded-full bg-[#ea4335] text-white`}>
        <HangUp />
      </span>
    </div>
  );
}

export function Method() {
  return (
    <section id="metodo" className="bg-waves">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-32">
        {/* Composição de imagens estilo videochamada */}
        <div className="reveal relative mx-auto w-full max-w-[560px] pb-10 pr-6 sm:pr-28">
          <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgb(0_0_0/0.35)]">
            <Image
              src="/images/aula-claudia.webp"
              alt="Professora Cláudia Calderaro dando aula de inglês online"
              width={1024}
              height={1536}
              sizes="(min-width: 1024px) 460px, 90vw"
              className="aspect-[4/3] w-full object-cover object-[50%_28%]"
            />
            <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/45 to-transparent pb-3 pt-8">
              <CallControls />
            </div>
          </div>

          <div className="absolute -left-2 bottom-0 w-[38%] overflow-hidden rounded-xl border-2 border-white shadow-[0_16px_30px_rgb(0_0_0/0.3)] sm:-left-8">
            <Image
              src="/images/aula-rhamses.webp"
              alt="Aluno participando da aula online"
              width={1024}
              height={1536}
              sizes="200px"
              className="aspect-[16/11] w-full object-cover object-[50%_30%]"
            />
          </div>

          <div className="absolute right-0 top-[12%] flex w-36 flex-col items-center gap-3 rounded-2xl bg-white px-4 py-6 text-center text-[15px] leading-snug text-ink shadow-[0_18px_40px_rgb(0_0_0/0.15)] sm:w-48 sm:px-6 sm:py-8 sm:text-lg">
            <FlagUS className="size-12 sm:size-14" />
            <p>
              Hello! Welcome to our <strong>English Class.</strong>
            </p>
          </div>
        </div>

        <div className="reveal">
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
