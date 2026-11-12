"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "./Icon";
import { Container } from "./Section";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#contacto", label: "Contacto" },
];

export function Logo({ priority = false }) {
  return (
    <a href="#inicio" className="flex items-center gap-2" aria-label="Duck IT Systems, inicio">
      <span className="relative h-10 w-10 shrink-0 overflow-hidden">
        <Image
          src="/logo-duckit.png"
          alt="Duck IT Logo"
          width={96}
          height={96}
          priority={priority}
          className="absolute -top-[7px] -left-[28px] max-w-none mix-blend-multiply"
        />
      </span>
      <span className="flex items-baseline gap-1.5">
        <span className="text-xl font-black tracking-tight text-ink">DUCK IT</span>
        <span className="text-xs font-semibold tracking-[0.25em] text-accent-600">SYSTEMS</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Logo priority />

        <nav className="hidden md:block" aria-label="Principal">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-neutral-600 transition-colors hover:text-accent-600"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 rounded-md p-2 text-ink hover:bg-neutral-100 md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </Container>

      {open && (
        <nav id="menu-movil" className="border-t border-neutral-200 bg-white md:hidden" aria-label="Móvil">
          <Container>
            <ul className="flex flex-col py-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-medium text-ink hover:text-accent-600"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
