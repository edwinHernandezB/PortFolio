import React from "react";
import { works } from "../data/works";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio page</h1>
        <section className="works">
      {works.map((work, index) => {
        return (        
        <article key={index} className="work-item">
            <div className="mask">
                <img src={`/images/imagen${index}.jpg`} />
            </div>
            <h2><Link to={`/project/${work.name}`}>{work.name}</Link></h2>
            <h3>{work.technologies}</h3>
            <span>{work.category}</span>
        </article>)
      })}
      </section>
    </div>
  );
};
