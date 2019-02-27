import React, { Component } from 'react';
import axios from 'axios';
import {chunk,API_URL} from '../../utils/common'

import TeamCard from '../TeamCard/TeamCard'
import tenor from '../../assets/tenor.gif'

class Teams extends Component {

  constructor() {
    super()
    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    const url = `${API_URL}/api/teams`;
    axios.get(url)
      .then(response => {
        let teamsResponse = {};
        if (response.status === 200) {
          teamsResponse = JSON.parse(response.data.data)
        }

        this.setState({ teams: teamsResponse.data })
      })
  }

  render() {

    const { teams } = this.state;
    const rows = chunk(teams, 4);

    if (teams.length) {
      return (
        <div className="container">
          {
            rows.map((row) =>
              <div className="columns">
                {
                  row.map(team => (
                    <TeamCard
                      abbreviation={team.abbreviation}
                      conference={team.conference}
                      fullName={team.full_name}
                      key={team.abbreviation} />
                  ))
                }
              </div>
            )
          }
        </div>
      );
    }


    // Loading 
    return (
      <React.Fragment>
        <div className="center-children">
          <img src={tenor} alt="" />
        </div>
      </React.Fragment>
    )


  }
}

export default Teams;
