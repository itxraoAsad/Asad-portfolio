import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'

const HeroMian = () => {
  return (
    <div className="pt-40 pb-16">
    
    <div className='flex flex-col md:flex-row items-center justify-between '>
      <HeroText />
      <HeroPic />

    </div>
    </div>
    
  )
}

export default HeroMian