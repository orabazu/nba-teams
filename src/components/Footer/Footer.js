import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p className="font-press-start">
          Powered by <a href="https://bulma.io">bulma</a> and <a href="https://www.balldontlie.io/#introduction">balldontlie</a>. The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
        </p>
      </div>
    </footer>
  )
}
export default Footer;