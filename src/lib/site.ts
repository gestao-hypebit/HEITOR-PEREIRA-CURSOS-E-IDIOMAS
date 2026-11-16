// Configurações centrais do site — altere aqui contato e links.

// TODO: confirmar o número de WhatsApp com o cliente (formato: 55 + DDD + número, só dígitos).
export const WHATSAPP_NUMBER = "5591999999999";

export const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e gostaria de saber mais sobre os cursos de idiomas.";

export const whatsappLink = (message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const SITE_NAME = "Heitor Pereira Curso de Idiomas";

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#professores", label: "Professores" },
  { href: "#alunos", label: "Alunos" },
  { href: "#aulas", label: "Aulas" },
] as const;
