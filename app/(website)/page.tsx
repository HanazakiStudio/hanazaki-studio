"use client";

import { useEffect } from "react";

import { Hero } from "@/app/(website)/_components/hero";
import { VideoAbout } from "@/app/(website)/_components/video-about";
import { About } from "@/app/(website)/_components/about";
import { Services } from "@/app/(website)/_components/services";
import { Projects } from "@/app/(website)/_components/projects";

export default function Home() {

  useEffect(() => {
    if (window.location.hash === "#projetos") {
      setTimeout(() => {
        const el = document.getElementById("projetos");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, []);

  return (
    <>
      <Hero />
      <VideoAbout />
      <About />
      <Services />

      {/* IMPORTANTE: ID AQUI */}
      <section id="projetos">
        <Projects />
      </section>
    </>
  );
}
