import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type SlideshowImage = {
  src: string;
  alt: string;
};

type ProductSlideshowProps = {
  images: SlideshowImage[];
  /** How long each image stays on screen before crossfading to the next, in milliseconds. */
  intervalMs?: number;
  className?: string;
};

/**
 * Crossfades through a set of images on a timer and loops back to the start.
 * Pauses automatically when the user prefers reduced motion by simply not
 * advancing (the first image stays put, no animation is triggered).
 */
export function ProductSlideshow({ images, intervalMs = 35000, className }: ProductSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div className={cn("relative", className)}>
      {/* Reserves the space using the first image's intrinsic ratio so layout doesn't shift. */}
      <img
        src={images[0]!.src}
        alt=""
        aria-hidden="true"
        width={1600}
        height={1008}
        className="w-full rounded-2xl opacity-0"
      />
      {images.map((image, i) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={1600}
          height={1008}
          loading={i === 0 ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 h-full w-full rounded-2xl border border-navy-foreground/15 object-cover shadow-lift transition-opacity duration-1000 ease-in-out",
            i === activeIndex ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
    </div>
  );
}
