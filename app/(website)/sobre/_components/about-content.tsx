"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  BelowTitleAnimation,
  BelowTextAnimation,
  BelowContainerAnimation,
} from "@/constants/framer/about-content-animations";
import { AboutBio } from "./about-bio";

export function AboutContent() {
  return (
    <section className="w-full px-6 mt-12 sm:px-16 lg:container lg:mx-auto">
      <AboutBio />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={BelowContainerAnimation}
        className="relative w-full flex flex-col items-center justify-center mt-16 mb-12 min-h-[420px] sm:mt-24 sm:min-h-[480px] lg:min-h-[520px]"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/images/about-international.svg"
            alt=""
            aria-hidden="true"
            width={520}
            height={480}
            priority
            className="object-contain object-center w-auto h-full max-h-[420px] sm:max-h-[480px] lg:max-h-[520px] opacity-90"
          />
        </div>

        <motion.h2
          variants={BelowTitleAnimation}
          className="relative z-10 poppins-font text-gold-primary text-2xl font-semibold text-center mb-4 sm:text-3xl"
        >
          Onde estamos
        </motion.h2>

        <motion.p
          variants={BelowTextAnimation}
          className="relative z-10 manrope-font text-base text-light-primary text-center sm:text-lg lg:max-w-2xl"
        >
          Atendemos incorporadoras em todo o Brasil. Em 2025 estivemos na Expo
          Build Chicago, apresentando experiências interativas em Unreal Engine
          ao mercado norte-americano. Em projetos pontuais, colaboramos com
          estúdios europeus em entregas para marcas internacionais — incluindo
          a apresentação da BMW em Milão.
        </motion.p>
      </motion.div>
    </section>
  );
}
