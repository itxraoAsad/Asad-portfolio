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

const SkillAll = () => {
  return (
    <div>
      <div
      
      
      className="flex items-center justify-center gap-2 max-w-[1200px] mx-auto">
        {Skills.map((skill, index) => (

         
          <SkillSingle
            key={index}
            imgSvg={<skill.icon />}
            text={skill.skill}
          />








        ))}
      </div>
    </div>
  );
};
export default SkillAll;