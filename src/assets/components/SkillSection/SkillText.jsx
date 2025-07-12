import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../../../framerMotion/Variants';


const SkillText = () => {

    return (
        <div
        
        >
            <motion.div
            values={fadeIn('up', 0.7)}
            initial='hidden'
            whileInView='show'
            viewport={{once: true, amount: 0.7}}
            className='flex flex-col items-center'>
                <h1 className='text-6xl text-cyan-400 mb-10 '>MY SKILLS</h1>
                <p className='text-lg text-center text-white'>
                    I have a diverse skill set that includes HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap. I am proficient in creating responsive and visually appealing web applications using these technologies. My expertise in HTML and CSS allows me to structure and style web pages effectively, while my knowledge of JavaScript and React enables me to build dynamic and interactive user interfaces. Additionally, I leverage Tailwind CSS and Bootstrap to streamline the design process and ensure consistency across projects.
                </p>
                
            </motion.div>

        </div>
    )
}

export default SkillText