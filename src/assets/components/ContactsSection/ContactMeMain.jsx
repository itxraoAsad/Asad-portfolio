import React from 'react';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';


const ContactMeMain = () => {
  return (
    <div id='contacts' className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-gray-900 min-h-screen">
      <ContactLeft />
      <ContactRight />
    </div>
  );
};

export default ContactMeMain;