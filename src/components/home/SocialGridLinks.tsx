import { socials } from "../../data/socials";
import { SceneLabel } from "../ui/SceneLabel";
import { SocialIcon } from "../ui/SocialIcon";

/** Grid de 2 columnas con ícono + label, para el cierre de ESC.04 en celular ("Encontrame en"). */
export function SocialGridLinks() {
  return (
    <div className="flex flex-col gap-3">
      <SceneLabel className="text-[rgba(230,213,184,.62)]">Encontrame en</SceneLabel>
      <div className="grid grid-cols-2 gap-2.5">
        {socials.map((s) => (
          <a
            key={s.key}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[52px] items-center gap-3 rounded-[12px] border border-white/10 bg-white/[0.03] px-3.5 text-[var(--color-yellow)]"
          >
            <SocialIcon name={s.key} className="h-[22px] w-[22px] shrink-0" />
            <span className="cta text-[14px] truncate">{s.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
