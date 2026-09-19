"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { projects, MediaItem } from "@/data/projects";

function MediaTile({
  m,
  alt,
  fill,
  onOpen,
}: {
  m: MediaItem;
  alt: string;
  fill?: boolean;
  onOpen?: (src: string) => void;
}) {
  const frameClass = fill
    ? "relative w-full h-full"
    : "relative w-full aspect-[16/9]";

  const imgClass = "w-full h-full object-cover block";

  // Full-width, non-grid images keep their natural aspect ratio so tall
  // photos are never cropped; grid/video/vimeo tiles keep a fixed frame.
  const isNaturalImage = !fill && m.type === "image";

  return (
    <div className={isNaturalImage ? "relative w-full" : fill ? "relative h-full" : frameClass}>
      {m.type === "video" ? (
        <video
          src={m.src}
          className={imgClass}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : m.type === "vimeo" ? (
        <iframe
          src={m.src}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          title={alt}
        />
      ) : isNaturalImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={m.src}
          alt={alt}
          className={"w-full h-auto block" + (onOpen ? " cursor-zoom-in" : "")}
          onClick={onOpen ? () => onOpen(m.src) : undefined}
        />
      ) : (
        <Image
          src={m.src}
          alt={alt}
          fill
          quality={60}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={imgClass + (onOpen ? " cursor-zoom-in" : "")}
          onClick={onOpen ? () => onOpen(m.src) : undefined}
        />
      )}
      {m.caption && (
        <span className="absolute bottom-2 left-2 text-white">{m.caption}</span>
      )}
    </div>
  );
}

type Block = { kind: "full"; item: MediaItem } | { kind: "group"; items: MediaItem[] };

function mediaKind(m: MediaItem) {
  return m.type === "image" ? "image" : "video";
}

function GridBlock({
  items,
  alt,
  onOpen,
}: {
  items: MediaItem[];
  alt: string;
  onOpen: (src: string) => void;
}) {
  const columns = Math.min(items.length, 4);
  const remainder = items.length % columns;
  const lastSpan = remainder === 0 ? 1 : columns - remainder + 1;

  return (
    <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
      {items.map((m, j) => {
        const isLast = j === items.length - 1;
        return (
          <div
            key={j}
            className="aspect-[3/4] relative"
            style={isLast && lastSpan > 1 ? { gridColumn: `span ${lastSpan}` } : undefined}
          >
            <MediaTile m={m} alt={alt} fill onOpen={onOpen} />
          </div>
        );
      })}
    </div>
  );
}

function MediaGallery({
  media,
  alt,
  onOpen,
}: {
  media: MediaItem[];
  alt: string;
  onOpen: (src: string) => void;
}) {
  // group consecutive same-kind "grid-4" items into a solid grid block (uniform cell height,
  // object-cover) so there are no leftover blank cells from mismatched aspect ratios
  const blocks: Block[] = [];
  let currentGroup: MediaItem[] = [];
  let currentKind: string | null = null;

  const flushGroup = () => {
    if (currentGroup.length) {
      blocks.push({ kind: "group", items: currentGroup });
      currentGroup = [];
      currentKind = null;
    }
  };

  media.forEach((m) => {
    if (m.layout === "full") {
      flushGroup();
      blocks.push({ kind: "full", item: m });
    } else {
      const kind = mediaKind(m);
      if (currentKind && currentKind !== kind) flushGroup();
      currentKind = kind;
      currentGroup.push(m);
    }
  });
  flushGroup();

  return (
    <div className="flex flex-col gap-1">
      {blocks.map((b, i) =>
        b.kind === "full" ? (
          <MediaTile key={i} m={b.item} alt={alt} onOpen={onOpen} />
        ) : (
          <GridBlock key={i} items={b.items} alt={alt} onOpen={onOpen} />
        )
      )}
    </div>
  );
}

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-white/95 flex items-center justify-center p-6 cursor-zoom-out"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-6 text-black text-2xl"
        aria-label="Close"
      >
        ×
      </button>
      <div className="relative w-full h-full" onClick={onClose}>
        <Image
          src={src}
          alt=""
          fill
          quality={60}
          sizes="100vw"
          className="object-contain cursor-zoom-out"
        />
      </div>
    </div>
  );
}

const FILTERS = ["All", "FURNITURE", "TECH", "EXHIBITION"];

export default function ProjectList() {
  const [filter, setFilter] = useState("All");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(filter.toLowerCase()));

  return (
    <div>
      <div className="flex justify-center gap-4 text-gray-500 pb-6">
        <span>SHOW:</span>
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={f === filter ? "text-black font-bold" : ""}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="border-t border-gray-200">
        {filtered.map((project) => (
          <div
            key={project.slug}
            className="flex flex-col md:flex-row gap-8 border-b border-gray-200 py-10 md:py-14 md:items-start"
          >
            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-4 md:sticky md:top-6 md:self-start">
              <div>
                <p className="text-lg">{project.title}</p>
                <p className="text-gray-500">{project.year}</p>
              </div>

              <div className="text-gray-700">
                <p>{project.description}</p>
                {project.link && (
                  <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="underline block mt-2">
                    {project.link}
                  </a>
                )}
              </div>

              <div className="text-gray-500 space-y-2">
                <div>
                  <p className="text-black">category</p>
                  <p>{project.category.join(", ")}</p>
                </div>
                {project.collaborators && (
                  <div>
                    <p className="text-black">collaborators</p>
                    {project.collaborators.map((c) => (
                      <p key={c.name}>{c.name}</p>
                    ))}
                  </div>
                )}
                {project.photography && (
                  <div>
                    <p className="text-black">photography</p>
                    {project.photography.map((name) => (
                      <p key={name}>{name}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <MediaGallery media={project.media} alt={project.title} onOpen={setLightboxSrc} />
            </div>
          </div>
        ))}
      </div>

      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </div>
  );
}
