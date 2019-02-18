import React, { Component } from 'react';
import './App.css';
import TeamCard from './../TeamCard/TeamCard'
import axios from 'axios'
import shaq from './../../assets/shaq_v2.png'
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


          <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="">
                <img src={tenor} className="logo" />
                HOOPRZ
                </a>

              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          </nav>




          <section class="hero padding-top-100">
            <div class="hero-body">
              <div class="container">
                <div className="columns">

                  <div className="column is-1 is-gapless">
                    <img src={shaq} className="logo"></img>
                  </div>

                  <div className="column">
                    <h1 class="title">
                      NBA TEAMS
                  </h1>
                    <h2 class="subtitle">

                      Click on a team for detail
                  </h2>
                  </div>

                </div>

              </div>
            </div>
          </section>


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



          <footer class="footer">
            <div class="content has-text-centered">
              <p>
                Powered by <a href="https://bulma.io"><strong>Bulma</strong> by Orhun </a>. The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content
              is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
            </div>
          </footer>





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
