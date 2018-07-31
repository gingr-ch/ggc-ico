import * as React from 'react';
import './Nav.css';

class Nav extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const items = [
      { id: 1, name: this.props.lang.download, anchor: 'download' },
      { id: 2, name: this.props.lang.platform, anchor: 'what-is-gingr' },
      { id: 3, name: this.props.lang.ggCoin, anchor: 'blockchain' },
      { id: 4, name: this.props.lang.icoDetails, anchor: 'ico-details' },
      { id: 5, name: this.props.lang.roadmap, anchor: 'roadmap' },
      { id: 6, name: this.props.lang.team, anchor: 'team' },
      { id: 7, name: this.props.lang.contact, anchor: 'contact' },
    ];
    const itemsList = items.map(item => (
      <li key={item.id.toString()}>
        <a href={'#' + item.anchor}>{item.name}</a>
      </li>
    ));

    return (
      <nav className={'gg-nav ' + (this.props.side ? 'gg-nav--side' : '')}>
        <ul>{itemsList}</ul>
      </nav>
    );
  }
}

export default Nav;
