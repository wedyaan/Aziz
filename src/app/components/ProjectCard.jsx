 

import React from 'react';
import Image from "next/legacy/image";

const ProjectCard = ({ title, imgUrl, className }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={imgUrl}
        alt={title}
        width={300} // Fixed width
        height={200} // Fixed height
        className="object-cover w-full max-h-[300px]" // Set max height
      />
      <div className="text-center"> {/* New div for title */}
        <h3 className="p-2 bg-white text-black">{title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;