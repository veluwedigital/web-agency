const cases = [
  {
    title: "Bakkerij Van Doorn",
    category: "Webshop",
    description: "Online bestellen voor een lokale bakkerij, live binnen 5 dagen.",
    image: "/cases/bakkerij.jpg",
    tags: ["Next.js", "Stripe"],
  },
  {
    title: "Fysio De Veluwe",
    category: "Praktijkwebsite",
    description: "Afsprakenmodule en SEO-optimalisatie voor meer aanmeldingen.",
    image: "/cases/fysio.jpg",
    tags: ["Next.js", "SEO"],
  },
  {
    title: "Hoveniersbedrijf Bosma",
    category: "Portfolio",
    description: "Projectgalerij en offerteformulier voor een hoveniersbedrijf.",
    image: "/cases/hovenier.jpg",
    tags: ["Next.js", "CMS"],
  },
];

export default function Cases() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-5 text-white">
      <div className="mb-10">
        <span className="text-sm font-medium text-blue-400">Recent werk</span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
          Een paar van onze projecten
        </h2>
        <p className="mt-3 max-w-md text-white/50">
          Websites die we hebben gebouwd voor lokale ondernemers — betaalbaar,
          snel en zonder gedoe.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map(({ title, category, description, image, tags }) => (
          
            key={title}
            href="#"
            className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-colors hover:border-blue-400/40"
          >
            <div className="relative aspect-video bg-black/40">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <span className="text-xs font-medium text-blue-400">
                {category}
              </span>
              <h3 className="mt-1 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/50">{description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 text-center">
        
          href="/projecten"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
        >
          Bekijk alle projecten
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
   </section>
  );
}