import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const services = () => {
  return (
    <section id="services">
      <h5>What I Offfer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h4>UI/UX Design</h4>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck />
              <p>Intuitive UI Design</p>
            </li>
            <li>
              <BiCheck />
              <p>Responsive UI</p>
            </li>
            <li>
              <BiCheck />
              <p>Creativity and Conceptualiation</p>
            </li>
            <li>
              <BiCheck />
              <p>User Friendly</p>
            </li>
            <li>
              <BiCheck />
              <p>Valuable and Dynamic User Experience</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service_head">
            <h4>Web Development</h4>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck />
              <p>Fewest loading time</p>
            </li>
            <li>
              <BiCheck />
              <p>Users and Devices Friendly </p>
            </li>
            <li>
              <BiCheck />
              <p>With Cross Browser Compatibility</p>
            </li>
            <li>
              <BiCheck />
              <p>Having Optimized Content and Optimized Search Engines </p>
            </li>
            <li>
              <BiCheck />
              <p>Excellent Web Host and Top Security</p>
            </li>
          </ul>
        </article>

        {/* END OF WEBDEVELOPMENT */}
        
        <article className="service">
          <div className="service_head">
            <h4>Cloud Computing and DevOps</h4>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck />
              <p>Speed and Security of Application</p>
            </li>
            <li>
              <BiCheck />
              <p>Improved Collaboration</p>
            </li>
            <li>
              <BiCheck />
              <p>Better Control Over Application Kifecycle </p>
            </li>
            <li>
              <BiCheck />
              <p>MicroServices</p>
            </li>
            <li>
              <BiCheck />
              <p>Automating Application Deployment</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;
