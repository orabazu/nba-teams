import React from 'react';
import {
  Route,
} from 'react-router-dom'

import './App.css';
import Landing from '../Landing/Landing';
import Navbar from '../Navbar/Navbar'

const App = () => {
  return (
    <div className="App">
      <div className="dotted" />
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={Landing} />
    </div>
  );
}

export default App;
