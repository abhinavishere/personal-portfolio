import React from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";

const projectsData = [
  {
    name: "Expense Tracker",
    src: "./expense-thumb.png",
    tags: ["React", "JavaScript", "Responsive"],
  },
  {
    name: "Food Cravings",
    src: "./food-thumb.png",
    tags: ["React", "JavaScript", "Responsive"],
  },
  {
    name: "Tesla Clone",
    src: "./tesla-thumb.png",
    tags: ["React", "JavaScript", "Responsive"],
  },
];

const ProjectItem = ({ src, tags, name }) => {
  return (
    <li>
      <Card>
        <div className="space-y-4">
          <div className="h-52 w-full rounded-md overflow-hidden">
            <img
              className="h-full w-full hover:scale-125 object-cover object-center"
              src={src}
              alt="Project thumbnail"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex justify-start items-center space-x-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm text-gray-500 font-base italic"
                >{`#${tag}`}</span>
              ))}
            </div>
            <h1 className="text-gray-700 text-lg font-medium">{name}</h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              facilisis sed tortor eget ultrices. Vestibulum accumsan vestibulum
              quam ut posuere. In lacinia metus id quam consequat maximus. Cras
              eget viverra dolor.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Button primary={true}>Demo</Button>
              <Button>Code</Button>
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
};

const Projects = () => {
  return (
    <div>
      <Card>
        <h1 className="font-medium text-lg">Projects (3)</h1>
      </Card>
      <ul className="md:grid grid-cols-3">
        {projectsData.map((item, index) => (
          <ProjectItem
            key={index}
            src={item.src}
            tags={item.tags}
            name={item.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
