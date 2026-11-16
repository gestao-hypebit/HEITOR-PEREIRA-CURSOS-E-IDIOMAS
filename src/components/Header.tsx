"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS, whatsappLink } from "@/lib/site";
import { Close, Menu } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_4px_24px_rgb(0_0_0/0.06)]" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" aria-label="Heitor Pereira Curso de Idiomas — início">
          <Image
            src="/images/logo.png"
            alt="Heitor Pereira Curso de Idiomas"
            width={265}
            height={82}
            preload
            className="h-12 w-auto sm:h-14"
          />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-10 lg:flex xl:gap-16">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-bold uppercase tracking-wide text-ink transition-colors hover:text-pink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-pink px-14 py-3 text-[15px] font-bold uppercase text-white transition hover:-translate-y-0.5 hover:bg-pink-dark"
          >
            Contato
          </a>
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full text-ink lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Menu mobile"
          className="border-t border-black/5 bg-white px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-bold uppercase tracking-wide text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-pink py-3.5 text-center font-bold uppercase text-white"
          >
            Contato
          </a>
        </nav>
      )}
    </header>
  );
}
