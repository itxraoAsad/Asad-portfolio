import React from 'react'
import { BsHexagon } from "react-icons/bs";
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/Variants';
import HexaPic from './../../../public/imgs/HexaPic.png'
const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn('left', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once: true, amount: 0.3}}
     className=' flex justify-center items-center w-full relative overflow-hidden h-[600px]  '>

      
<img
  src={HexaPic} 
  alt="Hero"
  className="w-[450px] h-[450px] object-top rounded-[50%]  "
/>

      <div className='absolute  flex items-center justify-center  -z-10 animate-pulse '>
        <BsHexagon className='mt-16 md:h-[90%] sm:h-[120%] min-h-[600px] text-cyan-400 w-auto blur-md 
        animate-[spin_20s_Linear_infinite]'/>
      </div>
      
    </motion.div>
    
  )
}

export default HeroPic