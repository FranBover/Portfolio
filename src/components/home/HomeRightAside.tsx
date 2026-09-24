import { AvailabilityStatus } from "./AvailabilityStatus";
import { FilmStrip } from "./FilmStrip";
import { TechSheet } from "./TechSheet";
import { getSocial } from "../../data/socials";

export function HomeRightAside() {
  const whatsapp = getSocial("whatsapp");

  return (
    <div className="flex h-full flex-col justify-between px-9 pb-9 pt-10">
      <div className="flex flex-col gap-[26px]">
        <AvailabilityStatus />
        <FilmStrip size="aside" />
        <TechSheet variant="aside" />
      </div>

      <div className="flex items-end justify-between">
        <a href={whatsapp.href} target="_blank" rel="noreferrer" className="cta text-[13px] text-[var(--color-yellow)]">
          Escribime por WhatsApp ↗
        </a>
        <span className="cta text-[11px] text-[rgba(230,213,184,.62)]">© {new Date().getFullYear()}</span>
      </div>
    </div>
  );
}
