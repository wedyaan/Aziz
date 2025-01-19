"use client";

import React from "react";
import NavLink from "./NavLink";
import { useTranslation } from "react-i18next";


const MenuOverlay = ({ links }) => {
  const { t, i18n } = useTranslation();

  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />

          
        </li>
      ))}

      
{i18n.language == "ar" && (
              <button
                className="text-[#fff]"
                onClick={() => i18n.changeLanguage("en")}
              >
                En
              </button>
            )}

            {i18n.language == "en" && (
              <button
                className="text-[#fff]"
                onClick={() => i18n.changeLanguage("ar")}
              >
                Ar
              </button>
            )}

    </ul>
  );
};

export default MenuOverlay;
