import React, { Component } from 'react';
import "./TeamCard.css";

class TeamCard extends Component {


  componentDidMount() {

  }

  render() {

    const { abbreviation, fullName, conference } = this.props;
    return (
      <div className="column is-3">

        <div className="card card-8bit">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={`logo/${abbreviation}-MIN.jpg`} alt="" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={`logo/${abbreviation}-MIN.jpg`} alt="" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-6">{fullName}</p>
                <p className="subtitle is-8">{abbreviation}</p>
              </div>
            </div>

            <div className="content">
              <p>
                Conference:{conference}
              </p>

              <br />
              <p>
                <a className="btn-8bit" href="/">Go</a>
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default TeamCard;
