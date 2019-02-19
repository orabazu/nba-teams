import React, { Component } from 'react';
import axios from 'axios'

import './App.css';
import Navbar from './../Navbar/Navbar'
import TeamCard from './../TeamCard/TeamCard'
import Hero from './../Hero/Hero'
import Footer from './../Footer/Footer'

import tenor from './../../assets/tenor.gif'

class App extends Component {

  constructor() {
    super()
    this.state = {
      teams: []
    }
  }


  chunk = (arr, len) => {

    var chunks = [],
      i = 0,
      n = arr.length;

    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }

    return chunks;
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/teams')
      .then(response => {
        let teamsResponse = {};
        if (response.status === 200) {
          teamsResponse = JSON.parse(response.data.data)
        }

        this.setState({ teams: teamsResponse.data })

      })

  }

  render() {

    const rows = this.chunk(this.state.teams, 4);

    if (this.state.teams.length) {
      return (
        <div className="App">
          <div className="dotted"></div>

          <Navbar/>

          <Hero title="NBA Teams" subtitle="Click to see details"/>

          <div class="container">
            {
              rows.map((row) =>
                <div className="columns">
                  {
                    row.map((team, index) => (
                      <TeamCard
                        abbreviation={team.abbreviation}
                        conference={team.conference}
                        full_name={team.full_name}
                        key={index} />
                    ))
                  }
                </div>
              )
            }
          </div>

          <Footer/>
        </div>
      );
    }

    else {
      return (
        <React.Fragment>
          <div className="center-children">
            <img src={tenor}></img>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default App;
