import React from "react";

const Portfolio = ({ image, title }) => {
  return (
    <div className="portfolio">
      <div className="portfolio__show">
        <img src={image} alt="image" />
      </div>
      <p className="portfolio__footer">{title}</p>
    </div>
  );
};

export default Portfolio;
