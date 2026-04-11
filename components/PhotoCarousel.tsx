"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const PHOTOS = [
  { src: "/ludwigs_logo_minimal.svg", alt: "Ludwig's Roofing & Exteriors" },
  { src: "/ludwigs_logo.svg", alt: "Ludwig's Roofing & Exteriors" },
  { src: "/logo.svg", alt: "Ludwig's Roofing & Exteriors" },
];

export default function PhotoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[i] as HTMLElement | undefined;
    if (!child) return;
    track.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
  }, []);

  const next = () => scrollToIndex((index + 1) % PHOTOS.length);
  const prev = () => scrollToIndex((index - 1 + PHOTOS.length) % PHOTOS.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => {
        const ni = (i + 1) % PHOTOS.length;
        scrollToIndex(ni);
        return ni;
      });
    }, 5000);
    return () => clearInterval(id);
  }, [paused, scrollToIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let closest = 0;
        let closestDist = Infinity;
        for (let i = 0; i < track.children.length; i++) {
          const child = track.children[i] as HTMLElement;
          const childCenter = child.offsetLeft + child.offsetWidth / 2;
          const dist = Math.abs(childCenter - center);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        }
        setIndex(closest);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="container-page">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Recent Projects
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A look at recent roofing, siding, and exterior work across Philadelphia.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth rounded-2xl"
          >
            {PHOTOS.map((p, i) => (
              <div
                key={i}
                className="relative aspect-[16/10] w-full flex-none snap-center overflow-hidden rounded-2xl bg-slate-200 sm:w-[85%] md:w-[75%]"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 75vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 text-slate-900 shadow ring-1 ring-slate-200 transition hover:bg-white sm:inline-flex"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 text-slate-900 shadow ring-1 ring-slate-200 transition hover:bg-white sm:inline-flex"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {PHOTOS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to photo ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-brand" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
