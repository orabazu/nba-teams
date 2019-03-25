import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import TeamContext from '../../context/TeamContext';

import { TEAM_LOGO_URL } from '../../utils/common'

mapboxgl.accessToken = 'pk.eyJ1Ijoib3plcm9yaHVuIiwiYSI6ImNqYmF4NHh2dTEwbTAycHAzbnd4azhwcGEifQ.LsST6QrnJ0XEar6wgnnfSg';

class Map extends Component {

  constructor() {
    super()
    this.state = {
      markers: []
    }

    // map object to share
    this.map = {};
  }


  componentDidMount() {
    const { teams } = this.props;
    this.initMap(teams);
  }

  // TODO: change this method
  componentWillReceiveProps(nextProp) {
    const { teams } = this.props;
    if (teams.length === nextProp.teams.length) {
      this.drawMarkers(nextProp.teams);
    }
  }

  componentDidUpdate(prevProps) {
    const { teams } = this.props;
    if (teams.length !== prevProps.teams.length) {
      this.drawMarkers(teams);
    }
    const { selectedCoords } = this.props;
    if (selectedCoords[0] !== prevProps.selectedCoords[0]) {
      this.flyToJob(selectedCoords)
    }
  }

  flyToJob(coords) {
    this.map.flyTo({
      center: [coords[1], coords[0]],
      zoom: 11
    });
  }

  initMap(teams) {

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/ozerorhun/cjtgaw1z9533w1flx27dmc595',
      center: [-101.92426, 40.70048],
      zoom: 3,
      pitch: 50,
      bearing: 27
    });

    this.drawMarkers(teams);

  }

  drawMarkers(teams) {
    const markers = [];
    const cleanMarkers = () => {
      let { markers } = this.state;
      markers.forEach(marker => marker.remove())
      markers = [];
    }
    const addMarker = (team) => {
      // create DOM element for the marker

      if (team.location) {

        const el = document.createElement('div');
        el.className = 'marker';
        el.style.background = `url(${TEAM_LOGO_URL}${team.abbreviation}-min.jpg)`;
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.background = `url(${TEAM_LOGO_URL}${team.abbreviation}-min.jpg)`;
        el.style.width = '32px';
        el.style.height = '32px';
        el.style.backgroundSize = '32px 32px';
        el.style.backgroundRepeat = 'no-repeat';

        //  const popup = new mapboxgl.Popup({ offset: 25 })
        //  .setText(`asdsds`);

        try {
          const marker = new mapboxgl.Marker(el)
            .setLngLat([team.location[1], team.location[0]])
            // .setPopup(popup)
            .addTo(this.map);
          markers.push(marker);
        } catch (error) {
          console.log(error);
        }

      }
    }

    cleanMarkers();

    teams.forEach((team, i) => {
      addMarker(team, i);
    })

    this.map.resize();
    this.setState({ markers })
  }
  render() {
    return (
      <TeamContext.Consumer>
        {(context) => (
          <div ref={el => { this.mapContainer = el }} className="map-container" />
        )}
      </TeamContext.Consumer >
    )
  }

}
export default Map;