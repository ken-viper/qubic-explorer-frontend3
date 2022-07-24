import React from "react";
import Card from "../Card/Card";
import { websites } from "../../data/websites";
import categories from "../../data/categories.json";

const Website = () => {
  return (
    <div className="category">
      <h2 className="category-title">
        {categories.map((category) => category.websites)}
      </h2>

      <div className="card-section">
        {websites.map((resource, index) => {
          return (
            <Card
              key={index}
              coverImage={resource.coverImage}
              title={resource.title}
              description={resource.description}
              url={resource.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Website;
