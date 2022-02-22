import ProjectLink from "./ProjectLink";

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded flex flex-col justify-between shadow-md my-4 mx-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 p-8 bg-white/90 hover:bg-white transition shadow-sm justify-self-start z-10">
        <div className="font-bold text-xl mb-2">{project.title}</div>
        <p className="text-gray-700 text-base mb-8">{project.description}</p>
        <div className="flex">
          <ProjectLink
            className="mr-8"
            title={"Github"}
            url={project.gitHubUrl}
          />
          <ProjectLink title={"Live Site"} url={project.siteUrl} />
        </div>
      </div>
      <img className="w-full transition opacity-50" src={project.imgUrl} />
    </div>
  );
};

export default ProjectCard;
