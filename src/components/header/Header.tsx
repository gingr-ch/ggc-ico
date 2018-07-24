import * as React from 'react';

import Button from '../button/Button';
import './Header.css';

const gingrLogo = require('../../assets/img/logo.png');
// const logo = require('../../logo.svg');

const adminIco = 'https://admin.ggcico.io/auth/login';
const whitePaper =
  'https://docs.wixstatic.com/ugd/2eea42_b23b9045b42246c2ac4f7c6cbf5ee65c.pdf';

class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { strings: this.props.lang };
  }
  click(url: string) {
    window.open(url, '_blank');
  }

  render() {
    return (
      <header className="gg-header">
        <div className="gg-header-container">
          <img src={gingrLogo} className="App-logo" alt="logo" />
          {this.props.children}
          <div className="gg-header-container__buttons">
            <Button click={() => this.click(whitePaper)} borderColor="white">
              WHITEPAPER
            </Button>
            <Button click={() => this.click(adminIco)} borderColor="#df9eff">
              LOGIN
            </Button>
          </div>

          <div className="nav-mobile">
            <div className="nm-bar nm-bar--1" />
            <div className="nm-bar nm-bar--2" />
            <div className="nm-bar nm-bar--3" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
