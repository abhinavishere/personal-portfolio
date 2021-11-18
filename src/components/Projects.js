import React from "react";
import Card from "./UI/Card";
// import ProjectItem from "./ProjectItem";
import { projects } from "../data.json";
import PortfolioItem from "./PortfolioItem";

const Projects = () => {
  return (
    <div className="md:max-w-4xl mx-auto">
      <Card>
        <h1 className="font-medium text-lg">
          Projects ({Number(projects.length)})
        </h1>
      </Card>
      <ul className="md:grid grid-cols-3">
        {projects.map((item, index) => (
          <PortfolioItem
            key={index}
            src={item.projectThumbnail}
            tags={item.projectTags}
            name={item.projectName}
            desc={item.description}
            codeLink={item.projectCodeLink}
            demoLink={item.projectDemoLink}
          />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
