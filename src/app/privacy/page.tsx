import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid",
  robots: {
    index: false,
    follow: true,
  },
};

const sections = [
  {
    title: "Welke gegevens we verzamelen",
    content:
      "Wanneer je het contactformulier invult, verzamelen we je naam, e-mailadres en het bericht dat je stuurt. Bezoek je de site, dan kunnen we daarnaast basale analytics-gegevens verzamelen, zoals welke pagina's je bezoekt en via welk apparaat.",
  },
  {
    title: "Waarom we deze gegevens verzamelen",
    content:
      "We gebruiken je gegevens uitsluitend om te reageren op je aanvraag en, indien van toepassing, een offerte op te stellen. We gebruiken je gegevens niet voor marketingdoeleinden zonder je expliciete toestemming.",
  },
  {
    title: "Delen met derden",
    content:
      "We verkopen of verhuren je gegevens nooit aan derden. We kunnen gebruikmaken van externe dienstverleners (zoals hostingpartijen) die toegang hebben tot gegevens voor zover noodzakelijk om onze diensten te leveren.",
  },
  {
    title: "Cookies",
    content:
      "Deze site kan functionele en analytische cookies gebruiken om de website goed te laten werken en te begrijpen hoe bezoekers de site gebruiken. Je kunt cookies uitschakelen via je browserinstellingen.",
  },
  {
    title: "Beveiliging",
    content:
      "We nemen passende technische en organisatorische maatregelen om je gegevens te beschermen tegen verlies of onrechtmatig gebruik.",
  },
  {
    title: "Jouw rechten",
    content:
      "Je hebt het recht om je gegevens in te zien, te corrigeren of te laten verwijderen. Neem hiervoor contact met ons op via het contactformulier.",
  },
  {
    title: "Wijzigingen",
    content:
      "We kunnen dit privacybeleid van tijd tot tijd aanpassen. De meest actuele versie staat altijd op deze pagina.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-5 text-white">
      <div className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Privacybeleid</h1>
        <p className="mt-3 text-white/50">
          Laatst bijgewerkt: {new Date().toLocaleDateString("nl-NL", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      <div className="space-y-8">
        {sections.map(({ title, content }) => (
          <div key={title}>
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-white/60 leading-relaxed">{content}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 pt-8 border-t border-white/10 text-sm text-white/40">
        Door gebruik te maken van deze website ga je akkoord met dit
        privacybeleid. Vragen over hoe we met je gegevens omgaan? Neem gerust
        contact met ons op.
      </p>
    </div>
  );
}