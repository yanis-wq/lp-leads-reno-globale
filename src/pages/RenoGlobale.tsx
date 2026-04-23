import LeadPageLayout, { LeadPageConfig } from "@/components/LeadPageLayout";
import { Shield, Target, Phone, Zap } from "lucide-react";

const config: LeadPageConfig = {
  badge: "Leads Réno Globale exclusifs",
  title: "Des leads Réno Globale 100% qualifiés",
  subtitle:
    "KRNO identifie les propriétaires avec des passoires thermiques éligibles à une rénovation d'ampleur grâce à l'IA, et vous envoie en exclusivité des leads à fort potentiel.",
  features: [
    {
      icon: Shield,
      title: "Exclusif",
      desc: "Chaque lead vous est transmis en exclusivité — jamais mis en concurrence.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Target,
      title: "Intentionniste",
      desc: "Propriétaires avec un projet de rénovation globale identifié, pas de simples curieux.",
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
    },
    {
      icon: Phone,
      title: "Vérifié",
      desc: "Joignabilité optimale : moins d'appels perdus, plus de RDV.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Zap,
      title: "Temps réel",
      desc: "Transmis instantanément par mail, SMS et Google Sheet.",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
  ],
  statsTitle: "Tous types de rénovations globales couverts",
  statsSubtitle:
    "De la rénovation par gestes à la rénovation d'ampleur complète, nos leads couvrent l'ensemble de vos projets.",
  stats: [
    { title: "Rénovation d'ampleur", desc: "Passoires thermiques F/G souhaitant atteindre la classe C ou D." },
    { title: "MaPrimeRénov' Parcours accompagné", desc: "Projets multi-gestes avec Mon Accompagnateur Rénov'." },
    { title: "Réno copropriété", desc: "DTG et projets de rénovation globale pour syndics et copropriétés." },
  ],
  productLabel: "Leads Réno Globale — Rénovation d'Ampleur",
  productDesc:
    "Propriétaires souhaitant réaliser une rénovation globale de leur logement. Passoire thermique identifiée, projet qualifié, contact vérifié.",
  pricingBannerText: "LEADS RÉNO GLOBALE · OFFRE LIMITÉE AVRIL",
  plans: [
    {
      name: "DÉCOUVERTE",
      tagline: "Je remplis mon agenda",
      subtitle: "Testez sans bloquer votre tréso",
      ideal: "AMO / Accompagnateur Rénov'",
      leads: "XX",
      freeLeads: "X",
      price: "XX€",
      discount: "-X%",
      perLead: "XX€/lead effectif",
      catalogPrice: "XXX€",
      features: [
        "Leads 100% exclusifs",
        "Livraison en temps réel",
        "Selon vos critères (zone géo...)",
        "Sans engagement",
      ],
      cta: "Choisir Découverte →",
      highlighted: false,
      accentColor: false,
    },
    {
      name: "CROISSANCE",
      tagline: "Je sécurise mon flux",
      subtitle: "Un flux régulier de nouveaux clients",
      ideal: "Bureau d'études / Maître d'œuvre",
      leads: "XX",
      freeLeads: "X",
      price: "XX€",
      discount: "-X%",
      perLead: "XX€/lead effectif",
      catalogPrice: "XXX€",
      features: [
        "Tout Découverte, plus :",
        "Account manager dédié",
        "Rapport de performance mensuel",
        "Fiche partenaire dédiée",
        "Partenariat backlink SEO",
      ],
      cta: "Choisir Croissance →",
      highlighted: true,
      accentColor: true,
    },
    {
      name: "ACCÉLÉRATEUR",
      tagline: "Je domine ma zone",
      subtitle: "Volume maximal, coût minimal",
      ideal: "Réseau national",
      leads: "XX",
      freeLeads: "X",
      price: "XX€",
      discount: "-X%",
      perLead: "XX€/lead effectif",
      catalogPrice: "XXX€",
      features: [
        "Tout Croissance, plus :",
        "Onboarding personnalisé",
        "Intégration CRM sur mesure",
      ],
      cta: "Choisir Accélérateur →",
      highlighted: false,
      accentColor: false,
    },
  ],
};

const RenoGlobale = () => <LeadPageLayout config={config} />;

export default RenoGlobale;
