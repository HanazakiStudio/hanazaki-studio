"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import {
  ContainerAnimation,
  SubTitleAnimation,
  TagAnimation,
  TitleAnimation,
  SubTitleLineAnimation,
  SubTitleItemAnimation,
} from "@/constants/framer/hero-animations";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <section className="w-full h-screen relative bg-hero-mobile bg-cover bg-center bg-no-repeat">
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0e0e0e]/70 via-[#0e0e0e]/70 to-[#0e0e0e]" />

      {/* Video */}
      <div className="hidden sm:block w-full h-full absolute inset-0">
        <video
          ref={videoRef}
          loop
          muted
          autoPlay
          playsInline
          disablePictureInPicture
          className="w-full h-full object-cover object-center"
        >
          <source src="/hero-video.webm" type="video/webm" />
        </video>
      </div>

      <div className="relative z-20 w-full h-full px-6 flex flex-col justify-center sm:px-16 bg-hero-glows bg-no-repeat bg-contain bg-center lg:container lg:mx-auto">
        
        <motion.div
          initial="initial"
          animate="animate"
          variants={ContainerAnimation}
          className="relative w-full flex flex-col items-center justify-center space-y-6 sm:items-center"
        >
          
          <motion.div
            variants={TagAnimation}
            className="flex items-center justify-center space-x-1 bg-gold-primary/25 px-4 py-1 rounded-md cursor-default"
          >
            <span className="uppercase poppins-font font-semibold !leading-none text-gold-primary text-sm text-center sm:mt-[2px] sm:text-base">
              Para Incorporadoras de Alto Padrão
            </span>
            <ArrowUpRight color="#B9A568" />
          </motion.div>

          <motion.h1
            variants={TitleAnimation}
            className="poppins-font text-2xl max-w-[275px] text-light-primary font-semibold text-center sm:text-5xl sm:max-w-none lg:text-7xl lg:leading-[1.1]"
          >
            Salas imersivas que transformam visita em{" "}
            <strong className="font-semibold bg-gradient-to-b from-[#D1BC7D] to-[#534A2F] inline-block text-transparent bg-clip-text">
              decisão de compra
            </strong>
            .
          </motion.h1>

          <motion.div
            variants={SubTitleAnimation}
            className="w-full overflow-hidden flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4"
          >
            
            <motion.p
              variants={SubTitleItemAnimation}
              className="manrope-font text-light-primary text-base lg:text-xl"
            >
              Unreal Engine
            </motion.p>

            <motion.div className="h-6 w-[1px] bg-gold-primary lg:h-8" />

            <motion.p
              variants={SubTitleItemAnimation}
              className="manrope-font text-light-primary text-base lg:text-xl"
            >
              Alto Padrão
            </motion.p>

            <motion.div className="h-6 w-[1px] bg-gold-primary lg:h-8" />

            <motion.p
              variants={SubTitleItemAnimation}
              className="manrope-font text-light-primary text-base lg:text-xl"
            >
              Integrada ao Stand
            </motion.p>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
