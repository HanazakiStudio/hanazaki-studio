
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  ContainerAnimation,
  TradesAnimation,
} from "@/constants/framer/about-trades-animations";

export function LogosBanner() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={ContainerAnimation}
      className="w-full bg-gray-secondary px-6 sm:px-16 py-6 sm:py-8 lg:py-10 mt-12 sm:mt-16 flex items-center justify-around"
    >
      <motion.div
        variants={TradesAnimation}
        className="relative h-8 w-20 sm:h-12 sm:w-28 lg:h-16 lg:w-40"
      >
        <Image
          src="/images/dkc.png"
          alt="DKC"
          fill
          sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 160px"
          className="object-contain object-center"
        />
      </motion.div>

      <motion.div
        variants={TradesAnimation}
        className="relative h-8 w-20 sm:h-12 sm:w-28 lg:h-16 lg:w-40"
      >
        <Image
          src="/images/gvc.svg"
          alt="GVC"
          fill
          sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 160px"
          className="object-contain object-center"
        />
      </motion.div>

      <motion.div
        variants={TradesAnimation}
        className="relative h-8 w-20 sm:h-12 sm:w-28 lg:h-16 lg:w-40"
      >
        <Image
          src="/images/chicago-2025.png"
          alt="Expo Build Chicago 2025"
          fill
          sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 160px"
          className="object-contain object-center"
        />
      </motion.div>
    </motion.section>
  );
}
