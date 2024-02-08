import React from 'react';
import userData from '@constants/data';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 p-10 grid grid-cols-1 md:grid-cols-2">
        {userData.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
