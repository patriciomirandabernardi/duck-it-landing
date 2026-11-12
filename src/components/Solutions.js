import Icon from "./Icon";
import { Container, SectionHeading } from "./Section";

const WHATSAPP_NUMBER = "5493471629178";

const demoUrl = (system) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, quisiera solicitar una demo del sistema de ${system}`
  )}`;

const solutions = [
  {
    icon: "truck",
    tag: "Logística",
    title: "Gestión de Flotas y Correctivos",
    text: "Toma el control total de tu logística. Sistema inteligente para programar mantenimientos preventivos y reducir los costos por camiones inactivos.",
    features: [
      "Service preventivo por kilómetros, horas o fecha, con aviso antes del vencimiento",
      "Historial de correctivos por unidad: falla, repuestos, taller y costo",
      "Días fuera de servicio y costo por unidad, medidos y no estimados",
    ],
    demo: demoUrl("Gestión de Flotas y Correctivos"),
  },
  {
    icon: "box",
    tag: "Depósito y compras",
    title: "Control de Stock y Compras",
    text: "Digitaliza tu inventario. Unifica proveedores, controla gastos en tiempo real y automatiza alertas de reposición.",
    features: [
      "Stock mínimo por artículo con alerta antes del faltante",
      "Compras y precios de todos los proveedores en un solo lugar",
      "Gasto por área y por período, sin cruzar planillas a mano",
    ],
    demo: demoUrl("Control de Stock y Compras"),
  },
  {
    icon: "medical",
    tag: "Gestión",
    title: "Sistema de Gestión para Consultorios",
    text: "Digitalización completa para profesionales de la salud.",
    features: [
      "Historiales clínicos digitales centralizados",
      "Base de datos de pacientes con buscador optimizado",
      "Arquitectura segura y escalable",
    ],
    demo: demoUrl("Gestión para Consultorios"),
  },
  {
    icon: "globe",
    tag: "Presencia digital",
    title: "Landing Pages y Presencia Digital",
    text: "Sitios web de alta conversión para agencias y empresas.",
    features: [
      "Desarrollo moderno y ultra rápido (Next.js/React)",
      "Diseño enfocado en captación de clientes (formularios y WhatsApp)",
      "Optimización para buscadores (SEO)",
    ],
  },
];

export default function Solutions() {
  return (
    <section id="soluciones" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Sistemas Duck IT"
          title="Soluciones implementadas: Casos de éxito reales."
          text="Nos adaptamos a tu lógica de trabajo con nuestros sistemas desarrollados a medida que ya están optimizando la operativa diaria de empresas y profesionales."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {solutions.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-mist p-7 transition hover:border-accent-200 sm:p-10"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-600 text-white shadow-lg shadow-accent-600/25">
                  <Icon name={s.icon} className="h-7 w-7" />
                </div>
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-500">
                  {s.tag}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-extrabold tracking-tight text-ink">{s.title}</h3>
              <p className="mt-4 leading-relaxed font-light text-neutral-600">{s.text}</p>

              <ul className="mt-8 space-y-3 border-t border-neutral-200 pt-6">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-ink">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                    {f}
                  </li>
                ))}
              </ul>

              {s.demo && (
                <div className="mt-auto pt-8">
                  <a
                    href={s.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-accent-600 transition hover:text-accent-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
                  >
                    Solicitar Demo
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
