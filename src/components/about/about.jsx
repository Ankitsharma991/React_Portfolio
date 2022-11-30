import React from "react";
import "./about.css";
import ME1 from "../../assets/bgRemoved/me1.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME1} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>2+ Worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects(mini)</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            My name is Ankit Kumar Sharma. I am II<sup>nd</sup> year Computer
            Science and Engineering student at Amrita School of Engineering,
            Amritapuri. Currently i'm learning <b>FullStack Web Development</b>{" "}
            and doing some basics projects
          </p>
          <a href="#contact" className="btn letTalk btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
