/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Cover Design.png";

const imageAltText = "Showcasing the Portfolio item of section";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Little Lemon: Reservation Table For Restaurant",
    description:
      "Indulge in Lemonicious Delights with Little Lemon’s Mobile App! Your gateway to a world of flavors, reservations, menus, and updates.",
    url: "https://medium.com/@ossamamehmood/little-lemon-reservation-table-for-restaurant-b0e145e08c56",
  },
  {
    title: "Behamce | Graphoc Design",
    description:
      "Senior Graphic Designer | Brand Identity Strategist | Visual Designer",
    url: "https://www.behance.net/ossamamehmood",
  },
  {
    title: "Dribbble | UI/UX Design",
    description:
      "UI / Visual Design, Product Design, UX Design / Research",
    url: "https://dribbble.com/ossamamehmood",
  },
  {
    title: "Abput Me",
    description:
      "Greetings, I'm Ossama Mehmood, Senior Graphic Designer and UI/UX Designer. Sole proprietorship & Founder at Minimsam & Top Rated Designer at Upwork!",
    url: "https://ossamamehmood.github.io",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
