import React from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";

const PortfolioItem = ({ src, name, desc, codeLink, demoLink, tags }) => {
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
            {tags && (
              <div className="flex justify-start items-center space-x-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm text-gray-500 font-base italic"
                  >{`#${tag}`}</span>
                ))}
              </div>
            )}
            <h1 className="text-gray-700 text-lg font-medium">{name}</h1>
            {desc && <p className="text-sm text-gray-500">{desc}</p>}
            {(codeLink || demoLink) && (
              <div className="grid grid-cols-2 gap-2">
                <Button link={demoLink} primary={true}>
                  Demo
                </Button>
                <Button link={codeLink}>Code</Button>
              </div>
            )}
          </div>
        </div>
      </Card>
    </li>
  );
};

export default PortfolioItem;
