import React from 'react';
import tenor from './../../assets/tenor.gif'

const Navbar = (props) => {
    return (
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
    )
}
export default Navbar;