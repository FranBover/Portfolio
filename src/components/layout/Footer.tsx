// src/components/layout/Footer.tsx
import { Container } from "../ui/Container";

const NAV = [
  { href: "#about", label: "Sobre mí" },
  { href: "#tools", label: "Herramientas" },
  { href: "#vinto", label: "Vinto" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

const SOCIALS = [
  { label: "WhatsApp", icon: "/contact/whatsapp.svg", href: "https://wa.me/5493512308157?text=Hola%20Fran%2C%20te%20escribo%20desde%20tu%20portafolio" },
  { label: "GitHub", icon: "/contact/github.svg", href: "https://github.com/FranBover" },
  { label: "LinkedIn", icon: "/contact/linkedin.svg", href: "https://www.linkedin.com/in/francisco-bover-2757a0323/" },
  { label: "@franfranfranfrna", icon: "/contact/instagram.svg", href: "https://www.instagram.com/franfranfranfrna/" },
];

const kicker =
  "font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-yellow)]/70";

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-black text-[var(--color-yellow)]">
      {/* Borde superior de separación */}
      <div aria-hidden className="h-[3px] w-full bg-[var(--color-yellow)]/30" />

      <Container>
        {/* ===== Cuerpo ===== */}
        <div className="grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <a href="#top" className="group inline-flex items-center gap-3">
              <img
                src="/footer/espiral.png"
                alt=""
                aria-hidden
                className="logo-spin h-11 w-11 select-none"
              />
              <span
                className="text-[22px] leading-none"
                style={{ fontFamily: "var(--font-display-1)", fontWeight: 900 }}
              >
                Francisco Bover
              </span>
            </a>

            <p
              className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-[var(--color-yellow)]/85"
              style={{ fontFamily: "var(--font-copy)" }}
            >
              Desarrollo creativo, diseño visual y soluciones con código. Hecho a
              mano desde Córdoba, Argentina.
            </p>

            {/* Dos líneas de homenaje (las completa Fran) */}
            <div className="mt-5 space-y-1 font-mono text-[11px] text-[var(--color-yellow)]/55">
              <p>{/* frase de cine — la pongo yo */}</p>
              <p>{/* frase de funk — la pongo yo */}</p>
            </div>
          </div>

          {/* Mapa del sitio */}
          <nav aria-label="Secciones del sitio">
            <h3 className={kicker}>Mapa</h3>
            <ul className="mt-4 space-y-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="nav-link link-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes */}
          <aside>
            <h3 className={kicker}>Redes</h3>
            <ul className="mt-4 space-y-3">
              {SOCIALS.map((s) => (
                <li key={s.label} className="group flex items-center gap-3">
                  <img
                    src={s.icon}
                    alt=""
                    className="social-pop h-5 w-5 shrink-0"
                    aria-hidden
                  />
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link link-underline truncate"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* ===== Barra inferior ===== */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-5 sm:flex-row">
          <p className="font-mono text-[11px] text-[var(--color-yellow)]/60">
            © {new Date().getFullYear()} Francisco Bover · Hecho a mano en Córdoba
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-yellow)] px-4 py-1.5 text-[12px] font-mono uppercase tracking-[0.12em] transition-colors hover:bg-[var(--color-yellow)] hover:text-black"
          >
            Volver arriba ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
