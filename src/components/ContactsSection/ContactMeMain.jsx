import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/Variants';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';

const ContactMeMain = () => {
  return (
    <div
      id='contacts'
      className="  flex flex-col md:flex-row items-center justify-center gap-8 p-6 sm:p-8 bg-gray-900 min-h-screen w-full overflow-hidden max-[400px]:gap-6 max-[400px]:px-4"
    >
      <motion.div
        className="w-full flex justify-center"
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ContactLeft />
      </motion.div>

      <motion.div
        className="w-full flex justify-center"
        variants={fadeIn('right', 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ContactRight />
      </motion.div>
    </div>
  );
};

export default ContactMeMain;
