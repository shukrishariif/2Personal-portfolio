import { Component } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
// import IMG4 from "../../assets/portfolio4.jpg";
// import IMG5 from "../../assets/portfolio5.png";
// import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/shukrishariif",
  },
  {
    id: 2,
    image: IMG2,
    title: "Managing income and outcome of the program  ",
    github: "https://github.com/shukrishariif",

  },
  {
    id: 3,
    image: IMG3,
    title: "Building Roadmap",
    github: "https://github.com/shukrishariif",

  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "Crypto Currency Dashboard & Financial Visualization",
  //   github: "https://github.com/inextdeve",
  //   demo: "https://inext.dev"
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Crypto Currency Dashboard & Financial Visualization",
  //   github: "https://github.com/inextdeve",
  //   demo: "https://inext.dev"
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "CryptCurrency Dashboard & Financial Visualization",
  //   github: "https://github.com/inextdeve",
  //   demo: "https://inext.dev"
  // }
];

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h2>My Projects</h2>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                   
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Portfolio;
