import React, { Component } from 'react';

import "./TeamCard.css";
import { TEAM_LOGO_URL } from '../../utils/common'

class TeamCard extends Component {


  componentDidMount() {

  }

  render() {

    const { flyToFn, team } = this.props;
    return (
      <div className="column is-half">

        <div className="card card-8bit">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={`${TEAM_LOGO_URL}${team.abbreviation}-min.jpg`} alt="" />
            </figure>
          </div>
          <div className="card-content team-card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-6">{team.full_name}</p>
                <p className="subtitle is-8">{team.abbreviation}</p>
              </div>
            </div>

            <div className="content">
              <p className="font-press-start">
                CONF: {team.conference}
              </p>

              <br />
              <p>
                <button type="button" className="btn-8bit"
                  onClick={() => flyToFn(team)}>Go </button>
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default TeamCard;
