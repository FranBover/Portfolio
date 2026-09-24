import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "../ui/Button";
import { cn } from "../../lib/cn";

const NAV_ITEMS = [
  { id: "inicio", label: "Inicio" },
  { id: "proyectos", label: "Proyectos" },
  { id: "herramientas", label: "Herramientas" },
  { id: "contacto", label: "Contacto" },
] as const;

const NAV_IDS = NAV_ITEMS.map((item) => item.id);

function useScrollSpy(ids: readonly string[], enabled: boolean) {
  const [active, setActive] = useState<string>(ids[0]);

  useEffect(() => {
    if (!enabled) return;
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, enabled]);

  return active;
}

/** Un link de nav que hace scroll en Inicio, o navega + deja el hash para las otras rutas. */
function NavItem({
  id,
  label,
  active,
  isHome,
  onClick,
}: {
  id: string;
  label: string;
  active: boolean;
  isHome: boolean;
  onClick?: () => void;
}) {
  const className = cn(
    "cta whitespace-nowrap border-b-2 pb-[6px] text-[var(--color-yellow)] transition-colors",
    active ? "border-[var(--color-yellow)]" : "border-transparent"
  );

  if (isHome) {
    return (
      <a href={`#${id}`} className={className} onClick={onClick}>
        {label}
      </a>
    );
  }
  return (
    <Link to={`/#${id}`} className={className} onClick={onClick}>
      {label}
    </Link>
  );
}

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const activeId = useScrollSpy(NAV_IDS, isHome);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="sticky top-0 z-40 h-16 w-full border-b border-[rgba(230,213,184,.14)] bg-[var(--color-blue)] md:h-[72px]">
      <div className="mx-auto flex h-full w-full items-center gap-4 px-5 md:px-9">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img src="/Logo.png" alt="" className="h-9 w-9 md:h-10 md:w-10" />
          <span
            className="text-[15px] text-[var(--color-white)] md:text-[17px]"
            style={{ fontFamily: "var(--font-display-1)", fontWeight: 900 }}
          >
            Francisco Bover
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.id}
              id={item.id}
              label={item.label}
              isHome={isHome}
              active={isHome && activeId === item.id}
            />
          ))}
        </nav>

        <div className="ml-auto hidden shrink-0 md:block">
          <Button href={isHome ? "#contacto" : "/#contacto"}>Hablemos</Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-[20px] border-2 border-[var(--color-yellow)] text-[var(--color-yellow)] md:hidden"
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="currentColor" aria-hidden="true">
            <rect x="0" y="0" width="22" height="2.5" />
            <rect x="0" y="6.5" width="22" height="2.5" />
            <rect x="0" y="13" width="22" height="2.5" />
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="absolute right-0 top-0 flex h-full w-72 max-w-[85vw] flex-col border-l border-[rgba(230,213,184,.14)] bg-[var(--color-blue)] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="cta text-[var(--color-yellow)]">Menú</span>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-[20px] border-2 border-[var(--color-yellow)] text-[var(--color-yellow)]"
              >
                ✕
              </button>
            </div>
            <ul className="flex flex-col gap-5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <NavItem
                    id={item.id}
                    label={item.label}
                    isHome={isHome}
                    active={isHome && activeId === item.id}
                    onClick={() => setOpen(false)}
                  />
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <Button
                href={isHome ? "#contacto" : "/#contacto"}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Hablemos
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
