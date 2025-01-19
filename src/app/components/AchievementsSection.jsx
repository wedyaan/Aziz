'use client';
import React from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";  

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  { 
    postfix: "+",
    metricKey: "events",  
    value: "6",
  },
  {
    
    metricKey: "users",  
    value: "50",
    prefix: "+",
  },
  {
    metricKey: "awards",  
    value: "5",
  },
  {value: "14",
    postfix: "+",
    metricKey: "yearsExperience",  
    
  },
];

const AchievementsSection = () => {
  const { t } = useTranslation(); 

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-[#66b2ff] text-4xl font-bold flex flex-row">
              {achievement.postfix && <span>{achievement.postfix}</span>} {/* Show postfix if exists */}

                {achievement.prefix && <span>{achievement.prefix}</span>} 
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-black text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
              </h2>
              <p className="text-[#003366] text-base">
                {t(achievement.metricKey)} {/* Translated metric */}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;