import React from 'react'
import { Link } from 'react-scroll';

const links = [
  { link: "About Me", section: "about-me" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contacts", section: "contacts" },
];

const Navbarlinks = () => {
  return (
    <ul className='flex gap-6 text-center font-bold py-4 lg:flex-row sm:flex-col lg:relative sm:absolute max-sm:flex-col max-sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl bg-cyan-400/35 backdrop-blur-lg lg:bg-black sm:w-full max-sm:w-full max-sm:top-[120%]' >
      {links.map((link, index) => (
        <li key={index} className='group'>
          <Link
            to={link.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            className='cursor-pointer hover:text-cyan-300 transition-all duration-500'
          >
            {link.link}
          </Link>
          <div className='mx-auto bg-cyan-300 w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
        </li>
      ))}
    </ul>
  );
};

export default Navbarlinks;
