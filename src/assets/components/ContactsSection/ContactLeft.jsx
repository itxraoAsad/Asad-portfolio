import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactLeft = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w6ae9mh', 'template_2k8p54x', form.current, {
        publicKey: 'Ieg7nuqYfaGEImq0a',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset(); // reset after send
          // window.scrollTo({ top: 0, behavior: 'smooth' }); // optional
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="bg-[#4A2C2A] p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-3xl text-[#00cfff] mb-4">Contact Me</h2>
      <h3 className="text-xl text-orange-500 mb-4 font-semibold">Get In Touch</h3>
      <p className="text-white mb-6">
        Feel free to reach out if you'd like to collaborate. You are just a few clicks away!
      </p>
      <form className="flex flex-col space-y-4" ref={form} onSubmit={sendEmail}>
        <input
          name="from_rana"
          type="text"
          placeholder="Your Name"
          required
          className="p-3 rounded bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00cfff]"
        />
        <input
          name="from_email"
          type="email"
          required
          placeholder="Your Email"
          className="p-3 rounded bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00cfff]"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          rows={9}
          cols={50}
          className="p-3 rounded bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00cfff]"
        ></textarea>
        <button
          type="submit"
          className="bg-[#00cfff] text-white px-4 py-2 rounded hover:bg-[#0099cc] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactLeft;
