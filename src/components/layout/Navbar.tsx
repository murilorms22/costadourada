"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/Button";

import Image from "next/image";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/70 md:bg-white/80 backdrop-blur-md border-b border-white/30 py-4 shadow-sm" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Image
            src="/images/costa-dourada-logo.png"
            alt="Costa Dourada"
            width={180}
            height={50}
            className="h-8 md:h-14 w-auto object-contain"
          />
        </div>

        <div>
          <Button
            variant={scrolled ? "primary" : "outline"}
            size="sm"
            className={!scrolled ? "text-white border-white hover:bg-white hover:text-black" : ""}
          >
            Agendar visita
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
