import React, { Component } from 'react';
import axios from 'axios';
import {chunk,API_URL,TEAM_LOGO_URL} from '../../utils/common'


import tenor from '../../assets/tenor.gif'

class Games extends Component {

  constructor() {
    super()
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    const url = `${API_URL}/api/games`;
    axios.get(url) 
      .then(response => {
        let gamesResponse = {};
        if (response.status === 200) {
          // comment here!
          gamesResponse = JSON.parse(response.data.data) 
        }

        this.setState({ games: gamesResponse.data })
      })
  }


  render() {

    const { games } = this.state;
    const rows = chunk(games, 2);

    if (games.length) {
      return (
        <div className="container padding-top-100">
          {
            rows.map((row) =>
              <div className="columns">
                {
                  row.map(game => (
                    <React.Fragment>
                      <div className="column">
                        <div className="card">
                          <div className="card-content">

                            <div className="media">
                              <div className="media-left">
                                <figure className="image is-24x24">
                                  <img src={`${TEAM_LOGO_URL}${game.home_team.abbreviation}-min.jpg`} alt="" />
                                </figure>
                              </div>
                              <div className="media-content">
                                <p className="title is-6"> {game.home_team.full_name} - {game.home_team_score}</p>
                              </div>
                            </div>

                            <div className="media">
                              <div className="media-left">
                                <figure className="image is-24x24">
                                  <img src={`${TEAM_LOGO_URL}${game.visitor_team.abbreviation}-min.jpg`} alt="" />
                                </figure>
                              </div>
                              <div className="media-content">

                                <p className="title is-6"> {game.visitor_team.full_name} - {game.visitor_team_score}</p>
                                <nav className="level is-mobile">
                                  <div className="level-left">
                                    <small>{new Date(game.date).toLocaleDateString("tr-TR")} - {game.status}</small>
                                  </div>
                                </nav>
                              </div>
                            </div>

                          </div>
                        </div>


                      </div>

                    </React.Fragment>
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

export default Games;
