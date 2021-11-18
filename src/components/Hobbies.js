import React from "react";
import Card from "./UI/Card";
import { hobbies } from "../data.json";
import PortfolioItem from "./PortfolioItem";

const Hobbies = () => {
  return (
    <div className="md:max-w-4xl mx-auto">
      <Card>
        <h1 className="font-medium text-lg">Hobbies</h1>
      </Card>
      <ul className="md:grid grid-cols-3">
        {hobbies.map((item, index) => (
          <PortfolioItem key={index} src={item.img} name={item.name} />
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
