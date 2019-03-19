import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom'
import {TEAM_LOGO_URL} from '../../utils/common'

class PlayerCard extends Component {


  componentDidMount() {

  }

  render() {

    const { firstName, lastName, position, team, imgSrc } = this.props;
    return (
      <div className="column is-3">

        <div className="card card-8bit">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={imgSrc} alt="" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={`${TEAM_LOGO_URL}${team.abbreviation}-min.jpg`} alt="" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-6">{firstName}</p>
                <p className="subtitle is-8">{lastName}</p>
                <p>Pos: {position}</p>
              </div>
            </div>

            {/* <div className="content">
              <br />
              <p>
                <Link to={`/teams/${team.abbreviation}`} className="btn-8bit">Go</Link>
              </p>
            </div> */}
          </div>
        </div>

      </div>
    );
  }
}

export default PlayerCard;
