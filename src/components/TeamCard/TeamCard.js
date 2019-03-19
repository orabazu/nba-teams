import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom'

import "./TeamCard.css";
import {TEAM_LOGO_URL} from '../../utils/common'

class TeamCard extends Component {


  componentDidMount() {

  }

  render() {

    const { abbreviation, fullName, conference } = this.props;
    return (
      <div className="column is-half">

        <div className="card card-8bit">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={`${TEAM_LOGO_URL}${abbreviation}-min.jpg`} alt="" />
            </figure>
          </div>
          <div className="card-content team-card-content">
            <div className="media">
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
                <Link to={`/teams/${abbreviation}`} className="btn-8bit">Go </Link>
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default TeamCard;
