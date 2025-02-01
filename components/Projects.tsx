import ProjectList from "./ProjectList";
import ProductTaps from "./ui/tabs";

const Projects = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-20">
      <div>
        <ProductTaps />
      </div>
      <div className="flex-1">
        <ProjectList />
      </div>
    </div>
  );
};

export default Projects;
