import Card from "./UI/Card";
import React from "react";

const skillsData = [
  {
    name: "React",
    level: 60,
  },
  {
    name: "HTML",
    level: 90,
  },
  {
    name: "CSS",
    level: 90,
  },
  {
    name: "JavaScript",
    level: 70,
  },
  {
    name: "Python",
    level: 60,
  },
  {
    name: "SQL",
    level: 50,
  },
];

const SkillItem = ({ name, level }) => {
  return (
    <li>
      <div className="flex space-x-3 items-center justify-between">
        <span className="flex-grow text-gray-700">{name}</span>
        <div className="bg-gray-300 w-40  h-3 rounded-xl overflow-hidden">
          <div
            style={{ width: `${level}%` }}
            className="bg-accent h-full rounded-xl"
          ></div>
        </div>
      </div>
    </li>
  );
};
const Skills = () => {
  return (
    <Card>
      <h1 className="font-medium text-lg mb-4">Front-end Skills</h1>
      <ul>
        {skillsData.map((skill, index) => (
          <SkillItem key={index} name={skill.name} level={skill.level} />
        ))}
      </ul>
    </Card>
  );
};

export default Skills;
