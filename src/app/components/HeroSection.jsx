"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Slider from "react-slick"; // Import the Slider component
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const { t, i18n } = useTranslation();

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

   const slides = [
    {
      image: "/images/slider2.jfif",
      title: t("hello i'm"),
      description: t("Abdulaziz Bukhari"),
    },
    {
      image: "/images/slider1.jfif",
      title: t("Vision Statement"),
      description: t("Vision Statement Description"),
    },
    {
      image: "/images/pic5.jfif",
      title: t("Mission Statement"),
      description: t("Mission Statement Description"),
    },
  ];

   const isArabic = i18n.language === "ar";

  return (
    <section className="lg:py-16  ">
      <Slider {...settings} className=" border-[#d9d9d9] rounded-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative  h-[400px] sm:h-[550px] lg:h-[750px] bg-cover bg-center border-2 border-[#d4af37]"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 flex items-center justify-start p-8 bg-black bg-opacity-50 ${
                isArabic ? "text-right" : "text-left"
              }`}
              dir={isArabic ? "rtl" : "ltr"}  
            >
              <div className="text-white">
                <h1
                  style={{ color: "#66b2ff" }}  
                  className="mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold"
                >
                  {slide.title}
                  {slide.subtitle && `, ${slide.subtitle}`}
                  <br />
                </h1>
                <p
                  className={`text-[#d9d9d9] ${
                    index === 0
                      ? "text-3xl sm:text-4xl lg:text-5xl"
                      : "text-base sm:text-lg lg:text-xl"
                  } mb-6 font-bold`}
                >
                  {slide.description}
                </p>
                <div>
                  <Link
                    href="/#contact"
                    className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 gradient-background hover:bg-slate-900 text-black "
                  >
                    {t("hireMe")}
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/abdulaziz-bukhari2/"
                    target="_blank"
                    className="px-1 m-3 inline-block py-1 w-full sm:w-fit rounded-full  hover:bg-slate-900 text-white mt-3"
                  >
                    <span className="block bg-[#003366]   rounded-full px-5 py-2">
                      {t("linkedin")}
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;