import { motion } from "framer-motion";
import { Check, Gift, LucideIcon } from "lucide-react";
import KrnoLogo from "./KrnoLogo";
import LogoCarousel from "./LogoCarousel";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface LeadFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
  iconBg: string;
  iconColor: string;
}

export interface LeadStat {
  title: string;
  desc: string;
}

export interface LeadPlan {
  name: string;
  tagline: string;
  subtitle: string;
  ideal: string;
  leads: string;
  freeLeads: string;
  price: string;
  discount: string;
  perLead: string;
  catalogPrice: string;
  features: string[];
  cta: string;
  ctaUrl: string;
  highlighted: boolean;
  accentColor: boolean;
}

export interface LeadPageConfig {
  title: string;
  subtitle: string;
  ctaUrl: string;
  features: LeadFeature[];
  productLabel: string;
  productDesc: string;
  pricingBannerText: string;
  plans: LeadPlan[];
}

// ─── Partners / Press (communs à toutes les pages) ────────────────────────────

const partners = [
  { name: "Les Trois Arcs", url: "https://krno-dpe.lovable.app/assets/3-arcs-DvciTIKF.png" },
  { name: "AtomClim", url: "https://krno-dpe.lovable.app/assets/atomclim-DRqRb7yN.png" },
  { name: "Hemea", url: "https://krno-dpe.lovable.app/assets/hemea-BGmWg8np.png" },
  { name: "Homyos", url: "https://krno-dpe.lovable.app/assets/homyos-DlV8Lg3z.png" },
  { name: "Mieux Rénover", url: "https://krno-dpe.lovable.app/assets/mieux-renover-CmhwKsaF.png" },
  { name: "Odirenov", url: "https://krno-dpe.lovable.app/assets/odirenov-Bneg9VtR.png" },
  { name: "PPF", url: "https://krno-dpe.lovable.app/assets/ppf-DUj3u0FX.png" },
  { name: "Rewatt", url: "https://krno-dpe.lovable.app/assets/rewatt-B7qhQ-iP.png" },
  { name: "RGE", url: "https://krno-dpe.lovable.app/assets/rge-Bvc9ScOZ.png" },
];

const press = [
  { name: "20 Minutes", url: "https://krno-dpe.lovable.app/assets/20-minutes-Bb110DDK.png" },
  { name: "AFP", url: "https://krno-dpe.lovable.app/assets/afp-B73c1-UJ.png" },
  { name: "BFM Business", url: "https://krno-dpe.lovable.app/assets/bfm-business-CgR0rHvI.png" },
  { name: "BFMTV", url: "https://krno-dpe.lovable.app/assets/bfmtv-8NlSOw8w.png" },
  { name: "Le Figaro", url: "https://krno-dpe.lovable.app/assets/le-figaro-C0yrPPXv.png" },
  { name: "Le Monde", url: "https://krno-dpe.lovable.app/assets/le-monde-BcD8GyZc.png" },
  { name: "Les Echos", url: "https://krno-dpe.lovable.app/assets/les-echos-LYdwt5xO.png" },
];

// ─── Template ────────────────────────────────────────────────────────────────

const LeadPageLayout = ({ config }: { config: LeadPageConfig }) => {
  const { title, subtitle, ctaUrl, features,
    productLabel, productDesc, pricingBannerText, plans } = config;

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-gray-50 flex flex-col items-center px-4 pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-6xl mb-10"
        >
          <KrnoLogo />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-center max-w-4xl leading-tight mb-6 text-gray-900"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-center text-lg md:text-xl max-w-2xl mb-8"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-5 py-2.5 mb-10"
        >
          <Check className="w-4 h-4 text-green-600 shrink-0" />
          <span className="text-sm font-semibold text-green-700">Déjà 50+ professionnels nous font confiance</span>
        </motion.div>

        <motion.a
          href={ctaUrl}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-red-500 hover:bg-red-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-all"
        >
          Être contacté par notre équipe
        </motion.a>
      </section>

      <div className="bg-white text-gray-900">
        {/* ── Features ── */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-4"
            >
              Qu'est-ce qu'un Lead KRNO ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-center mb-12 max-w-xl mx-auto"
            >
              Découvrez pourquoi les leads KRNO transforment votre prospection en missions concrètes
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow text-center"
                >
                  <div className={`w-12 h-12 rounded-xl ${f.iconBg} flex items-center justify-center mb-4 mx-auto`}>
                    <f.icon className={`w-6 h-6 ${f.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex items-start gap-4 max-w-3xl mx-auto mb-10"
            >
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1">
                <Gift className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h3 className="font-bold mb-1">{productLabel}</h3>
                <p className="text-gray-500 text-sm">{productDesc}</p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-red-500 font-bold text-sm tracking-widest uppercase mb-12"
            >
              {pricingBannerText}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative rounded-2xl p-7 flex flex-col ${
                    plan.highlighted
                      ? "bg-gray-50 border-2 border-red-400/50 shadow-lg shadow-red-100"
                      : "bg-gray-50 border border-gray-200"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      ⭐ Recommandé
                    </div>
                  )}

                  <p className={`text-xs font-bold tracking-widest mb-2 ${plan.accentColor ? "text-red-500" : "text-gray-500"}`}>
                    {plan.name}
                  </p>
                  <h3 className="font-bold text-xl mb-1">{plan.tagline}</h3>
                  <p className="text-gray-500 text-sm mb-4">{plan.subtitle}</p>

                  <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5 text-xs mb-6 self-start">
                    <span className="text-gray-500">IDÉAL POUR</span>
                    <span className="font-semibold">{plan.ideal}</span>
                  </div>

                  <p className={`text-6xl font-black mb-0 ${plan.accentColor ? "text-red-500" : ""}`}>
                    {plan.leads}
                  </p>
                  <p className="text-gray-500 text-sm mb-3">leads</p>

                  <div className="inline-flex items-center gap-1.5 bg-red-50 text-red-500 text-xs font-bold px-3 py-1.5 rounded-full self-start mb-1">
                    <Gift className="w-3.5 h-3.5" />
                    {plan.freeLeads} leads offerts
                  </div>

                  <div className="flex items-center gap-2 mt-4 mb-1">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded-md">
                      {plan.discount}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{plan.perLead}</p>
                  <p className="text-gray-500 text-xs mb-6">Valeur catalogue {plan.catalogPrice}</p>

                  <div className="border-t border-gray-200 my-2 mb-5" />

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.accentColor ? "text-red-500" : "text-gray-400"}`} />
                        <span className={fi === 0 && i > 0 ? "font-semibold" : ""}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center font-bold py-3.5 rounded-xl transition-transform hover:scale-[1.02] ${
                      plan.highlighted
                        ? "bg-red-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-900 border border-gray-200 hover:bg-gray-200"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <LogoCarousel title="Ils travaillent avec nous" logos={partners} />
        <LogoCarousel title="Ils parlent de nous" logos={press} />
      </div>
    </div>
  );
};

export default LeadPageLayout;
