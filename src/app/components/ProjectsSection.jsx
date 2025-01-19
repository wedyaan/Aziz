// src/components/ProjectsSection.jsx

// "use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag"; // Ensure this component exists
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next"; 
import { projectsData } from './projectsData';

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useTranslation();

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    tag === "All" || project.tag.includes(tag)
  );

  return (
    <section id="Events">
      <h2 className="text-center text-4xl font-bold text-[#66b2ff] mt-4 mb-8">
        {t("myEvents")} 
      </h2>
      <div className="text-[#66b2ff] flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name={t("all")}  
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Image")}
          name={t("images")}  
          isSelected={tag === "Image"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Certificate")}
          name={t("Certificates")}  
          isSelected={tag === "Certificate"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={t(project.titleKey)}  
              imgUrl={project.image}
              className="border-4 border-[#d4af37]"
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;