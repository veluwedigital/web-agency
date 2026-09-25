import Badge from "@/components/Badge";
import Cases from "@/components/Cases";
import PricingCard from "@/components/PricingCard";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Betaalbare websites voor lokale ondernemers",
  description:
    "VeluweDigital bouwt professionele websites voor kleine lokale ondernemers — snel, betaalbaar en zonder gedoe. Online binnen 5 dagen.",
};

const features = [
  {
    title: "Snel online",
    subtitle: "Binnen 5 dagen live",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    title: "Mobiel geoptimaliseerd",
    subtitle: "Perfect op elk apparaat",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    title: "SEO vriendelijk",
    subtitle: "Beter gevonden in Google",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: "Persoonlijk contact",
    subtitle: "Korte lijnen, direct schakelen",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div className="max-w-prose lg:max-w-6xl m-auto py-4 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "VeluweDigital",
            description:
              "Wij bouwen professionele websites voor kleine lokale ondernemers — snel, betaalbaar en zonder gedoe.",
            url: process.env.NEXT_PUBLIC_BASE_URL,
            priceRange: "€€",
            areaServed: "NL",
          }),
        }}
      />

      <div className="flex flex-col lg:flex-row lg:items-center gap-10">
        {/* Linkerkolom: hero content */}
        <div className="flex-1 space-y-2">
          <Badge text={"Webdevelopment voor lokale bedrijven"} />
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            Betaalbaar online <br /> zichtbaar. <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              Zonder gedoe.
            </span>
          </h1>

          <p className="text-base leading-relaxed max-w-md mb-10 text-white/50">
            Wij bouwen professionele websites voor kleine lokale ondernemers —
            snel, betaalbaar en zonder gedoe. Jij focust op je zaak, wij
            zorgen dat je online bereikbaar bent.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href="/posts"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-600"
            >
              Bekijk projecten
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M10 8.5v7l6-3.5-6-3.5z" />
              </svg>
              Onze werkwijze
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 pt-4">
            {features.map(({ title, subtitle, icon }) => (
              <div key={title} className="flex flex-col items-start gap-3">
                <div className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg border border-blue-400/30 bg-blue-500/10 text-blue-400">
                  {icon}
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold leading-tight">{title}</p>
                  <p className="text-xs text-white/50 leading-tight">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-black bg-blue-900"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-yellow-400">★★★★★</span>
                <span className="font-semibold">5.0</span>
              </div>
              <p className="text-xs text-white/50">
                2+ jaar ervaring · Meer dan 100+ tevreden klanten
              </p>
            </div>
          </div>
        </div>

        {/* Rechterkolom: pricing card */}
        <div className="w-full lg:w-auto lg:shrink-0 flex justify-center">
          <PricingCard />
        </div>
      </div>

      {/* <Cases /> */}
    </div>
  );
}