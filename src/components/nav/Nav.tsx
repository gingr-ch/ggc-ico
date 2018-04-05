import * as React from 'react';
import './Nav.css';

class Nav extends React.Component {
  render() {
    const items = [
      { id: 1, name: 'Download', anchor: 'download' },
      { id: 2, name: 'Platform', anchor: 'platform' },
      { id: 3, name: 'GG Coin', anchor: 'ggcoin' },
      { id: 4, name: 'ICO Details', anchor: 'icodetails'},
      { id: 5, name: 'Roadmap', anchor: 'roadmap'},
      { id: 6, name: 'Team', anchor: 'team'},
      { id: 7, name: 'Contact', anchor: 'contact'}
    ];
    const itemsList = items.map((item) =>
      <li key={item.id.toString()}><a href="#{item.anchor}">{item.name}</a></li>
    );

    return(
      <nav className="gg-nav">
        <ul>
          {itemsList}
        </ul>
      </nav>
    );
  }
}

export default Nav;
