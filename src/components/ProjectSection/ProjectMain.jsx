import React from 'react'
import ProjectSingle from './ProjectSingle'
import ProjectText from './ProjectText'

import image1 from '../../../public/imgs/website-img-4.jpg'
import image2 from '../../../public/imgs/website-img-3.jpg'


const Projects =[
   {
    name:'Online Store',
    year:'Mar 2025',
    image:image1, 
    align:'right'
   },
   {
    name:'Quiz App',
    year:'Apr 2025',
    image:image2, 
    align:'right'
   }
]
const ProjectMain = () => {
  return (
    <div id='projects'>
      <ProjectText />

      <div>
        {Projects.map((project, index) => (
          <ProjectSingle
            key={index}
            name={project.name}
            year={project.year}
            image={project.image} 
            align={project.align}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectMain