import { socials } from "../../data/socials";
import { SocialIcon } from "../ui/SocialIcon";

/** Botones redondos de 44px, solo ícono (columna izquierda / hero mobile). */
export function SocialRoundLinks() {
  return (
    <div className="flex gap-3">
      {socials.map((s) => (
        <a
          key={s.key}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          className="flex h-11 w-11 items-center justify-center rounded-[22px] border border-[rgba(230,213,184,.14)] text-[var(--color-yellow)]"
        >
          <SocialIcon name={s.key} className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
