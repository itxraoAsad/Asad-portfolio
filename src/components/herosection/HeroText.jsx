import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/Variants';

const HeroText = () => {
  return (
    <>
       <div className='min-[400px]:mt-10 flex flex-col items-start justify-center h-full p-4 md:p-8 lg:p-12 max-w-3xl mt-4 md:text-left sm:text-center'>
        <motion.h2 
        variants={fadeIn('down', 0.5)}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.2}}

        className='text-2xl md:text-3xl lg:text-2xl  text-cyan-300 mb-4 sm:text-xl '>
        FRONTEND-WEB DEVELOPER 
        </motion.h2> 
       
       <motion.h1
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.2}}
        className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange-400 mb-6'>
         ASAD ULLAH
        </motion.h1> 

       <motion.p
       variants={fadeIn('up', 0.6)}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.2}}
       
       className='text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-2xl'>
        A passionate Frontend Web Developer with  a knack for crafting engaging user experiences.
       </motion.p>
     
       </div>
    </>
  )
}

export default HeroText