import Image from "next/image";
import Badge from "@/components/Badge";
import { Metadata } from "next";
import CMM from "@/assets/cmm.png";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Bekijk voorbeeldprojecten van websites die we hebben gebouwd voor lokale ondernemers — betaalbaar, snel en op maat.",
};

const projects = [
  {
    title: "Demo website aannemersbedrijf",
    category: "Dienstverlening",
    pages: "5 pagina's",
    description:
      "Een warme, uitnodigende website voor een lokaal aannemersbedrijf in Putten met online contactformulier.",
    initials: "GK",
    image: CMM,
    url: "https://fanciful-pony-a2e598.netlify.app/",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 text-white">

      {/* Header */}
      <div className="mb-10 text-center">
        <Badge text="Projecten & Cases" />

        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Laatste projecten
        </h1>

        <p className="mt-2 text-white/50">
          Een overzicht van websites die we hebben gebouwd voor lokale
          ondernemers.
        </p>
      </div>

      {/* Projects */}
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-white/20"
          >
            {/* Image */}
            <div className="relative aspect-video bg-black/40">
              <Image
                src={p.image}
                alt={`Screenshot van de website voor ${p.title}`}
                fill
                priority
                className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-semibold">
                  {p.title}
                </h2>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-xs font-semibold text-blue-300">
                  {p.initials}
                </div>
              </div>

              <p className="mt-1 text-sm text-white/40">
                {p.category} · {p.pages}
              </p>

              <p className="mt-3 text-sm text-white/60">
                {p.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}