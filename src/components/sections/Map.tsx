"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function Map() {
  return (
    <section className="py-24 bg-[#1A1A1A] relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl max-w-2xl mx-auto -mt-40 relative z-20 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-[#F9F9F9] rounded-full flex items-center justify-center text-[#C4A57A] mb-6">
            <MapPin className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Onde fica o Costa Dourada
          </h2>
          <p className="text-gray-500 font-sans text-lg font-medium">
            Av. Nereu Ramos, 468<br />
            Centro — Balneário Piçarras/SC — CEP 88380-000
          </p>
        </div>

      </div>

      <div className="w-full h-[300px] md:h-[350px] mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.1859417576666!2d-48.666367799999996!3d-26.770342199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8d30061e83cb9%3A0xf72f3395afe1ee56!2sCosta%20Dourada%20Residence!5e0!3m2!1spt-BR!2sbr!4v1784152020475!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
