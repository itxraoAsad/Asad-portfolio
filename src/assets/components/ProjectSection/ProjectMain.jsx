import React from 'react'
import ProjectSingle from './ProjectSingle'
import ProjectText from './ProjectText'



const Projects =[
   {
    name:'Online Store',
    year:'Mar 2025',
    image:'../../imgs/website-img-1.jpg', 
    align:'right'
   },
   {
    name:'Quiz App',
    year:'Apr 2025',
    image:'../../imgs/website-img-3.jpg', 
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