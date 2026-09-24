import { cn } from "../../lib/cn";

type ButtonVariant = "outline" | "solid";

type ButtonProps =
  (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined; variant?: ButtonVariant }) |
  (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; variant?: ButtonVariant });

export function Button({ className, href, variant = "outline", ...props }: ButtonProps) {
  const base =
    // tipografía CTA + layout exacto de Figma
    "cta inline-flex items-center justify-center select-none " +
    "gap-[var(--btn-gap)] h-[var(--btn-h)] px-[var(--btn-pad-x)] " +
    "rounded-[var(--btn-radius)] border-1 " +
    // accesibilidad / interacción
    "transition-colors duration-200 focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-[var(--color-yellow)] focus-visible:ring-offset-2 " +
    "disabled:opacity-50 disabled:cursor-not-allowed";

  // Normal: azul con borde/texto amarillo (nav, "Hablemos")
  const outline =
    "bg-[var(--color-blue)] text-[var(--color-yellow)] border-[var(--color-yellow)] " +
    "hover:bg-[var(--color-yellow)] hover:text-[var(--color-blue)] hover:border-[var(--color-yellow)]";

  // Rellena: amarilla con texto azul ("Ver caso →", "Enviar")
  const solid =
    "bg-[var(--color-yellow)] text-[var(--color-blue)] border-[var(--color-yellow)] " +
    "hover:bg-[var(--color-blue)] hover:text-[var(--color-yellow)] hover:border-[var(--color-yellow)]";

  const classes = cn(base, variant === "solid" ? solid : outline, className);

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