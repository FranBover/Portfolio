import { useEffect, useState } from "react";

/** Devuelve el id de la sección visible más arriba del viewport, según IntersectionObserver. */
export function useScrollSpy(ids: readonly string[], enabled: boolean, rootMargin = "-100px 0px -70% 0px") {
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
      { rootMargin, threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, enabled, rootMargin]);

  return active;
}
