import ContactForm from "./ContactForm";
import Icon from "./Icon";
import { Logo } from "./Navbar";
import { Container } from "./Section";

export default function Footer() {
  return (
    <footer id="contacto" className="scroll-mt-16 border-t border-neutral-200 bg-white">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent-600 uppercase">Contacto</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Hablemos de tu proyecto
            </h2>
            <p className="mt-4 leading-relaxed font-light text-neutral-600">
              Contanos qué necesita tu empresa y te enviamos una propuesta sin compromiso.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  <Icon name="pin" className="h-5 w-5" />
                </span>
                <span className="text-sm leading-relaxed text-ink">
                  Rosario, Santa Fe
                  <span className="block font-light text-neutral-500">Cobertura Nacional Remota</span>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  <Icon name="mail" className="h-5 w-5" />
                </span>
                <a href="mailto:hola@duckit.com.ar" className="text-sm font-medium text-ink hover:text-accent-600">
                  hola@duckit.com.ar
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>

      <div className="border-t border-neutral-200 bg-mist">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <Logo />
          <p className="text-xs font-light text-neutral-500">
            © {new Date().getFullYear()} Duck IT Systems. Rosario, Santa Fe / Cobertura Nacional Remota.
          </p>
        </Container>
      </div>
    </footer>
  );
}
