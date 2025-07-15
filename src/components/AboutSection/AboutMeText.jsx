import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variants';

const AboutMeText = () => {
  return (
    <motion.div
      variants={fadeIn('left', 0.5)} 
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
      className='flex flex-col items-center max-[1078px]:items-start max-w-[600px] mx-auto p-6 shadow-lg rounded-lg max-[1078px]:text-left'
    >
      <h1 className='text-6xl font-bold text-center mb-6 text-cyan-400 max-[600px]:text-4xl'>
        About Me
      </h1>
      <p className='text-xl text-white'>
        Hello! I'm a passionate web developer with a love for creating dynamic and responsive web applications. 
        With a background in computer science, I have honed my skills in HTML, CSS, JavaScript, and various frameworks.
      </p>
      <p className='text-xl text-white mt-4'>
        I enjoy tackling challenging problems and continuously learning new technologies to enhance my skill set. 
        My goal is to build user-friendly interfaces that provide an exceptional user experience.
      </p>
    </motion.div>
  );
};

export default AboutMeText;
