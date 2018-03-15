import * as React from 'react';
import './Header.css';

const logo = require('../../logo.svg');

class Header extends React.Component {
  render() {
    return(
      <header className="gg-header">
        <div className="gg-header-container">
          <img src={logo} className="App-logo" alt="logo" />
          {this.props.children}
        </div>
      </header>
    );
  }
}

export default Header;
