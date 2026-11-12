import Image from "next/image";
import Icon from "./Icon";
import { Container } from "./Section";

const WHATSAPP_URL =
  "https://wa.me/5493471629178?text=Hola,%20vengo%20de%20la%20web%20de%20Duck%20IT.%20Me%20gustar%C3%ADa%20solicitar%20un%20presupuesto";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e5e5e5_1px,transparent_0)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-accent-200/40 blur-3xl"
      />

      <Container className="relative py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative mx-auto mb-8 aspect-[100/64] w-52 overflow-hidden sm:w-64">
            <Image
              src="/logo-duckit.png"
              alt="Duck IT Logo"
              width={512}
              height={512}
              priority
              sizes="(min-width: 640px) 256px, 208px"
              className="absolute inset-x-0 top-0 h-auto w-full -translate-y-[7%] mix-blend-multiply"
            />
          </div>

          <p className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-accent-700 uppercase sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-600" />
            Agencia de desarrollo y soporte IT
          </p>

          <h1 className="mt-6 text-4xl leading-[1.08] font-black tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Soluciones tecnológicas que{" "}
            <span className="text-accent-600">ordenan y potencian</span> tu empresa.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed font-light text-neutral-600 sm:text-lg">
            Desarrollamos sistemas de gestión a medida, optimizamos tu infraestructura y
            centralizamos el control de tu negocio. Dejá la tecnología en nuestras manos y
            enfocate en hacer crecer tu empresa.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition hover:bg-accent-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
            >
              Solicitar Presupuesto
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#soluciones"
              className="inline-flex items-center justify-center rounded-lg border border-ink/80 px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-accent-600 hover:text-accent-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
            >
              Ver Sistemas Core
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
