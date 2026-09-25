import Badge from "@/components/Badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Bekijk voorbeeldprojecten van websites die we hebben gebouwd voor lokale ondernemers — betaalbaar, snel en op maat.",
};

const projects = [
  {
    title: "Demo website kapper",
    category: "Dienstverlening",
    pages: "5 pagina's",
    description:
      "Een warme, uitnodigende website voor een lokale kapper in Harderwijk met online bestelformulier.",
    initials: "GK",
    image: "/projects/kapper.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-5 text-white">
      <div className="mb-10 text-center">
        <Badge text={"Projecten & Cases"} />
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold">
          Laatste projecten
        </h1>
        <p className="mt-2 text-white/50">
          Een overzicht van websites die we hebben gebouwd voor lokale
          ondernemers.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
          >
            <div className="aspect-video bg-black/40">
              <img
                src={p.image}
                alt={`Screenshot van de website voor ${p.title}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-semibold">{p.title}</h2>
                <div className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-blue-500/20 text-xs font-semibold text-blue-300">
                  {p.initials}
                </div>
              </div>

              <p className="mt-1 text-sm text-white/40">
                {p.category} · {p.pages}
              </p>
              <p className="mt-3 text-sm text-white/60">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}