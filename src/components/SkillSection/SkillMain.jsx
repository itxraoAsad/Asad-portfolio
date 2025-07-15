import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variants'; // adjust path if needed

import SkillText from './SkillText';
import SkillAll from './SkillAll';
import SkillAllSM from './SkillAllSM';

const SkillMain = () => {
    return (
        <div id='skills'>
            <div className='max-w-[1200px] px-4 mx-auto min-h-[600px] overflow-hidden relative'>
                
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <SkillText />
                </motion.div>

            
                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className='bottom-[80px] absolute left-[50%] -translate-x-1/2 lg:block hidden'
                >
                    <SkillAll />
                </motion.div>

            
                <div
                  
                    className='lg:hidden sm:block'
                >
                    <SkillAllSM />
                </div>

            </div>
        </div>
    );
};

export default SkillMain;
