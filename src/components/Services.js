import React from "react";

export const Services = () => {
  return (
    <div className="page">
      <h1>Services page</h1>
      <section className="services">
        <article className="service">
          <h2>Web Development</h2>
          <p>
            Building responsive and modern websites using the latest
            technologies.
          </p>
        </article>

        <article className="service">
          <h2>UI/UX Design</h2>
          <p>
            Creating intuitive and engaging user interfaces for web and mobile
            applications.
          </p>
        </article>

        <article className="service">
          <h2>Consulting</h2>
          <p>
            Providing expert advice on web development and design strategies.
          </p>
        </article>
      </section>
    </div>
  );
};
