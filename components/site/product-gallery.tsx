"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  images: string[];
  alt: string;
  badge?: string;
};

export function ProductGallery({ images, alt, badge }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-brand-mist bg-white shadow-xl shadow-brand-ink/10">
        <img
          src={images[active]}
          alt={alt}
          className="aspect-[4/3] w-full object-contain"
        />
        {badge && (
          <span className="absolute left-4 top-4 rounded-full bg-brand-ink/85 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
            {badge}
          </span>
        )}
      </div>
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Ver foto ${index + 1}`}
              className={cn(
                "cursor-pointer overflow-hidden rounded-lg border-2 bg-white transition-all duration-200",
                index === active
                  ? "border-brand"
                  : "border-brand-mist opacity-70 hover:opacity-100"
              )}
            >
              <img src={src} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
