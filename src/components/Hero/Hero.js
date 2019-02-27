import React from 'react';


const Hero = (props) => {
  const { title, subtitle } = props;

  return (<section className="hero padding-top-50">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title">
              {title}
            </h1>
            <h2 className="subtitle">
              {subtitle}
            </h2>
          </div>

        </div>

      </div>
    </div>
  </section>)
}
export default Hero;