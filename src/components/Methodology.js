import { Container } from "./Section";

const steps = [
  {
    n: "01",
    title: "Relevamiento",
    text: "Vemos cómo se trabaja hoy: qué planillas existen, quién carga cada dato y dónde se traba el circuito.",
  },
  {
    n: "02",
    title: "Diagnóstico",
    text: "Medimos dónde se pierde tiempo o plata y priorizamos lo que más impacta en la operación.",
  },
  {
    n: "03",
    title: "Implementación",
    text: "Ponemos el sistema en marcha por etapas, sin frenar el trabajo diario, y seguimos dando soporte.",
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="bg-mist py-20 sm:py-28">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-ink px-6 py-14 text-white sm:px-12 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-accent-500 uppercase">
                Metodología
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                El método <span className="text-accent-500">Duck IT</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed font-light text-neutral-300 sm:text-lg">
                Aplicamos la lógica del Rubber Duck Debugging a toda tu empresa: analizamos tus
                problemas operativos paso a paso hasta encontrar la solución tecnológica más
                eficiente, segura y escalable.
              </p>
            </div>

            <ol className="space-y-4">
              {steps.map((s) => (
                <li
                  key={s.n}
                  className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
                >
                  <span className="text-2xl font-black text-accent-500">{s.n}</span>
                  <div>
                    <h3 className="font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm font-light text-neutral-400">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
