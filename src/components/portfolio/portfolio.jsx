import React from "react";
import "./portfolio.css";
import IMG1 from "./bgRemoved/5+.png";
import IMG2 from "./bgRemoved/c++.png";
import IMG3 from "./bgRemoved/leetcode.png";
import IMG4 from "./bgRemoved/codechef.png";
import IMG5 from "./bgRemoved/codeforces.png";
import IMG6 from "./bgRemoved/opn.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Web Projects",
    github: "https://github.com/Ankitsharma991",
    demo: "https://github.com/Ankitsharma991",
  },

  {
    id: 2,
    image: IMG2,
    title: "OOPs and loop based Projects",
    github: "https://github.com/Ankitsharma991",
    demo: "https://github.com/Ankitsharma991",
  },
  {
    id: 3,
    image: IMG3,
    title: "Leetcode Handle",
    github: "https://github.com/Ankitsharma991",
    demo: "https://github.com/Ankitsharma991",
  },
  {
    id: 4,
    image: IMG4,
    title: "CodeChef rating and standings",
    github: "https://github.com/Ankitsharma991",
    demo: "https://github.com/Ankitsharma991",
  },
  {
    id: 5,
    image: IMG5,
    title: "Codeforces Details",
    github: "https://github.com/Ankitsharma991",
    demo: "https://github.com/Ankitsharma991",
  },
  {
    id: 6,
    image: IMG6,
    title: "Open Source Contribution",
    github: "https://github.com/Ankitsharma991",
    demo: "https://github.com/Ankitsharma991",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <div className="add">
                <p>
                  {/* Total of 5+ number of projects on
                  <br />
                  Web Development */}
                  {title}
                </p>
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}

        {/* <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="Projects" />
          </div>
          <div className="add">
          <p>Total of 5+ number of projects on<br />Web Development</p>
          <a href="https://github.com/Ankitsharma991" className="btn">
            Github
          </a>
          <a
            href="https://linkedin.com/Ankitsharma"
            className="btn btn-primary"
            target="blank"
          >
            Live Demo
          </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="Projects" />
          </div>
          <div className="add">
          <p>Total of 3-4 projecst in C++ <br /> using OOPs and Loops concept</p>
          <a href="https://github.com/Ankitsharma991" className="btn">
            Github
          </a>
          <a
            href="https://linkedin.com/Ankitsharma"
            className="btn btn-primary"
            target="blank"
          >
            Live Demo
          </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="Projects" />
          </div>
          <div className="add">
          <p>Currently 1★ on CodeChef <br />and in Division 3</p>
          <a href="https://github.com/Ankitsharma991" className="btn">
            Github
          </a>
          <a
            href="https://linkedin.com/Ankitsharma"
            className="btn btn-primary"
            target="blank"
            >
            Live Demo
          </a>
              </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="Projects" />
          </div>
          <div className="add">
          <p>40+ Problems on CodeForces</p>
          <a href="https://github.com/Ankitsharma991" className="btn">
            Github
          </a>
          <a
            href="https://linkedin.com/Ankitsharma"
            className="btn btn-primary"
            target="blank"
          >
            Live Demo
          </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="Projects" />
          </div>
          <div className="add">
          <p>Learning Open <br /> Source Contribution</p>
          <a href="https://github.com/Ankitsharma991" className="btn">
            Github
          </a>
          <a
            href="https://linkedin.com/Ankitsharma"
            className="btn btn-primary"
            target="blank"
          >
            Live Demo
          </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="Projects" />
          </div>
          <div className="add">
          <p>Around 10 problems <br /> Solved on Leetcode</p>
          <a href="https://github.com/Ankitsharma991" className="btn">
            Github
          </a>
          <a
            href="https://linkedin.com/Ankitsharma"
            className="btn btn-primary"
            target="blank"
          >
            Live Demo
          </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default portfolio;
