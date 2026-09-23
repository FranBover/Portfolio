import { cn } from "../../lib/cn";

type ButtonProps =
  (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }) |
  (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

export function Button({ className, href, ...props }: ButtonProps) {
  const base =
    // tipografía CTA + layout exacto de Figma
    "cta inline-flex items-center justify-center select-none " +
    "gap-[var(--btn-gap)] h-[var(--btn-h)] px-[var(--btn-pad-x)] " +
    "rounded-[var(--btn-radius)] border-1 " +
    // accesibilidad / interacción
    "transition-colors duration-200 focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-[var(--color-yellow)] focus-visible:ring-offset-2 " +
    "disabled:opacity-50 disabled:cursor-not-allowed";

  // Default (azul con borde/texto amarillo)
  const def =
    "bg-[var(--color-blue)] text-[var(--color-yellow)] border-[var(--color-yellow)]";

  // Hover (amarillo con texto azul)
  const hov =
    "hover:bg-[var(--color-yellow)] hover:text-[var(--color-blue)] hover:border-[var(--color-yellow)]";

  const classes = cn(base, def, hov, className);

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }
  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}