import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  constructor() {
    super()
    this.state = {
      teams: []
    }
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
    return (
      <div className="App">
        <h1>Nba app</h1>
        <div class="container">
          <div className="columns">
            {
              this.state.teams.map((team,index) => {
                console.log(team);

                  return (
                    <div className="column is-3">
                      <div class="box">
                        <article class="media">
                          <div class="media-left">
                            <figure class="image is-64x64">
                              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                            </figure>
                          </div>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>{team.full_name}</strong> <small>{team.abbreviation}</small> <small>{team.conference}</small>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                        </p>
                            </div>
                            <div class="level-left">
                              <a class="level-item" aria-label="reply">
                                <span class="icon is-small">
                                  <i class="fas fa-reply" aria-hidden="true"></i>
                                </span>
                              </a>
                              <a class="level-item" aria-label="retweet">
                                <span class="icon is-small">
                                  <i class="fas fa-retweet" aria-hidden="true"></i>
                                </span>
                              </a>
                              <a class="level-item" aria-label="like">
                                <span class="icon is-small">
                                  <i class="fas fa-heart" aria-hidden="true"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>

                    </div>
                  )

              })
            }

          </div>

        </div>
      </div>
    );
  }
}

export default App;
