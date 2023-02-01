import React from "react";

const About = () => {
  return (
    <div className="about grid-container">
      <img src="./" alt="" className="about__img" />
      <section className="about__content text-white spacer">
        <h2 className="fs-heading--h2 extra-bold">
          <span className="text-red">Design</span> is strategic.
        </h2>
        <p className="fs--p">
          A well-crafted design strategy consistently produces desired outcomes
          and brand awareness. We are firm believers that success lies in
          creative collaboration with our clients.
        </p>
        <a href="" className="btn btn-underline fs-btn-sm">
          Schedule a call
        </a>
      </section>
      <section className="about__list">
        <h3 className="fs-heading--h3 text-black extra-bold">
          Our approach for creating a winning brand
        </h3>
        <div className="about__list--items text-white">
          <div>
            <p className="fs-list-title extra-bold">Brand strategy</p>
            <p className="fs--p">
              Brand strategy is critical for long-term success. Outshining
              competitors and capturing the target audience are key.
            </p>
          </div>
          <div>
            <p className="fs-list-title extra-bold">Brand design</p>
            <p className="fs--p">
              Keeping the brand design unique and meaningful helps in
              communicating the brand’s timeless value effectively.
            </p>
          </div>
          <div>
            <p className="fs-list-title extra-bold">Web design</p>
            <p className="fs--p">
              A beautifully crafted website is the best tool for brand
              awareness, and ultimately results in increased revenues.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
