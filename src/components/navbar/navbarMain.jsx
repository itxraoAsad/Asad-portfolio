import React from 'react';
import NavbarLogo from './navbarlogo';
import Navbarlinks from './navbarlinks';
import NavbarBtn from './navbarbtn';
import { GiHamburgerMenu } from "react-icons/gi";
import clsx from 'clsx';

import { useState } from 'react';

const NavbarMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);

    };



    return (
        <nav className='mx-w-[1300px] mx-auto px-4
        w-full fixed left-[0px]  -translate-x-50% z-20 flex gap-4 mt-6 max-[600px]:h-[70px]'>
            <div className='flex items-center justify-between w-full mx-w-[1200px] mx-auto bg-black p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange-400'>
                <NavbarLogo />
                   <div className={` ${menuOpen ? 'block' : 'hidden'} sm-[670px]:block lg:block    `}>       
                    <Navbarlinks />

                </div>

                <NavbarBtn />
            </div>

            <div className='flex lg:hidden sm:block p-6 max-[600px]:p-4 bg-black rounded-full border-[0.5px] border-amber-400 max-[600px]:size-20 max-[600px]:mt-[-7px] max-[600px]:justify-center' >
                <button className='text-2xl border border-amber-400 p-2  rounded-full text-white cursor-pointer max-[600px]:size-11 max-[600px]:items-center'
                 onClick={toggleMenu}>
                <GiHamburgerMenu />

                </button>
                </div>



        </nav>
    )
}

export default NavbarMain;