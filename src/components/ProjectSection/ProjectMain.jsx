import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variants';
import ProjectSingle from './ProjectSingle';
import ProjectText from './ProjectText';
import image1 from '../../../public/imgs/website-img-4.jpg';
import image2 from '../../../public/imgs/website-img-3.jpg';

const Projects = [
  {
    name: 'Online Store',
    year: 'Mar 2025',
    image: image1,
    align: 'right'
  },
  {
    name: 'Quiz App',
    year: 'Apr 2025',
    image: image2,
    align: 'right'
  }
];

const ProjectMain = () => {
  return (
    <div id='projects'>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
      >
        <ProjectText />
      </motion.div>

      <div>
        {Projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.4 + index * 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
          >
            <ProjectSingle
              name={project.name}
              year={project.year}
              image={project.image}
              align={project.align}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectMain;
