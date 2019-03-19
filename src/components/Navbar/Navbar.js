import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom'

import tenor from "../../assets/tenor.gif"

class Navbar extends Component {

  constructor() {
    super()
    this.state = {
      navbarToggleClass: 'navbar-menu',
      isNavbarOpen: false,
    }
  }

  toggleMenu = () => {
    let { isNavbarOpen, navbarToggleClass } = this.state;
    isNavbarOpen = !isNavbarOpen;
    navbarToggleClass = isNavbarOpen ? 'navbar-menu is-active' : 'navbar-menu' ;
    this.setState({
      isNavbarOpen,
      navbarToggleClass,
    })
  }

  render() {
    const { navbarToggleClass } = this.state;
    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={tenor} className="logo" alt="" />
            HOOPRZ
                  </a>

          <a role="button" className="navbar-burger" onClick={this.toggleMenu}
            aria-label="menu" aria-expanded="false">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        {/* TODO: implement is-active toggle */}
        <div className={navbarToggleClass}>
          <div className="navbar-start">
            <Link to="/teams" className="navbar-item">Teams</Link>
            <Link to="/games" className="navbar-item">Games</Link>
            <Link to="/players" className="navbar-item">Players</Link>

          </div>
        </div>
      </nav>
    )
  }

}
export default Navbar;