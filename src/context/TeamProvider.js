import React, { Component } from "react";
import axios from 'axios';

import TeamContext from "./TeamContext";
import { API_URL } from '../utils/common';

export default class TeamProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      selectedCoords: [],
      flyToTeam: this.flyToTeam,
    };
  }

  componentDidMount() {
    const url = `${API_URL}/api/teams`;
    axios.get(url)
      .then(response => {
        let teamsResponse = {};
        if (response.status === 200) {
          teamsResponse = response.data.data;
        }
        this.setState({ teams: teamsResponse.teams })
      })
  }

  flyToTeam = (team) => {
    if (team.location && team.location.length) {
      this.setState({
        selectedCoords: team.location
      })
    }
  }
  


  render() {
    return (
      <TeamContext.Provider value={this.state}>
        {this.props.children}
      </TeamContext.Provider>
    );
  }
}