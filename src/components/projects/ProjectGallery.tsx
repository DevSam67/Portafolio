import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SWIPE_THRESHOLD_PX = 40;

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const swipeStartX = useRef<number | null>(null);
  const total = images.length;

  const goTo = (next: number) => setIndex((next + total) % total);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") goTo(index + 1);
    if (e.key === "ArrowLeft") goTo(index - 1);
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    swipeStartX.current = e.clientX;
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (swipeStartX.current === null) return;
    const delta = e.clientX - swipeStartX.current;
    swipeStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
    goTo(delta < 0 ? index + 1 : index - 1);
  };

  return (
    <div className="flex flex-col gap-5">
      <div
        role="region"
        aria-roledescription="carrusel"
        aria-label={`Capturas de ${title}`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (swipeStartX.current = null)}
        style={{ touchAction: "pan-y" }}
        className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-card shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] outline-none select-none focus-visible:ring-2 focus-visible:ring-ring sm:aspect-[16/10]"
      >
        {images.map((src, i) => {
          const isActive = i === index;
          return failed[i] ? (
            <div
              key={src}
              aria-hidden={!isActive}
              className={cn(
                "absolute inset-0 flex items-center justify-center text-muted-foreground transition-opacity duration-700",
                isActive ? "opacity-100" : "opacity-0"
              )}
            >
              <ImageOff className="size-8 opacity-40" />
            </div>
          ) : (
            <img
              key={src}
              src={src}
              alt={`${title}, captura ${i + 1}`}
              aria-hidden={!isActive}
              draggable={false}
              loading={i === 0 ? "eager" : "lazy"}
              onError={() => setFailed((prev) => ({ ...prev, [i]: true }))}
              className={cn(
                "absolute inset-0 h-full w-full object-contain p-3 transition-all duration-700 ease-out sm:p-6",
                isActive ? "scale-100 opacity-100" : "scale-[1.02] opacity-0"
              )}
            />
          );
        })}

        <Button
          variant="outline"
          size="icon"
          onClick={() => goTo(index - 1)}
          aria-label="Captura anterior"
          className="absolute top-1/2 left-3 size-10 -translate-y-1/2 rounded-full border-white/15 bg-background/70 backdrop-blur-sm transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100"
        >
          <ChevronLeft className="size-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => goTo(index + 1)}
          aria-label="Captura siguiente"
          className="absolute top-1/2 right-3 size-10 -translate-y-1/2 rounded-full border-white/15 bg-background/70 backdrop-blur-sm transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100"
        >
          <ChevronRight className="size-5" />
        </Button>

        <div className="pointer-events-none absolute right-4 bottom-4 rounded-md bg-background/70 px-2.5 py-1 font-display text-xs tracking-widest text-foreground backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2" role="tablist" aria-label="Seleccionar captura">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Ver captura ${i + 1}`}
            onClick={() => goTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              i === index ? "w-8 bg-foreground" : "w-1.5 bg-white/25 hover:bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
