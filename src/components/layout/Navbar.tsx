import { useEffect, useState } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Logo } from "../ui/logo";

const LINKS = [
  { href: "#about", label: "Sobre mí" },
  { href: "#tools", label: "Herramientas" },
  { href: "#projects", label: "Proyectos" },
  // { href: "#links", label: "Links" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[var(--color-blue)]">
      <Container>
        {/* Quitamos justify-between y usamos un bloque derecho con ml-auto */}
        <nav className="h-16 flex items-center">
          {/* Izquierda: logo */}
          <Logo />

          {/* Derecha (desktop): links + botón como un solo bloque */}
          <div className="ml-auto hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="nav-link text-[var(--color-yellow)] underline-offset-[6px] decoration-2 decoration-[var(--color-yellow)] hover:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <Button href="#contact" className="shrink-0">Contacto</Button>
          </div>

          {/* Derecha (mobile): hamburguesa */}
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="ml-auto md:hidden inline-flex h-10 w-10 items-center justify-center rounded-[var(--btn-radius)] border-2 border-[var(--color-yellow)] text-[var(--color-yellow)]"
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="currentColor" aria-hidden="true">
              <rect x="0" y="0" width="22" height="2.5" />
              <rect x="0" y="6.5" width="22" height="2.5" />
              <rect x="0" y="13" width="22" height="2.5" />
            </svg>
          </button>
        </nav>
      </Container>

      {/* Panel mobile */}
      {open && (
        <div
          className="fixed inset-0 z-50"
          aria-modal="true"
          role="dialog"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="absolute right-0 top-0 h-full w-72 bg-[var(--color-blue)] p-6 shadow-[var(--shadow-pop)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <Logo />
              <button
                className="p-2 rounded-md border-2 border-[var(--color-yellow)] text-[var(--color-yellow)]"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block py-2 text-[var(--color-yellow)] underline-offset-1 decoration-2 decoration-[var(--color-yellow)] hover:underline"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Button href="#contact" className="w-full">Contacto</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
