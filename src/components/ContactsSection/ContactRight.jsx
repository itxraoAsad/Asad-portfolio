import React from 'react';

const ContactRight = () => {
  return (
    <div className="bg-[#4A2C2A] p-6 rounded-lg shadow-lg max-w-md w-full relative ">
      <h2 className="text-3xl text-[#00cfff] mb-4 max-[400px]:text-2xl ">Contact Me</h2>
      <h3 className="text-xl text-orange-500 mb-4 font-semibold">Get In Touch</h3>
      <p className="text-white mb-6 max-[400px]:text-wrap">
        Feel free to reach out if you'd like to collaborate. You are just a few clicks away!
      </p>
    
      <div className="space-y-4 mb-8">
        <div className="flex items-center text-white">
          <svg className="w-6 h-6 mr-2 text-[#00cfff]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M21 8V7a4 4 0 00-4-4H7a4 4 0 00-4 4v1" />
            <circle cx={12} cy={13} r={4} />
            <path d="M12 17c-4.418 0-8 1.79-8 4v3h16v-3c0-2.21-3.582-4-8-4z" />
          </svg>
          <span>asadullahn958@gmail.com</span>
        </div>
        <div className="flex items-center text-white">
          <svg className="w-6 h-6 mr-2 text-[#00cfff]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
            <path d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
            <path d="M16 15h.01" />
          </svg>
          <span>+92349-7345741</span>
        </div>
        <div className="flex items-center text-white">
          <svg className="w-6 h-6 mr-2 text-[#00cfff]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M12 2C8 2 4 4 4 8c0 4 4 8 8 8s8-4 8-8c0-4-4-6-8-6z" />
          </svg>
          <span>Layyah, Pakistan</span>
        </div>
      </div>
    
    </div>
  );
};

export default ContactRight;