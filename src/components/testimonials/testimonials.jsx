import React from "react";
import "./testimonials.css";
import AVTRI from "../../assets/drive/assets/avatar1.jpg";
import AVTRI2 from "../../assets/drive/assets/avatar2.jpg";
import AVTRI3 from "../../assets/drive/assets/avatar3.jpg";
import AVTRI4 from "../../assets/drive/assets/avatar4.jpg";

const testimonials = () => {
  return (
    <section id="testmonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTRI} alt="" />
          </div>
            <h5 className="client_name">Lorem, ipsum.</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              numquam impedit laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis autem, iste quidem praesentium cumque molestias nam cupiditate architecto maiores odit temporibus!
            </small>
        </article>

        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTRI2} alt="" />
          </div>
            <h5 className="client_name">Lorem, ipsum.</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              numquam impedit laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis autem, iste quidem praesentium cumque molestias nam cupiditate architecto maiores odit temporibus!
            </small>
        </article>

        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTRI3} alt="" />
          </div>
            <h5 className="client_name">Lorem, ipsum.</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              numquam impedit laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis autem, iste quidem praesentium cumque molestias nam cupiditate architecto maiores odit temporibus!
            </small>
        </article>

        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTRI4} alt="" />
          </div>
            <h5 className="client_name">Lorem, ipsum.</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              numquam impedit laudantium?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, natus, ea ipsa ab quidem blanditiis, itaque maiores eius excepturi aliquid laboriosam? Neque?
            </small>
        </article>
      </div>
    </section>
  );
};

export default testimonials;
