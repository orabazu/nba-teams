import React from 'react';
import shaq from '../../assets/shaq_v2.png'

const Hero = (props) => {
  const { title, subtitle } = props;

  return (<section className="hero padding-top-100">
    <div className="hero-body">
      <div className="container">
        <div className="columns">

          <div className="column is-1 is-gapless">
            <img src={shaq} className="logo" alt="" />
          </div>

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