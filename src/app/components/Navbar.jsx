'use client';
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useTranslation } from "react-i18next";
import Image from "next/legacy/image";
import logo from 'C:/Users/lenovo/Desktop/nextjs-portfolio/public/images/logo.png';  

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    {
      title: t("aboutMe"),
      path: "#about",
    },
    {
      title: t("events"),
      path: "#Events",
    },
    {
      title: t("contact"),
      path: "#contact",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#d4af37] bg-opacity-95 border border-[#d9d9d9]">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" className="h-10 w-auto md:h-17" />  
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}

            {i18n.language === "ar" ? (
              <button
                className="text-[#003366] hover:text-[#ffffff] sm:text-xl"
                onClick={() => i18n.changeLanguage("en")}
              >
                En
              </button>
            ) : (
              <button
                className="text-[#003366] hover:text-[#ffffff] sm:text-xl"
                onClick={() => i18n.changeLanguage("ar")}
              >
                Ar
              </button>
            )}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />} {/* Show overlay if navbar is open */}
    </nav>
  );
};

export default Navbar;