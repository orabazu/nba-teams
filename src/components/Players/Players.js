import React, { Component } from 'react';
import axios from 'axios';

import PlayerCard from '../PlayerCard/PlayerCard'
import tenor from '../../assets/tenor.gif'
import Hero from '../Hero/Hero';
import {chunk} from '../../utils/common'

class Players extends Component {

  constructor() {
    super()
    this.state = {
      players: [],
      page: 2,
      isLoading: false
    }
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_API_URL}/api/players`;
    this.loadPlayers(url);
  }


  loadMore = () => {
    let { page } = this.state;
    page += 1;
    this.setState({ page })
    const url = `${process.env.REACT_APP_API_URL}/api/players?page=${page}`;
    this.loadPlayers(url);

  }

  loadPlayers = (url) => {
    let { isLoading } = this.state;
    const { players } = this.state;
    isLoading = true;
    this.setState({ isLoading })
    axios.get(url)
      .then(response => {
        let playersResponse = {};
        if (response.status === 200) {
          playersResponse = JSON.parse(response.data.data)
        }
        isLoading = false;
        playersResponse = [...players, ...playersResponse,]
        this.setState({ players: playersResponse, isLoading })
      })
  }

  render() {

    const { players, isLoading } = this.state;
    const rows = chunk(players, 4);

    if (players.length) {
      return (
        <div className="container">
          <Hero title="NBA players" subtitle="Chaoticaly ordered basketball monsters, press load more to see more" />
          {
            rows.map((row) =>
              <div className="columns">
                {
                  row.map(player => (
                    <PlayerCard
                      firstName={player.first_name}
                      lastName={player.last_name}
                      position={player.position}
                      imgSrc={player.img_src}
                      team={player.team} />
                  ))
                }
              </div>
            )
          }
          <div className="column is-4 is-offset-4 padding-vertical-50">
            <p className="has-text-centered">
              <button type="button"
                className={
                  isLoading ? 'button btn-8bit is-centered  is-loading' : 'button btn-8bit is-centered'
                }
                onClick={this.loadMore}> Load more </button>
            </p>
          </div>

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

export default Players;
