"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Car, Sparkles, MapPin, Key } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative h-screen min-h-[650px] w-full flex items-center overflow-hidden bg-[#1A1A1A]">

      {/* Full Background Image */}
      <motion.div className="absolute inset-0 z-0 scale-105" style={{ y }}>
        <Image
          src="/images/vista-externa.jpg"
          alt="Costa Dourada Residencial Fachada"
          fill
          quality={100}
          className="object-cover object-[75%_center] md:object-center"
          priority
          loading="eager"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-black/30 md:hidden" /> {/* Extra darkening for mobile */}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl flex flex-col space-y-6 pt-28 md:pt-32 lg:scale-[0.75] 2xl:scale-100 lg:origin-left"
        >
          {/* Eyebrow */}
          <span className="text-[#C4A57A] uppercase tracking-[0.2em] text-xs md:text-sm font-extrabold">
            Últimas unidades — direto com a construtora
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight">
            Viva de frente para o mar, no coração de <span className="text-[#C4A57A]">Balneário Piçarras</span>, com 3 suítes e alto padrão
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm md:text-base font-sans leading-relaxed max-w-2xl font-medium">
            Costa Dourada Residencial — apartamentos de 157 a 172 m², 3 suítes, vaga de garagem dupla e hobby box inclusos, a poucos passos da praia central. Unidades exclusivas com terraço e piscina privativa.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full">
            {[
              { text: "3 suítes | de 157 a 172 m²", icon: Key },
              { text: "Vaga de garagem dupla + hobby box inclusos", icon: Car },
              { text: "De frente para o mar, na praia central de Piçarras", icon: MapPin },
              { text: "Lazer completo e comércio no térreo", icon: Sparkles }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (idx * 0.1) }}
                className="flex items-center space-x-4 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10"
              >
                <div className="flex-shrink-0 text-white">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
                </div>
                <div className="h-8 w-[2px] bg-[#C4A57A] rounded-full" />
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
            <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-sm md:text-base font-extrabold tracking-widest uppercase bg-[#C4A57A] hover:bg-[#b0936a] text-white shadow-xl shadow-black/20 transition-all hover:-translate-y-1">
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
