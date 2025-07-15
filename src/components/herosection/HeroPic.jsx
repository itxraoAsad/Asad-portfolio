import React from 'react'
import { BsHexagon } from "react-icons/bs";
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variants';
import HexaPic from '/imgs/HexaPic.png';

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn('left', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.3 }}
      className='relative flex items-center justify-center w-full h-[600px] max-[600px]:h-[600px]  overflow-hidden'
    >
      <img
        src={HexaPic}
        alt="Hero"
        className="rounded-full object-contain max-[600px]:rounded-[100%] w-[430px] h-[380px] max-[600px]:w-[350px] max-[600px]:h-[350px] max-[500px]:w-[250px] max-[500px]:h-[250px]"
      />

      <div className='absolute inset-0 flex items-center justify-center -z-10 animate-pulse'>
        <BsHexagon className='text-cyan-400 blur-md animate-[spin_20s_linear_infinite] h-[600px] sm:h-[500px] max-[500px]:h-[400px] w-auto mt-16' />
      </div>
    </motion.div>
  );
};

export default HeroPic;
