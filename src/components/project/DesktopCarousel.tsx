import type { SlideGroup, SlideImage } from "../../data/projects/types";

type DesktopCarouselProps = {
  slides: SlideGroup[];
  index: number;
  onIndexChange: (i: number) => void;
  canvasBg: string;
  eagerFirst: boolean;
  ariaLabel: string;
};

const ROW_MAX_WIDTH = 700;
/** Igual al alto fijo de la fila de celulares: así el espacio de la foto nunca cambia entre slides y nada abajo se mueve. */
const ROW_HEIGHT = 318;
const ROW_GAP = 22;

/** Celulares en fila (2-3 capturas verticales): mantiene la caja fija 220×318 con recorte, la referencia "esto se ve bien". */
function isPhoneGrid(images: SlideImage[]) {
  return images.length > 1 && images.every((img) => img.width < img.height);
}

/** Alto de imagen para que N imágenes (1 o más, cualquier proporción) entren sin recorte y sin pasarse del ancho del marco. */
function imageHeight(images: SlideImage[]) {
  const sumAspect = images.reduce((sum, img) => sum + img.width / img.height, 0);
  const widthFit = (ROW_MAX_WIDTH - ROW_GAP * (images.length - 1)) / sumAspect;
  return Math.min(ROW_HEIGHT, widthFit);
}

/** Carrusel de escritorio: marco blanco con el/los imagen(es) del slide activo, flechas, miniaturas y teclado. */
export function DesktopCarousel({ slides, index, onIndexChange, canvasBg, eagerFirst, ariaLabel }: DesktopCarouselProps) {
  const total = slides.length;
  const slide = slides[index];
  const phoneGrid = isPhoneGrid(slide.images);
  const fitToImages = slide.images.length > 0 && !phoneGrid;

  function go(delta: number) {
    onIndexChange((index + delta + total) % total);
  }

  return (
    <div className="hidden xl:block">
      <div
        tabIndex={0}
        role="group"
        aria-roledescription="carrusel"
        aria-label={ariaLabel}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(-1);
          if (e.key === "ArrowRight") go(1);
        }}
        className={
          "rounded-[20px] bg-white p-3 shadow-[8px_8px_0_#091A27] outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-yellow)]" +
          (fitToImages ? " w-fit mx-auto" : "")
        }
      >
        <div className="flex h-[318px] items-center justify-center gap-[22px] rounded-[10px]" style={{ background: canvasBg }}>
          {slide.images.length > 0 ? (
            slide.images.map((image, i) => (
              <div
                key={image.src}
                className={fitToImages ? "flex-none" : "h-full min-w-0 max-w-[220px] flex-1"}
                style={
                  fitToImages
                    ? { width: `${imageHeight(slide.images) * (image.width / image.height)}px`, height: `${imageHeight(slide.images)}px` }
                    : undefined
                }
              >
                <img
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  loading={eagerFirst && index === 0 && i === 0 ? undefined : "lazy"}
                  className={
                    "h-full w-full rounded-[14px] border-[3px] border-[#1a1a1a] object-top shadow-[0_18px_40px_rgba(26,26,26,.22)] " +
                    (fitToImages ? "object-contain" : "object-cover")
                  }
                />
              </div>
            ))
          ) : (
            <p className="cta px-6 text-center text-[12px] text-[rgba(11,30,45,.6)]">{slide.missingNote}</p>
          )}
        </div>
      </div>

      <div className="mt-[18px] flex items-center justify-between gap-4">
        <p aria-live="polite" className="cta text-[11px] uppercase tracking-[.12em] text-[rgba(230,213,184,.75)]">
          {slide.caption}
        </p>
        <div className="flex flex-none gap-2.5">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => go(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-yellow)] text-[var(--color-yellow)] transition-colors hover:bg-[var(--color-yellow)] hover:text-[var(--color-blue)]"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => go(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-yellow)] text-[var(--color-yellow)] transition-colors hover:bg-[var(--color-yellow)] hover:text-[var(--color-blue)]"
          >
            →
          </button>
        </div>
      </div>

      <div className="scroll-clean mt-3.5 flex gap-2.5 overflow-x-auto">
        {slides.map((s, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ver ${s.caption}`}
            aria-current={i === index}
            onClick={() => onIndexChange(i)}
            className={
              "flex h-[62px] w-[124px] flex-none items-center justify-center overflow-hidden rounded-[8px] border-2 " +
              (i === index ? "border-[var(--color-yellow)]" : "border-[rgba(230,213,184,.14)]")
            }
            style={{ background: canvasBg }}
          >
            {s.images[0] ? (
              <img src={s.images[0].src} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
            ) : (
              <span className="cta text-[9px] text-[rgba(11,30,45,.6)]">FALTA</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
