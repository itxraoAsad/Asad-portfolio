import React from 'react'
import AboutMeImage from './AboutMeImage'
import AboutMeText from './AboutMeText'
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/Variants';

 const AboutMeMain = () => {
  return (
    <div id='about-me' className='flex md:flex-row flex-col justify-between items-center gap-16 px-4 mx-auto max-w-[1200px] mt-[100px] '>
        <motion.div
        values={fadeIn('side', 0.5)}
    initial='hidden'
    whileInView='show'
    viewport={{once: true, amount: 0.2}}
        >
            <AboutMeText
            
            />
        </motion.div>

        <div>
            <AboutMeImage/>

        </div>

         
    </div>
  )
}
export default AboutMeMain