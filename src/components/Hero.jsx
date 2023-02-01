import React from "react";

const Hero = () => {
  return (
    <section className="hero grid-container">
      <div className="hero__content text-black">
        <h1 className="fs-heading--h1 extra-bold">
          Branding & website design agency
        </h1>
        <p className="fs--p">
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <a href="./" className="btn btn-red fs-btn-lg">
          Learn more
        </a>
      </div>
    </section>
  );
};

export default Hero;
