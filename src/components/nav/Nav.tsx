import * as React from 'react';
import './Nav.css';

class Nav extends React.Component {
  render() {
    const items = ['Download', 'Platform'];
    const itemsList = items.map((item) => {
      return '<li>' + item + '</li>';
    });

    return(
      <nav className="gg-nav">
        <ul>
          {itemsList}
        </ul>
        {this.props.children}
      </nav>
    );
  }
}

export default Nav;
