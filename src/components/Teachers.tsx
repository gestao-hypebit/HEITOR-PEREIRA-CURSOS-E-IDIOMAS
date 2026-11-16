import Image from "next/image";
import { whatsappLink } from "@/lib/site";

type Teacher = {
  name: string;
  image: string;
  alt: string;
  status?: string;
};

const teachers: Teacher[] = [
  {
    name: "Cláudia Calderaro",
    image: "/images/prof-claudia.webp",
    alt: "Professora Cláudia Calderaro em videochamada",
    status: 'A Professora "super engraçada"!',
  },
  {
    name: "Rhamses Schneider",
    image: "/images/prof-rhamses.webp",
    alt: "Professor Rhamses Schneider em videochamada",
    status: 'O "pai" dos alunos!',
  },
  {
    name: "Heitor Pereira",
    image: "/images/prof-heitor.webp",
    alt: "Professor Heitor Pereira em videochamada",
    status: "O compromisso com o ensino dos idiomas!",
  },
];

function TeacherCard({ t }: { t: Teacher }) {
  return (
    <figure className="reveal relative mx-auto w-full max-w-[400px]">
      <div className="overflow-hidden rounded-2xl shadow-[0_30px_50px_-20px_rgb(0_0_0/0.4)]">
        <Image
          src={t.image}
          alt={t.alt}
          width={1200}
          height={675}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw"
          className="aspect-[9/8] w-full object-cover object-bottom"
        />
      </div>
      <figcaption className="absolute -right-2 -top-5 rounded-xl bg-white px-3.5 py-2 text-sm font-bold text-ink shadow-[0_8px_20px_rgb(0_0_0/0.18)] sm:-right-6 sm:text-base">
        {t.name}
      </figcaption>
      {t.status && (
        <p className="absolute -left-2 bottom-12 flex max-w-[230px] items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 text-sm leading-snug text-ink shadow-[0_8px_20px_rgb(0_0_0/0.18)] sm:-left-8 sm:text-[15px]">
          <span className="size-2.5 shrink-0 rounded-full bg-online" />
          {t.status}
        </p>
      )}
    </figure>
  );
}

export function Teachers() {
  return (
    <section id="professores" className="relative overflow-hidden bg-[#f7f8fa]">
      <div className="bg-dots pointer-events-none absolute inset-y-0 left-0 w-1/3 [mask-image:linear-gradient(to_right,black,transparent)]" />
      <div className="bg-dots pointer-events-none absolute inset-y-0 right-0 w-1/3 [mask-image:linear-gradient(to_left,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-[2.75rem]">Conheça nossos professores:</h2>
          <p className="mt-8 text-lg leading-[1.9] text-muted">
            <strong className="text-ink">Gente que fala a sua língua</strong>. Nossa equipe é formada
            por especialistas apaixonados por ensinar e por conectar pessoas. Com uma metodologia
            dinâmica eles garantem que você aprenda o idioma com o sotaque do seu futuro.
          </p>
        </div>

        <div className="mt-20 grid gap-x-16 gap-y-20 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-20">
          {teachers.map((t) => (
            <TeacherCard key={t.name} t={t} />
          ))}
        </div>

        {/* Card "Professor Parceiro" */}
        <a
          href={whatsappLink("Olá! Tenho interesse em ser um Professor(a) Parceiro.")}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal group relative mx-auto mt-24 block w-full max-w-[400px] px-4 lg:translate-x-[45%]"
        >
          <div className="overflow-hidden rounded-2xl shadow-[0_30px_50px_-20px_rgb(0_0_0/0.4)]">
            <Image
              src="/images/prof-parceiro.webp"
              alt="Silhueta representando a vaga para professor parceiro"
              width={1200}
              height={675}
              sizes="(min-width: 640px) 360px, 92vw"
              className="aspect-[9/8] w-full object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <span className="absolute -right-2 bottom-16 rounded-2xl bg-white px-4 py-3 text-base font-bold text-ink shadow-[0_8px_20px_rgb(0_0_0/0.18)] transition-colors group-hover:text-pink sm:-right-20 sm:text-lg">
            &quot;Seja um Professor(a) Parceiro&quot;
          </span>
        </a>
      </div>
    </section>
  );
}
