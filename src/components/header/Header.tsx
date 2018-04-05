import * as React from 'react';

import Button from '../button/Button';
import './Header.css';

const gingrLogo = require('../../assets/img/logo.png');
// const logo = require('../../logo.svg');

class Header extends React.Component {
  render() {
    return(
      <header className="gg-header">
        <div className="gg-header-container">
          <img src={gingrLogo} className="App-logo" alt="logo" />
          {this.props.children}
          <div className="gg-header-container__buttons">
            <Button borderColor="white">
              WHITEPAPER
            </Button>
            <Button borderColor="#df9eff">
              LOGIN
            </Button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
