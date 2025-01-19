"use client";
import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import Image from "next/legacy/image";
import Link from "next/link"; // Import Link for navigation

const Footer = () => {
  const { t } = useTranslation(); // Get the translation function

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-6 flex justify-between items-center">
        <Link href="https://github.com/wedyaan" target="_blank" rel="noopener noreferrer"> 
          <Image 
            src="/images/git.png" 
            alt="GitHub Logo" 
            width={50} 
            height={50} 
          />  
        </Link>
        <p className="text-slate-600">{t("All Rights Reserved for Dev : Wedyan  ")}</p> {/* Translated text */}
      </div>
    </footer>
  );
};

export default Footer;