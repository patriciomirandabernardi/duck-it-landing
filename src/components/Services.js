import Icon from "./Icon";
import { Container, SectionHeading } from "./Section";

const services = [
  {
    icon: "cloud",
    title: "Sistemas de Gestión (SaaS)",
    text: "Implementación rápida de software para control operativo.",
  },
  {
    icon: "code",
    title: "Desarrollo a Medida",
    text: "Programación de soluciones web específicas para digitalizar los procesos únicos de tu empresa.",
  },
  {
    icon: "cpu",
    title: "Hardware y Soporte IT",
    text: "Armado de equipos de alto rendimiento y soporte técnico remoto/presencial.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-16 bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Todo lo que tu empresa necesita en tecnología"
          center
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:border-accent-200 hover:shadow-xl hover:shadow-accent-600/5 sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition group-hover:bg-accent-600 group-hover:text-white">
                <Icon name={s.icon} />
              </div>
              <h3 className="mt-6 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-3 leading-relaxed font-light text-neutral-600">{s.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
