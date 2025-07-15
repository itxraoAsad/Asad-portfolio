import React from 'react'
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
            <div className='w-full h-[1px] bg-[#978580] mt-24'></div>
            <div className='md:flex max-[700px]:hidden  justify-between mt-4 max-w-[1200px] mx-auto'>
                <p className='text-3xl text-[#978580]'>Asad Ullah </p>
                <ul className='flex gap-4 text-[#978580] text-xl' >
                    {links.map((link, index) => {
                        return <li key={index} className=''>
                            <a href='#' className='hover:text-white transition-all duration-500 cursor-pointer' >{link.link}</a>

                            <div className=' '></div>
                        </li>
                    })}

                </ul>
            </div>
            <p className='max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-[#645550]'>.2025 Asad Ullah | All Right Reserved</p>
        </div>
    )
}

export default FooterMain;