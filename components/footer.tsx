import Image from "next/image";
import Link from "next/link";

import { FooterForm } from "./footer-form";
import { SocialMediaLink } from "./social-media-link";

export function Footer() {
  return (
    <footer className="w-full mt-12 sm:mt-24">
      <div className="w-full px-6 flex flex-col items-center gap-8 
        sm:flex-row sm:items-stretch sm:justify-between sm:px-16 
        lg:container lg:mx-auto">

        {/* LOGO */}
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="relative w-28 h-28 sm:w-36 sm:h-32 lg:w-48 lg:h-48"
          >
            <Image
              src="/images/logo-white.svg"
              alt="Hanazaki Studio"
              fill
              className="object-contain"
            />
          </Link>
        </div>

        {/* DIVIDER */}
        <div className="hidden sm:block w-px bg-gold-primary" />

        {/* FORM */}
        <div className="flex-1 max-w-xl w-full">
          <FooterForm />
        </div>

        {/* DIVIDER */}
        <div className="hidden sm:block w-px bg-gold-primary" />

        {/* SOCIAL */}
        <div className="flex flex-col justify-center gap-10 w-full sm:w-auto">
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
            text="Hanazaki Studio"
          />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="w-full mt-12 py-6 border-t border-light-primary px-6 
        flex flex-col items-center gap-4 
        sm:flex-row sm:justify-between sm:px-16">

        <span className="poppins-font text-sm text-light-primary font-medium sm:text-base">
          Hanazaki Studio ©2024
        </span>

        <span className="poppins-font text-sm text-light-primary font-medium sm:text-base">
          Desenvolvido por{" "}
          <a
            href="https://mkdevsolutions.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:opacity-70 transition"
          >
            MKDev
          </a>
        </span>
      </div>
    </footer>
  );
}
