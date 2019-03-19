import React from 'react';
import './Hero.css';

const Hero = (props) => {
  const { title, subtitle } = props;

  return (<section className="hero">
    <div className="hero-body inner-hero-body">
      <div className="columns">
        <div className="column">
          <h1 className="title hero-title">
            {title}
          </h1>
          <h2 className="subtitle">
            {subtitle}
          </h2>
        </div>
      </div>
    </div>
  </section>)
}
export default Hero;