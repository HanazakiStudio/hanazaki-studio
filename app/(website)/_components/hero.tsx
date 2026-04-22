"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <section className="w-full h-screen relative bg-hero-mobile bg-cover bg-center bg-no-repeat">
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0e0e0e]/70 via-[#0e0e0e]/70 to-[#0e0e0e]" />

      {/* Video */}
      <div className="hidden sm:block absolute inset-0">
        <video
          ref={videoRef}
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.webm" type="video/webm" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full h-full px-6 flex flex-col justify-center items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 bg-yellow-500/20 px-4 py-1 rounded-md"
        >
          <span className="text-yellow-400 text-sm font-semibold uppercase">
            Para Incorporadoras de Alto Padrão
          </span>
          <ArrowUpRight size={16} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl sm:text-5xl lg:text-7xl font-semibold mt-6 max-w-4xl"
        >
          Salas imersivas que transformam visita em{" "}
          <span className="bg-gradient-to-b from-yellow-400 to-yellow-700 text-transparent bg-clip-text">
            decisão de compra
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 mt-6 text-lg"
        >
          Unreal Engine • Alto Padrão • Integrada ao Stand
        </motion.p>

      </div>
    </section>
  );
}
