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
        className="w-full mt-16 mb-12 sm:mt-24"
      >
        <div className="w-full flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="w-full flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-1 lg:max-w-xl">
            <motion.h2
              variants={BelowTitleAnimation}
              className="poppins-font text-gold-primary text-3xl font-semibold mb-4 sm:text-4xl lg:text-5xl"
            >
              Onde estamos
            </motion.h2>

            <div className="w-12 h-px bg-gold-primary/60 mb-6" />

            <motion.div variants={BelowTextAnimation} className="space-y-4">
              <p className="manrope-font text-base text-light-primary sm:text-lg">
                Atendemos incorporadoras em todo o Brasil. Em 2025 estivemos na
                Expo Build Chicago, apresentando experiências interativas em
                Unreal Engine ao mercado norte-americano.
              </p>

              <p className="manrope-font text-base text-light-primary sm:text-lg">
                Em projetos pontuais, colaboramos com estúdios europeus em
                entregas para marcas internacionais — incluindo a apresentação
                da BMW em Milão.
              </p>
            </motion.div>
          </div>

          <div className="w-full flex justify-center lg:flex-1 lg:justify-end">
            <Image
              src="/images/about-international.svg"
              alt="Brasil, Estados Unidos e Itália — países onde a Hanazaki Studio atuou"
              width={520}
              height={480}
              priority
              className="object-contain w-auto h-[280px] sm:h-[340px] lg:h-[420px]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
