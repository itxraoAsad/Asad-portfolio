import React from 'react'
import { LuArrowDownRight } from "react-icons/lu"

const NavbarBtn = () => {
  return (
    <div>
      <button className="px-4 py-2 max-[400px]:hidden rounded-full text-xl border-cyan-500 flex items-center border gap-1 font-bold bg-gradient-to-r from-cyan-500 to-orange-400 hover:scale-110 cursor-pointer transition-all duration-500 ease-in-out hover:border-orange-400 hover:shadow-cyan-glow">
        Hire me
        <div className='max-sm:hidden '>
          <LuArrowDownRight />
        </div>
      </button>
    </div>
  )
}

export default NavbarBtn;
