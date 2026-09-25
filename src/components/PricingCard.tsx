const checks = [
  "1-3 pagina's volledig op maat",
  "Volledig mobiel geoptimaliseerd",
  "Snelle laadtijd",
  "Contactformulier",
  "Online binnen 5 dagen",
  "30 dagen gratis support",
  "Perfect voor starters / zzp",
];

export default function PricingCard() {
  return (
    <div className="max-w-sm rounded-2xl border border-blue-400/20 bg-gradient-to-b from-blue-950/60 to-black/60 p-6 text-white">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M5 16 3 6l5.5 4L12 4l3.5 6L21 6l-2 10H5zm0 2h14v2H5v-2z" />
        </svg>
        Meest gekozen
      </span>

      <p className="mt-4 text-sm text-white/60">Starter website</p>

      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-4xl font-bold">€249</span>
        <span className="text-base text-white/40 line-through">€299</span>
      </div>
      <p className="mt-1 text-xs text-white/40">
        Eénmalig · geen verborgen kosten
      </p>

      <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
        {checks.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-white/80">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 text-blue-400">
              <circle cx="12" cy="12" r="10" fillOpacity="0.15" />
              <path
                d="m9 12 2 2 4-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600">
        Vraag gratis offerte aan
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>

      <p className="mt-3 text-center text-xs text-white/40">
        Geen abonnement, je behoudt alles
      </p>
    </div>
  );
}