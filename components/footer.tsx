import Image from "next/image";
import Link from "next/link";

import { FooterForm } from "./footer-form";
import { SocialMediaLink } from "./social-media-link";

export function Footer() {
  return (
    <footer className="w-full mt-12 sm:mt-24">
      <div className="w-full px-6 flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8 sm:px-16 sm:justify-between lg:container lg:mx-auto">
        <Link
          href="/"
          className="relative w-24 h-24 shrink-0 sm:w-36 sm:h-32 lg:w-56 lg:h-56"
        >
          <Image
            src="/images/logo-white.svg"
            alt="Hanazaki Studio"
            fill
            className="object-contain object-center"
          />
        </Link>

        {/* Divisor 1 — só aparece no desktop, estica conforme a linha */}
        <div className="hidden sm:block w-px self-stretch bg-gold-primary" />

        {/* Form ocupa o espaço sobrando */}
        <div className="w-full sm:flex-1">
          <FooterForm />
        </div>

        {/* Divisor 2 — horizontal no mobile, vertical no desktop */}
        <div className="w-full h-px bg-gold-primary sm:w-px sm:h-auto sm:self-stretch" />

        <div className="flex items-center justify-center gap-12 shrink-0 sm:flex-col sm:items-start sm:gap-8">
          <SocialMediaLink
            href="https://wa.me/5516997054012?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+o+seu+servi%C3%A7o."
            alt="Whatsapp"
            imageSrc="/images/whatsapp.svg"
            text="(16) 99705 - 4012"
          />

          <SocialMediaLink
            href="https://www.instagram.com/hanazaki_studio/"
            alt="Instagram"
            imageSrc="/images/instagram.svg"
            text="@hanazaki_studio"
          />

          <SocialMediaLink
            href="https://www.linkedin.com/in/leonardo-hanazaki-50468a240/"
            alt="Linkedin"
            imageSrc="/images/linkedin.svg"
            text="Leonardo Hanazaki"
          />
        </div>
      </div>

      <div className="w-full mt-8 py-4 border-t border-light-primary px-6 flex flex-col space-y-4 items-center justify-between sm:space-y-0 sm:flex-row sm:px-16">
        <span className="poppins-font text-sm text-light-primary font-medium sm:text-lg">
          Hanazaki Studio ©2024
        </span>

        <span className="poppins-font text-sm text-light-primary font-medium sm:text-lg">
          Desenvolvido por{" "}
          
            href="https://mkdevsolutions.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            MKDev
          </a>
        </span>
      </div>
    </footer>
  );
}
