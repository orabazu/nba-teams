import React from 'react';
import tenor from "../../assets/tenor.gif"

const Navbar = () => {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={tenor} className="logo" alt="" />
          HOOPRZ
                </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" href="/">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
    </nav>
  )
}
export default Navbar;