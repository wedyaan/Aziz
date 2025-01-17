 

import React from 'react';

const ProjectTag = ({ onClick, name, isSelected }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg ${isSelected ? 'bg-[#66b2ff] text-white' : 'bg-gray-200 text-black'}`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;