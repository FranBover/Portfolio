import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Etiqueta a renderizar (div por defecto) */
  as?: React.ElementType;
  /** Retardo en ms para escalonar (stagger) */
  delay?: number;
  className?: string;
};

/**
 * Aparece una vez al entrar en viewport (opacity 0→1 + translateY 16px→0).
 * Dispara una sola vez y desconecta el observer.
 * Respeta prefers-reduced-motion: si está activo, muestra el contenido sin animar.
 */
export function Reveal({
  children,
  as: Comp = "div",
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setAnimate(false);
      setShown(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Comp
      ref={ref as React.Ref<HTMLElement>}
      data-shown={shown ? "true" : "false"}
      className={`${animate ? "reveal" : ""} ${className}`.trim()}
      style={animate ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Comp>
  );
}
