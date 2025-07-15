import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variants';

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "project" },
  { link: "Contacts", section: "contact" },
];

const FooterMain = () => {
  return (
    <div className='px-4'>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className='w-full h-[1px] bg-[#978580] mt-24'
      ></motion.div>

      <motion.div
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className='md:flex max-[700px]:hidden justify-between mt-4 max-w-[1200px] mx-auto overflow-hidden'
      >
        <p className='text-3xl text-[#978580]'>Asad Ullah </p>
        <ul className='flex gap-4 text-[#978580] text-xl'>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href="#"
                className='hover:text-white transition-all duration-500 cursor-pointer'
              >
                {link.link}
              </a>
              <div></div>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.p
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className='max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-[#645550]'
      >
        .2025 Asad Ullah | All Right Reserved
      </motion.p>
    </div>
  );
};

export default FooterMain;
