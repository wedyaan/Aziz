"use client";
import React from "react";
import youtube from "../../../public/icons8-youtube-48.png";
import LinkedinIcon from "../../../public/linkedin-icon.svg"; // Make sure this is an SVG
import Link from "next/link";
import Image from "next/image";
import email from "../../../public/icons8-email-48.png";
import whatsapp from "../../../public/icons8-whatsapp-48.png";
import { useTranslation } from "react-i18next"; // Import translation hook

const EmailSection = () => {
  const { t } = useTranslation(); // Hook for translations

  return (
    <section
      id="contact"
      className="grid md:grid-cols-1 relative items-center justify-center my-2"
    >
      <hr className="border-gray-300 my-8" />

      <div className="z-10 text-center">
        <h5 className="text-xl font-bold text-[#003366] my-2">
          {t("letsConnect")}  
        </h5>
     
        <div className="socials flex justify-center gap-2">
          <Link href="https://www.youtube.com/@AzizCX/videos" target="_blank">
            <Image
              src={youtube}
              alt="YouTube Icon"
              style={{ filter: "invert(0) sepia(0) saturate(1000%) hue-rotate(210deg) brightness(0.5)" }} // Adjust as necessary
            />
          </Link>
          <Link href="mailto:someone@example.com" target="_blank">
            <Image
              src={email}
              alt="Email Icon"
              style={{ filter: "invert(0) sepia(0) saturate(1000%) hue-rotate(210deg) brightness(0.5)" }} // Adjust as necessary
            />
          </Link>
          <Link href="https://www.linkedin.com/in/abdulaziz-bukhari2/" target="_blank">
            <Image
              src={LinkedinIcon}
              alt="LinkedIn Icon"
              style={{ filter: "invert(0) sepia(0) saturate(1000%) hue-rotate(210deg) brightness(0.5)" }} // Adjust as necessary
            />
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=966555647572" target="_blank">
            <Image
              src={whatsapp}
              alt="WhatsApp Icon"
              style={{ filter: "invert(0) sepia(0) saturate(1000%) hue-rotate(210deg) brightness(0.5)" }} // Adjust as necessary
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;