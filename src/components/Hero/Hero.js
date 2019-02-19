import React from 'react';
import shaq from './../../assets/shaq_v2.png'

const Hero = (props) => {
    return (<section class="hero padding-top-100">
        <div class="hero-body">
            <div class="container">
                <div className="columns">

                    <div className="column is-1 is-gapless">
                        <img src={shaq} className="logo"></img>
                    </div>

                    <div className="column">
                        <h1 class="title">
                            {props.title}
                        </h1>
                        <h2 class="subtitle">
                           {props.subtitle}
                        </h2>
                    </div>

                </div>

            </div>
        </div>
    </section>)
}
export default Hero;