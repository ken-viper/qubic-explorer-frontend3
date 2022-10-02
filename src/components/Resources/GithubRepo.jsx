import React from "react";
import Card from "../Card/Card";
import categories from "../../data/categories.json";

const GithubRepo = ({ resources }) => {
  return (
    <>
      {!!resources?.length && (
        <div id="repo" className="category">
          {categories.map((category, index) => (
            <h2 key={index} className="category-title">
              {category.repos}
            </h2>
          ))}

          <div className="card-section">
            {resources.map((resource, index) => {
              const { coverImage, title, description, url } = resource;

              return (
                <Card
                  key={index}
                  coverImage={coverImage}
                  title={title}
                  description={description}
                  url={url}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default GithubRepo;
