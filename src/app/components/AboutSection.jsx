'use client';
import React, { useTransition, useState } from "react";
import Image from "next/image";
// import TabButton from "./TabButton";
import { useTranslation } from "react-i18next";
import Link from "next/link"; // Import Link from Next.js

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const { i18n } = useTranslation();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const currentLanguage = i18n.language;

  const aboutMeText = {
    en: (
      <>
        Customer Experience Practitioner with a strong commitment to enhancing
        customer journeys and delivering tailored solutions that meet client
        needs. Skilled in utilizing data analysis and customer insights to drive
        impactful strategies that create exceptional and sustainable
        experiences. Passionate about fostering customer loyalty and achieving
        measurable satisfaction through innovative approaches. Continuously
        developing expertise to make a positive and transformative impact in the
        field of customer experience.
        <br />
        <Link href="/cv" target="_blank" className="mt-4 inline-block px-4 py-2 border border-blue-500 text-blue-500 bg-transparent rounded hover:bg-[#66b2ff] hover:text-white transition duration-300">
          View CV
        </Link>
      </>
    ),
    ar: (
      <>
        متخصص في تجربة العملاء مع التزام قوي بتعزيز رحلات العملاء وتقديم حلول
        مخصصة تلبي احتياجات العملاء. ماهر في استخدام تحليل البيانات 
        لدفع استراتيجيات مؤثرة تخلق تجارب استثنائية ومستدامة. شغف بتعزيز ولاء
        العملاء وتحقيق رضاهم بشكل قابل للقياس من خلال أساليب مبتكرة. تطوير
        الخبرات باستمرار لإحداث تأثير إيجابي وتحويلي في مجال
        تجربة العملاء.
        <br />
        <Link href="/cv" target="_blank" className="mt-4 inline-block px-4 py-2 border border-blue-500 text-blue-500 bg-transparent rounded hover:bg-blue-500 hover:text-white transition duration-300">
          عرض السيرة الذاتية
        </Link>
      </>
    ),
  };

  return (
    <section className="text-[#003366]" id="about">
      <div className="grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex items-center justify-center align-center">
          <Image
            alt="azizImage"
            src="/images/aziz.png"
            width={450}
            height={450}
            className="object-contain h-full border-2 border-[#d4af37] rounded" // Updated border color and added rounded class
          />
        </div>
        <div
          className={`flex flex-col h-full ${
            currentLanguage === "ar" ? "text-right" : "text-left"
          }`}
        >
          <h2 className="text-4xl font-bold text-[#66b2ff] mb-4">
            {currentLanguage === "ar" ? "  من أنا " : "About Me"}
          </h2>
          <p
            className={`text-base lg:text-lg ${
              currentLanguage === "ar" ? "text-right" : "text-left"
            }`}
          >
            {aboutMeText[currentLanguage]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;