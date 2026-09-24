import { SocialRoundLinks } from "./SocialRoundLinks";
import { Tracklist } from "./Tracklist";

export function HomeLeftAside() {
  return (
    <div className="flex h-full flex-col justify-between px-9 pb-9 pt-10">
      <div className="flex flex-col gap-[22px]">
        <h1
          className="text-[54px] leading-[.95] text-[var(--color-yellow)]"
          style={{ fontFamily: "var(--font-display-1)", fontWeight: 900, letterSpacing: "-.01em" }}
        >
          Francisco
          <br />
          Bover
        </h1>
        <p className="text-[20px] leading-[1.35] text-[var(--color-white)]" style={{ fontFamily: "var(--font-display-2)" }}>
          Desarrollador full-stack.
        </p>
        <SocialRoundLinks />
      </div>

      <Tracklist />
    </div>
  );
}
