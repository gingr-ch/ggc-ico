import * as React from 'react';

import './AboutList.css';

class AboutList extends React.Component {
  render () {
    const items = [
      { id: 1, name: 'Client', text: 'download' },
      { id: 2, name: 'Platform', anchor: 'platform' },
      { id: 3, name: 'GG Coin', anchor: 'ggcoin' }
    ];
    const itemsList = items.map((item) =>
      <li key={item.id.toString()}><a href="#{item.anchor}">{item.name}</a></li>
    );

    return (
      <div>list</div>
    );
  }
}

export default AboutList;
