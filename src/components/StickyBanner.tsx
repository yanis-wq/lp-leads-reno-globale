import { useState } from "react";
import { Zap, X } from "lucide-react";

const StickyBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-secondary border border-border rounded-2xl p-4 max-w-xs shadow-xl">
      <button
        onClick={() => setVisible(false)}
        className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
      >
        <X className="w-4 h-4" />
      </button>
      <div className="flex items-start gap-3">
        <Zap className="w-5 h-5 text-krno-gold shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-sm">Offre spéciale : 4€ / lead</p>
          <p className="text-muted-foreground text-xs mt-1">
            Ce tarif double chaque mois. Verrouillez-le maintenant.
          </p>
          <a
            href="#pricing"
            className="inline-block mt-3 bg-red-gradient text-primary-foreground text-xs font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform"
          >
            Démarrer mon partenariat
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;
