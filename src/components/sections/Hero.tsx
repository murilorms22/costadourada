"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Car, Sparkles, MapPin, Key, DollarSign } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center overflow-hidden bg-[#1A1A1A] pb-12 md:pb-0">

      {/* Full Background Image */}
      <motion.div className="absolute inset-0 z-0 scale-[1.3] origin-left" style={{ y }}>
        <Image
          src="/images/vista-externa-diurna-3z.png"
          alt="Costa Dourada Residencial Fachada"
          fill
          quality={100}
          className="object-cover object-[center_100%]"
          priority
          loading="eager"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-black/20 md:hidden" /> {/* Extra darkening for mobile */}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl flex flex-col space-y-6 pt-28 md:pt-32 lg:scale-[0.75] 2xl:scale-100 lg:origin-left"
        >
          {/* Eyebrow */}
          <span className="bg-gradient-to-r from-[#D4B069] to-[#B68D40] bg-clip-text text-transparent uppercase tracking-[0.2em] text-xs md:text-sm font-extrabold">
            Últimas unidades
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight">
            Viva com vista para o mar, no coração de <span className="bg-gradient-to-r from-[#D4B069] to-[#B68D40] bg-clip-text text-transparent">Balneário Piçarras</span>
          </h1>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full">
            {[
              { text: "3 suítes | de 157 a 172 m²", icon: Key },
              { text: "Vista para o mar, na praia central de Piçarras", icon: MapPin },
              { text: "Lazer completo e comércio no térreo", icon: Sparkles },
              { text: "Unidades a partir de R$1.600.000,00", icon: DollarSign, isPrice: true }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (idx * 0.1) }}
                className={`flex items-center space-x-4 bg-black/40 backdrop-blur-md p-4 rounded-xl border ${item.isPrice ? 'border-[#B68D40]' : 'border-white/10'}`}
              >
                <div className="flex-shrink-0 text-white">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
                </div>
                <div className="h-8 w-[2px] bg-[#B68D40] rounded-full" />
                <span className="text-white font-bold text-xs md:text-sm leading-tight">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6 pt-4"
          >
            <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-sm md:text-base font-extrabold tracking-widest uppercase shadow-xl shadow-black/20 transition-all hover:-translate-y-1">
              Agendar minha visita
            </Button>
            <p className="text-xs md:text-sm font-bold text-gray-300 tracking-wider uppercase text-center sm:text-left">
              Atendimento direto com a equipe de vendas.<br />Entrega prevista para abril/2029.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
