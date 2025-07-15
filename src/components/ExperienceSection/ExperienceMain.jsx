import React from 'react'
import ExperienceText from './ExperienceText'
import ExperienceSection from './ExperienceSection'
import ExperienceImg from './ExperienceImg'
import ExperienceTopLeft from './ExperienceTopLeft'
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variants';

const ExperienceMain = () => {
  return (
    <div>
      <div id='experience' className='max-w-[1200px] mx-auto px-4 py-10 overflow-hidden  '>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}


        >
          <ExperienceText />

        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
        className='flex fle-col items-center justify-between max-[1100px]:flex-col max-[1100px]:gap-16'>
        
          <ExperienceTopLeft />
          <ExperienceImg />
          <ExperienceSection />


        </motion.div>


      </div>
      <div className='w-full h-1 bg-[#645550] lg:block hidden mb-4'></div>

    </div>
  )
}

export default ExperienceMain