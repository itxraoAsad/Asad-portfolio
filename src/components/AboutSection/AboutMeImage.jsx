import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/Variants';
import aboutImg from '../../../public/imgs/aboutme.jpg'

const AboutMeImage = () => {
  return (
    <motion.div

    variants={fadeIn('right', 0.5)}
    initial='hidden'
    whileInView='show'
    viewport={{once: true, amount: 0.2}}
     className='h-[500px] w-[300px] relative '>
        <div className='h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden '>
            <img src={aboutImg} alt="aboutme" className='h-full w-auto object-cover'/>
        </div>
        <div className='h-[500px] w-[250px] bg-[#fb9718] absolute bottom-[30px] left-[-30px] top-4  rounded-bl-[120px] rounded-tr-[120px] rounded-br[20px] rounded-tl-[20px] -z-10'></div>
    </motion.div>
  )
}

export default AboutMeImage