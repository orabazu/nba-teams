import React, { Component } from 'react';
import "./TeamCard.css";

class TeamCard extends Component {

  constructor() {
    super()
    // this.state = {
    //   full_name: this.props.full_name,
    //   abbreviation: this.props.abbreviation,
    //   conference: this.props.conference,
    // }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="column is-3">

        <div class="card card-8bit">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src={"logo/" + this.props.abbreviation + "-MIN.jpg"} alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src={"logo/" + this.props.abbreviation + "-MIN.jpg"} alt="Placeholder image" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-6">{this.props.full_name}</p>
                <p class="subtitle is-8">{this.props.abbreviation}</p>
              </div>
            </div>

            <div class="content">
            <p>
            Conference:{this.props.conference}
            </p>
          
                <br></br>
                <p>
                  <a className="btn-8bit">Go</a>
                </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default TeamCard;
