import React from 'react'

const SkillSingle = ({imgSvg, text}) => {
    if (!imgSvg || !text) return null;
  return (
    <div className='hover:-translate-y-10 transition-all duration-500 '>
        <div className='flex  items-center gap-4 relative'>
            <div className='bg-white text-cyan-400 h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-[#3f4441] hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-[#fb9718] '>{imgSvg}</div>
            <div className='w-[100px] h-[200px] bg-[#fb9718] absolute top-[50px] -z-10 text-white pl-4 pt-32 font-bold text-[1rem]' >{text}</div>
        </div>
    </div>
  )
}

export default SkillSingle;