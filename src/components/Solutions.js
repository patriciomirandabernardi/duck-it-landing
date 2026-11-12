import Icon from "./Icon";
import { Container, SectionHeading } from "./Section";

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
  },
];

export default function Solutions() {
  return (
    <section id="soluciones" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Sistemas Core"
          title="Dos cuellos de botella que resolvemos de raíz"
          text="Unidades paradas sin control y un stock que solo cierra en Excel. Para eso armamos estos sistemas: se ajustan a cómo ya trabaja tu empresa y reemplazan las planillas sueltas."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
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
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
