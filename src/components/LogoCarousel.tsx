import { motion } from "framer-motion";

interface LogoCarouselProps {
  title: string;
  logos: { name: string; url: string }[];
}

const LogoCarousel = ({ title, logos }: LogoCarouselProps) => {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-16 px-4 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        {title}
      </motion.h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex animate-scroll-left gap-12 w-max">
          {doubled.map((logo, i) => (
            <img
              key={`${logo.name}-${i}`}
              src={logo.url}
              alt={logo.name}
              className="h-10 object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
