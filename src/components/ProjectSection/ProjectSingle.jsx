import React from 'react';

const ProjectSingle = ({ name, year, image, align }) => {
  const isLeftAlign = align === 'left';

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    
      <div className={`w-full md:w-1/2 text-center md:text-${isLeftAlign ? 'left' : 'right'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#fb9718] mb-4">{name}</h2>
        <h3 className="text-xl font-light text-gray-300">{year}</h3>
        <div className="mt-4">
          <a
            href="#"
            className="inline-flex items-center text-blue-400 hover:underline"
          >
            View <span className="ml-2">→</span>
          </a>
        </div>
      </div>


      <div className="w-full md:w-1/2 max-w-[400px] max-h-[220px] overflow-hidden rounded-xl border border-gray-700 relative transition-transform duration-300 hover:scale-105">
        <div className="absolute inset-0 bg-cyan-400 opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ProjectSingle;