"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

import {
  ChicagoContainerAnimation,
  ChicagoItemAnimation,
} from "@/constants/framer/chicago-animations";

export function Chicago() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }

  function handleEnded() {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <section className="w-full px-6 py-16 sm:px-16 sm:py-24 lg:py-32">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={ChicagoContainerAnimation}
          className="bg-gray-secondary rounded-3xl p-8 sm:p-12 lg:p-16"
        >
          <div className="flex flex-col items-center gap-y-10 lg:flex-row lg:gap-x-12 lg:items-center lg:justify-center">
            {/* VÍDEO */}
            <motion.div
              variants={ChicagoItemAnimation}
              className="relative w-full max-w-[260px] sm:max-w-[300px] aspect-[9/16] rounded-2xl overflow-hidden shrink-0 bg-black"
            >
              <video
                ref={videoRef}
                src="/chicago.webm"
                poster="/images/chicago-poster.webp"
                controls={isPlaying}
                playsInline
                preload="metadata"
                onEnded={handleEnded}
                className="w-full h-full object-cover"
              />

              {!isPlaying && (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Reproduzir vídeo de Chicago"
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors group cursor-pointer"
                >
                  <span className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-gold-primary/90 group-hover:bg-gold-primary transition-colors">
                    <Play
                      size={28}
                      className="text-white fill-white ml-1"
                    />
                  </span>
                </button>
              )}
            </motion.div>

            {/* TEXTO */}
            <motion.div
              variants={ChicagoItemAnimation}
              className="flex flex-col justify-center gap-y-5 lg:max-w-xl"
            >
              <h2 className="poppins-font text-3xl font-semibold text-gold-primary sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                Hanazaki na Expo Build Chicago 2025
              </h2>

              <p className="poppins-font text-base font-normal text-light-primary leading-relaxed sm:text-lg">
                Em 2025 estivemos na Expo Build Chicago, apresentando
                experiências interativas em Unreal Engine ao mercado
                norte-americano. Passo concreto no caminho de mostrar a
                tecnologia brasileira pra fora do país.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
