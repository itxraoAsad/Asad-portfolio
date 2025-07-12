import React from 'react'
import ExperienceText from './ExperienceText'
import ExperienceSection from './ExperienceSection'
import ExperienceImg from './ExperienceImg'
import ExperienceTopLeft from './ExperienceTopLeft'

const ExperienceMain = () => {
  return (
    <div>
        <div id='experience' className='max-w-[1200px] mx-auto px-4 py-10  '>
            <ExperienceText/>
           <div className='flex fle-col items-center justify-between max-[1100px]:flex-col max-[1100px]:gap-16'>
            <ExperienceTopLeft/>
            <ExperienceImg/>
            <ExperienceSection/>


           </div>


        </div>
            <div className='w-full h-1 bg-[#645550] lg:block hidden mb-4'></div>

    </div>
  )
}

export default ExperienceMain