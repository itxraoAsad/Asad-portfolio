import React from 'react'
import SkillText from './SkillText'
import SkillAll from './SkillAll'
import SkillSingle from './SkillSingle'
import SkillAllSM from './SkillAllSM'


const SkillMain = () => {
    return (
        <div
        
        id='skills'>
            <div className='max-w-[1200px] px-4 mx-auto min-h-[600px] overflow-hidden relative'>
                
                    <SkillText />
                
                <div className='bottom-[80px] absolute left-[50%] -translate-x-1/2 lg:block hidden'>
                    <SkillAll />
                </div>
                <div className='lg:hidden sm:block'>
                    <SkillAllSM/>
                </div>
            </div>

        </div>
    )
}

export default SkillMain