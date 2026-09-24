import { useEffect, useMemo, useRef, useState } from "react";
import type { SlideGroup, SlideImage } from "../../data/projects/types";

type FlatItem =
  | { key: string; slideIndex: number; caption: string; kind: "image"; image: SlideImage; fitToImage: boolean }
  | { key: string; slideIndex: number; caption: string; kind: "missing"; missingNote: string };

/** Celulares en fila (2-3 capturas verticales): en mobile cada una ya es su propia tarjeta, así que esto solo importa para decidir su recorte. */
function isPhoneGrid(images: SlideImage[]) {
  return images.length > 1 && images.every((img) => img.width < img.height);
}

function flatten(slides: SlideGroup[]): FlatItem[] {
  const out: FlatItem[] = [];
  slides.forEach((slide, si) => {
    if (slide.images.length > 0) {
      const fitToImage = !isPhoneGrid(slide.images);
      slide.images.forEach((image, ii) => {
        out.push({ key: `${si}-${ii}`, slideIndex: si, caption: slide.caption, kind: "image", image, fitToImage });
      });
    } else {
      out.push({ key: `${si}-missing`, slideIndex: si, caption: slide.caption, kind: "missing", missingNote: slide.missingNote ?? "" });
    }
  });
  return out;
}

type MobileCarouselProps = {
  slides: SlideGroup[];
  onSlideIndexChange: (i: number) => void;
  canvasBg: string;
  eagerFirst: boolean;
};

/** Carrusel mobile: todas las imágenes de todos los slides en una sola tira con scroll-snap. */
export function MobileCarousel({ slides, onSlideIndexChange, canvasBg, eagerFirst }: MobileCarouselProps) {
  const items = useMemo(() => flatten(slides), [slides]);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ratios = useRef<number[]>(items.map(() => 0));
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    ratios.current = items.map(() => 0);
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (idx !== -1) ratios.current[idx] = entry.intersectionRatio;
        });
        let bestIdx = 0;
        let bestRatio = -1;
        ratios.current.forEach((r, i) => {
          if (r > bestRatio) {
            bestRatio = r;
            bestIdx = i;
          }
        });
        setActiveItem(bestIdx);
      },
      { root: container, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const item = items[activeItem];
    if (item) onSlideIndexChange(item.slideIndex);
  }, [activeItem, items, onSlideIndexChange]);

  return (
    <div className="xl:hidden">
      <div
        ref={containerRef}
        className="scroll-clean flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-[10%] px-[10%]"
      >
        {items.map((item, i) => (
          <div
            key={item.key}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="flex-none snap-center rounded-[18px] bg-white p-2.5 shadow-[8px_8px_0_#091A27]"
            style={
              item.kind === "image" && item.fitToImage
                ? { width: "fit-content", maxWidth: "min(80vw, 340px)", alignSelf: "center" }
                : { width: "80vw", maxWidth: "340px" }
            }
          >
            {item.kind === "image" ? (
              item.fitToImage ? (
                <img
                  src={item.image.src}
                  width={item.image.width}
                  height={item.image.height}
                  alt={item.image.alt}
                  loading={eagerFirst && i === 0 ? undefined : "lazy"}
                  className="block rounded-[10px] border-[3px] border-[#1a1a1a] object-contain object-top"
                  style={{
                    background: canvasBg,
                    aspectRatio: `${item.image.width} / ${item.image.height}`,
                    width: "auto",
                    height: "auto",
                    maxWidth: "min(calc(80vw - 20px), 320px)",
                    maxHeight: "420px",
                  }}
                />
              ) : (
                <div className="flex h-[420px] items-center justify-center rounded-[10px]" style={{ background: canvasBg }}>
                  <img
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                    alt={item.image.alt}
                    loading={eagerFirst && i === 0 ? undefined : "lazy"}
                    className="h-full w-full rounded-[16px] border-[3px] border-[#1a1a1a] object-contain object-top"
                  />
                </div>
              )
            ) : (
              <div className="flex h-[420px] items-center justify-center rounded-[10px]" style={{ background: canvasBg }}>
                <p className="cta px-6 text-center text-[12px] text-[rgba(11,30,45,.6)]">{item.missingNote}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Progreso del carrusel">
          {items.map((item, i) => (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={i === activeItem}
              aria-label={`Ir a la imagen ${i + 1} de ${items.length}`}
              onClick={() => itemRefs.current[i]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })}
              className={
                "block rounded-full transition-all " +
                (i === activeItem ? "h-2 w-[22px] bg-[var(--color-yellow)]" : "h-2 w-2 bg-[rgba(230,213,184,.3)]")
              }
            />
          ))}
        </div>
        <span className="cta whitespace-nowrap text-[11px] uppercase tracking-[.12em] text-[rgba(230,213,184,.75)]">
          Deslizá →
        </span>
      </div>

      <p aria-live="polite" className="sr-only">
        {items[activeItem]?.caption}
      </p>
      <p className="cta mt-2 text-[11px] uppercase tracking-[.12em] text-[rgba(230,213,184,.75)]" aria-hidden="true">
        {items[activeItem]?.caption}
      </p>
    </div>
  );
}
