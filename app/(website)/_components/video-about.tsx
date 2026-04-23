"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import AboutImage from "@/public/images/below-hero-example.png";
import { MouseEventHandler, SyntheticEvent, useState } from "react";

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

      {/* <section className="relative z-30 w-full aspect-video rounded-[30px] overflow-hidden flex items-center justify-center lg:rounded-[60px] after:content-[''] after:w-full after:h-full after:bg-gray-primary/60 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:z-40"> */}
      <section className="relative z-30 w-full pt-[56.66%] rounded-[30px] overflow-hidden flex items-center justify-center lg:rounded-[60px] after:content-[''] after:w-full after:h-full after:bg-gray-primary/60 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:z-40">
        {/* TODO: inserir a imagem por enquanto depois pegar e colocar o video */}
        <Image
          src={AboutImage}
          alt="Exemplo"
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
          viewport={{ once: true, amount: "some" }}
          variants={ContainerAnimation}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 flex flex-col space-y-6 items-center justify-center group cursor-pointer overflow-hidden"
        >
          <motion.div variants={LineAnimation} className="w-full h-[2px] min-h-[2px] bg-gold-primary self-start" />

          <motion.h2
            variants={TextAnimation}
            className="text-2xl text-center uppercase text-light-primary font-medium sm:text-5xl lg:text-6xl"
          >
            Dê vida às <strong className="font-medium text-gold-primary">ideias</strong>
          </motion.h2>

          <motion.div variants={PlayAnimation}>
            <PlayCircle
              size="67px"
              strokeWidth={1.5}
              className="text-light-primary group-hover:text-gold-primary transition-colors"
            />
          </motion.div>

          <motion.div variants={LineAnimation} className="w-full h-[2px] min-h-[2px] bg-gold-primary self-end" />
        </motion.div>
      </section>
    </>
  );
}
