import React from 'react';
import userData from '@constants/data';

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 p-10 grid grid-cols-1 md:grid-cols-2">
        {userData.projects.map((project, index) => (
          <ProjectCard projectID={index} />
        ))}
      </div>
    </section>
  );
}

const ProjectCard = ({ projectID }) => {
  const project = userData.projects[projectID];

  return (
    <div className="rounded flex flex-col justify-between transform hover:scale-105 transition duration-200 shadow-md my-4 mx-4">
      <img className="w-full shadow-sm" src={project.imgUrl}></img>
      <div className="px-6 py-4 justify-self-start">
        <div className="font-bold text-xl mb-2">{project.title}</div>
        <p className="text-gray-700 text-base">{project.description}</p>
      </div>
      <div className="grid grid-cols-2">
        <a
          href={project.gitHubUrl}
          className="bg-gray-200 hover:bg-gray-300 px-3 py-1 border border-gray-400 rounded-sm text-sm font-semibold text-gray-700 my-2 ml-3 mr-1"
        >
          GitHub
        </a>
        <a
          href={project.siteUrl}
          className="bg-gray-200 hover:bg-gray-300 px-3 py-1 border border-gray-400 rounded-sm text-sm font-semibold text-gray-700 my-2 ml-1 mr-3"
        >
          Live Site
        </a>
      </div>
    </div>
  );
};
