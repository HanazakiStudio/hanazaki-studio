"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Store, Building2 } from "lucide-react";

import {
  ServicesTitleAnimation,
  ServicesContainerAnimation,
} from "@/constants/framer/services-animations";

export function Services() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={ServicesContainerAnimation}
      className="w-full px-6 mt-12 flex flex-col items-center space-y-8 sm:px-16 lg:mt-24 lg:container lg:mx-auto lg:space-y-10"
    >
      <motion.h2
        variants={ServicesTitleAnimation}
        className="poppins-font text-gold-primary font-medium text-3xl text-center sm:text-4xl"
      >
        Por dentro da experiência
      </motion.h2>

      {/* Card grande — Sala Imersiva (sem título de produto) */}
      <div className="w-full bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
        <div className="w-full lg:w-3/5 relative aspect-video rounded-xl overflow-hidden">
          <Image
            src="/images/sala-imersiva.webp"
            alt="Sala imersiva da Hanazaki Studio em stand de vendas"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>

        <div className="w-full lg:w-2/5 flex flex-col gap-6 lg:gap-7">
          {/* Integrada ao stand */}
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 mt-0.5">
              <Store
                className="w-7 h-7 text-gold-primary"
                strokeWidth={1.5}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="poppins-font text-gold-primary font-semibold text-lg leading-tight">
                Integrada ao stand
              </h3>
              <p className="text-offwhite-primary text-sm leading-relaxed">
                Desenhada com o arquiteto desde o projeto, não colada depois.
              </p>
            </div>
          </div>

          {/* Exterior + Interior */}
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 mt-0.5">
              <Building2
                className="w-7 h-7 text-gold-primary"
                strokeWidth={1.5}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="poppins-font text-gold-primary font-semibold text-lg leading-tight">
                Exterior + Interior
              </h3>
              <p className="text-offwhite-primary text-sm leading-relaxed">
                Do entorno urbano ao acabamento dos ambientes, num único
                ambiente imersivo.
              </p>
            </div>
          </div>

          {/* Unreal Engine em tempo real */}
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 mt-0.5 relative w-7 h-7">
              <Image
                src="/images/unreal-engine.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="poppins-font text-gold-primary font-semibold text-lg leading-tight">
                Unreal Engine em tempo real
              </h3>
              <p className="text-offwhite-primary text-sm leading-relaxed">
                O cliente conduz a apresentação. Sem vídeo pré-renderizado,
                interatividade total.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card menor — Totem Interativo */}
      <div className="w-full lg:w-[80%] bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col sm:flex-row gap-5 sm:gap-8 items-center">
        <div className="w-full sm:w-2/5 relative aspect-[4/3] rounded-xl overflow-hidden">
          <Image
            src="/images/tv-touch.webp"
            alt="Totem interativo touchscreen da Hanazaki Studio"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 40vw"
          />
        </div>

        <div className="w-full sm:w-3/5 flex flex-col gap-3">
          <h3 className="poppins-font text-gold-primary font-medium text-2xl sm:text-[1.625rem]">
            Totem Interativo
          </h3>
          <p className="text-offwhite-primary text-sm sm:text-base leading-relaxed">
            Tela touch para o cliente explorar plantas, vistas e diferenciais
            do empreendimento direto no stand. Formato compacto, com produção
            ágil.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
