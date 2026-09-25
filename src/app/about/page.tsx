import Badge from "@/components/Badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Leer VeluweDigital kennen — betaalbare, professionele websites voor lokale ondernemers, zonder gedoe.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-5 text-white">
      <div className="mb-10 text-center">
        <Badge text="Over ons" />
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold">
          Websites bouwen voor{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
            ondernemers zoals jij.
          </span>
        </h1>
      </div>

      <div className="space-y-5 text-white/60 leading-relaxed">
        <p>
          VeluweDigital is opgericht vanuit een simpele frustratie: lokale
          ondernemers betalen vaak te veel voor een website die niet doet wat
          hij moet doen — klanten binnenhalen. Wij bouwen websites die snel
          online staan, er professioneel uitzien en écht bijdragen aan je
          zichtbaarheid.
        </p>

        <p>
          Geen dikke offertes, geen wekenlange trajecten en geen templates
          die overal hetzelfde uitzien. Elk project is op maat gemaakt, met
          korte lijnen tussen jou en ons — zodat je precies weet waar je aan
          toe bent.
        </p>

        <p>
          Van kapperszaken tot fietsenwinkels: we hebben inmiddels meerdere
          lokale bedrijven geholpen met een website waar ze trots op zijn.
          Betaalbaar, binnen 5 dagen live, en zonder gedoe.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
        <div>
          <p className="text-2xl font-bold text-blue-400">2+</p>
          <p className="text-sm text-white/50">jaar ervaring</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-blue-400">100+</p>
          <p className="text-sm text-white/50">tevreden klanten</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-blue-400">5</p>
          <p className="text-sm text-white/50">dagen levertijd</p>
        </div>
      </div>
    </div>
  );
}