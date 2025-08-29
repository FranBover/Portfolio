// src/components/layout/Footer.tsx
import { Container } from "../ui/Container";

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-black text-[var(--color-yellow)]">
      {/* Franja decorativa superior */}
      <div className="relative">
        <Container>
            <div className="relative h-[90px] sm:h-[110px]">
            {/* Rayas (ancho responsivo controlado) */}
            <img
                src="/footer/rayas.png"
                alt=""
                aria-hidden
                className="absolute left-0 top-3 w-[min(680px,72vw)] h-auto select-none pointer-events-none"
            />

           
            </div>
        </Container>
        </div>


      {/* Contenido */}
      <div className="py-8">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Links del sitio (columna izquierda) */}
            <nav aria-label="Secciones del sitio" className="space-y-3">
              <a href="#about" className="nav-link block hover:underline">Sobre mí</a>
              <a href="#tools" className="nav-link block hover:underline">Herramientas</a>
              <a href="#projects" className="nav-link block hover:underline">Proyectos</a>
              

              {/* Botón Inicio */}
              <div className="pt-2">
                <a
                  href="#top"
                  className="inline-flex items-center rounded-full border-2 border-[var(--color-yellow)] px-3 py-1 text-[12px] md:text-[14px]
                             hover:bg-[var(--color-yellow)] hover:text-black transition-colors"
                >
                  Inicio
                </a>
              </div>
            </nav>

            {/* Redes (columna derecha) */}
            <aside className="md:text-right">
              <ul className="space-y-3">
                <li className="flex items-center gap-2 md:justify-end">
                  <img src="/contact/whatsapp.svg" alt="" className="h-5 w-5" aria-hidden />
                  <a className="nav-link hover:underline" href="https://wa.me/5493512308157?text=Hola%20Fran%2C%20te%20escribo%20desde%20tu%20portafolio" target="_blank" rel="noreferrer">WhatsApp</a>
                </li>
                <li className="flex items-center gap-2 md:justify-end">
                  <img src="/contact/github.svg" alt="" className="h-5 w-5" aria-hidden />
                  <a className="nav-link hover:underline" href="https://github.com/FranBover" target="_blank" rel="noreferrer">GitHub</a>
                </li>
                <li className="flex items-center gap-2 md:justify-end">
                  <img src="/contact/linkedin.svg" alt="" className="h-5 w-5" aria-hidden />
                  <a className="nav-link hover:underline" href="https://www.linkedin.com/in/francisco-bover" target="_blank" rel="noreferrer">LinkedIn</a>
                </li>
                <li className="flex items-center gap-2 md:justify-end">
                  <img src="/contact/instagram.svg" alt="" className="h-5 w-5" aria-hidden />
                  <a className="nav-link hover:underline" href="https://instagram.com/franfranfranfrna" target="_blank" rel="noreferrer">@franfranfranfna</a>
                </li>
              </ul>
            </aside>
          </div>

          {/* línea final */}
          <div className="mt-8 border-t border-white/10 pt-4 text-xs opacity-70">
            © {new Date().getFullYear()} Francisco Bover — 
          </div>
        </Container>
      </div>
    </footer>
  );
}
