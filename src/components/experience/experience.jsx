import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container container_experience">
        {/* FrontEnd */}
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experinece_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <h4>HTML</h4>
              <small className="text-light">Intermediate</small>
            </article>
                         <article className="experinece_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
                         <article className="experinece_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </article>
                         <article className="experinece_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
            </article>
                         <article className="experinece_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
            </article>
                         <article className="experinece_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <h4>Tailwind</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        {/* BACKEND */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experinece_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <h4>Node Js</h4>
              <small className="text-light">Begineer</small>
            </article>
            <article className="experinece_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <h4>Mongo DB</h4>
              <small className="text-light">Begineer</small>
            </article>
            <article className="experinece_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <h4>MySql</h4>
              <small className="text-light">begineer</small>
            </article>
                        <article className="experinece_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <h4>Fire Base</h4>
              <small className="text-light">begineer</small>
            </article>
          </div>
        </div>
        {/* END OF BACKEND */}

        {/* PROGRAMMING LANGUAGES */}
        <div className="experience_programming">
          <h3>Programming Language</h3>
          <div className="experience_content">
            <article className="experinece_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <h4>C++</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experinece_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experinece_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <h4>C</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experinece_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>

        {/* OTHERS KNOWLEDGE */}
        <div className="others">
          <h3>Other Skills</h3>
          <div className="experience_content">
            <article className="experinece_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <h4>Flutter</h4>
              <small className="text-light">Begineer</small>
            </article>
            <article className="experinece_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <h4>Figma</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experinece_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <h4>WordPress</h4>
              <small className="text-light">Begineer</small>
            </article>
            <article className="experinece_details">
              <BsPatchCheckFill className="experience_details-icons"/>
              <h4>OOPs</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
