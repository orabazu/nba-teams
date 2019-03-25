import React from 'react';

import Teams from '../Teams/Teams';
import Map from '../Map/Map';
import TeamProvider from '../../context/TeamProvider';

import './Landing.css';
import TeamContext from '../../context/TeamContext';


const Landing = () => {
  return (
    <TeamProvider>
      <TeamContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div>
              <Map teams={context.teams} selectedCoords={context.selectedCoords}/>
            </div>
            <div className="side-menu">
              <Teams />
            </div>

          </React.Fragment>
        )}
      </TeamContext.Consumer>
    </TeamProvider>
  )
}
export default Landing;