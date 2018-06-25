import * as React from 'react';

import Button from '../button/Button';
import './Header.css';

const gingrLogo = require('../../assets/img/logo.png');
// const logo = require('../../logo.svg');

class Header extends React.Component {
  login() {
    window.open('https://admin.ggcico.io/auth/login', '_blank');
  }

  whitepaper() {
    window.open(
      'https://docs.wixstatic.com/ugd/2eea42_b23b9045b42246c2ac4f7c6cbf5ee65c.pdf',
      '_blank'
    );
  }

  render() {
    return (
      <header className="gg-header">
        <div className="gg-header-container">
          <img src={gingrLogo} className="App-logo" alt="logo" />
          {this.props.children}
          <div className="gg-header-container__buttons">
            <Button click={this.whitepaper} borderColor="white">
              WHITEPAPER
            </Button>
            <Button click={this.login} borderColor="#df9eff">
              LOGIN
            </Button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
