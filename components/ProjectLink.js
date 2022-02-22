const ProjectLink = ({ title, url, className }) => (
  <a
    href={url}
    target="_blank"
    className={
      className +
      " bg-gray-200 border-2 border-gray-600 hover:border-indigo-500 rounded-sm text-sm font-semibold text-gray-600 hover:text-indigo-500 transition w-36 py-2 px-4 flex justify-between items-center transform hover:scale-105 group"
    }
  >
    <span>{title}</span>
    <span className="transform transition group-hover:translate-x-1 text-lg">
      →
    </span>
  </a>
);

export default ProjectLink;
