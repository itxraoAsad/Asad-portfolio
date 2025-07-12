import React from 'react';
import { DiHtml5 } from "react-icons/di";
import { FaJsSquare } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";


import SkillSingle from './SkillSingle';

const Skills = [
  { skill: 'HTML', icon: DiHtml5 },
  { skill: 'JavaScript', icon: FaJsSquare },
  { skill: 'CSS', icon: FaCss3Alt },
  { skill: 'React', icon: FaReact },
  { skill: 'Tailwind CSS', icon: RiTailwindCssFill },
  { skill: 'Bootstrap', icon: FaBootstrap }
];


const SkillAllSM = () => {
  return <div className='grid md:grid-cols-4 grid-cols-2 gap-12 my-12'>
    {Skills.map((skill, index)=>{
        return <div key={index} className='flex flex-col items-center'>
            <skill.icon className='text-7xl text-[#fb9718]'/>
            <p className='items-center mt-4'>{skill.skill}</p>
        </div>
    })}
  </div>
}

export default SkillAllSM