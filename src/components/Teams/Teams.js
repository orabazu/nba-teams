import React, { Component } from 'react';

import { chunk } from '../../utils/common'
import TeamCard from '../TeamCard/TeamCard'
import Hero from '../Hero/Hero'
import tenor from '../../assets/tenor.gif'
import TeamContext from '../../context/TeamContext';

class Teams extends Component {

  constructor() {
    super()
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      teams: []
    }
  }
  
  renderTeams = (context) => {
    const { teams } = context;
    const rows = chunk(teams, 2);

    if (teams.length) {
      return (
        <React.Fragment>
          <Hero title="NBA Teams" subtitle="Click to fly on map" />
          <div className="">
            {
              rows.map((row) =>
                <div className="columns">
                  {
                    row.map(team => (
                      <TeamCard
                        team={team}
                        key={team.abbreviation}
                        flyToFn={context.flyToTeam} />
                    ))
                  }
                </div>
              )
            }
          </div>
        </React.Fragment>

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

  render() {
    return (
      <TeamContext.Consumer>
        {(context) => (
          this.renderTeams(context)
        )}
      </TeamContext.Consumer>
    )
  }
}

export default Teams;
