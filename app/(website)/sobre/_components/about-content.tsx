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
        className="w-full flex flex-col items-center mt-16 mb-12 sm:mt-24"
      >
        <motion.h2
          variants={BelowTitleAnimation}
          className="poppins-font text-gold-primary text-2xl font-semibold text-center mb-4 sm:text-3xl"
        >
          Onde estamos
        </motion.h2>

        <motion.p
          variants={BelowTextAnimation}
          className="manrope-font text-base text-light-primary text-center mb-8 sm:text-lg lg:max-w-2xl"
        >
          Atendemos incorporadoras em todo o Brasil. Em 2025 estivemos na Expo
          Build Chicago, apresentando experiências interativas em Unreal Engine
          ao mercado norte-americano. Em projetos pontuais, colaboramos com
          estúdios europeus em entregas para marcas internacionais — incluindo
          a apresentação da BMW em Milão.
        </motion.p>

        <div className="relative w-full max-w-md">
          <Image
            src="/images/about-international.svg"
            alt="Brasil, Estados Unidos e Itália — países onde a Hanazaki Studio atuou"
            width={480}
            height={480}
            priority
            className="object-contain object-center w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}
