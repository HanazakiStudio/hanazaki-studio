"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import AboutImage from "@/public/images/below-hero-example.png";
import { SyntheticEvent, useState } from "react";

import {
  LineAnimation,
  TextAnimation,
  PlayAnimation,
  ContainerAnimation,
} from "@/constants/framer/video-about-animations";
import { VideoModal } from "./video-modal";

export function VideoAbout() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function OpenModal() {
    setIsModalOpen(true);
  }

  function CloseModal(e: SyntheticEvent) {
    setIsModalOpen(false);
  }

  return (
    <>
      <VideoModal isModalOpen={isModalOpen} CloseModal={CloseModal} />

      <section className="relative z-30 w-full pt-[56.66%] rounded-[30px] overflow-hidden flex items-center justify-center lg:rounded-[60px] after:content-[''] after:w-full after:h-full after:bg-gray-primary/60 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:z-40">
        
        <Image
          src={AboutImage}
          alt="Experiência Hanazaki Studio"
          fill
          priority
          placeholder="blur"
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover object-center"
        />

        <motion.div
          role="button"
          onClick={OpenModal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          variants={ContainerAnimation}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 flex flex-col items-center justify-center space-y-5 cursor-pointer group"
        >
          
          {/* LINHA SUPERIOR */}
          <motion.div
            variants={LineAnimation}
            className="w-16 h-[1px] bg-gold-primary opacity-70"
          />

          {/* TEXTO */}
          <motion.h2
            variants={TextAnimation}
            className="text-center uppercase tracking-[0.12em] text-light-primary font-light text-xl sm:text-4xl lg:text-5xl"
          >
            Dê vida às{" "}
            <span className="text-gold-primary font-medium">
              ideias
            </span>
          </motion.h2>

          {/* PLAY */}
          <motion.div variants={PlayAnimation}>
            <PlayCircle
              size="60px"
              strokeWidth={1.2}
              className="text-light-primary group-hover:text-gold-primary transition-all duration-300"
            />
          </motion.div>

          {/* LINHA INFERIOR */}
          <motion.div
            variants={LineAnimation}
            className="w-16 h-[1px] bg-gold-primary opacity-70"
          />
        </motion.div>
      </section>
    </>
  );
}
