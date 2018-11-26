import * as React from 'react';
import './Nav.css';

class Nav extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const itemsList = this.props.items.map(item => (
      <li key={item.id.toString()}>
        <a href={item.anchor}>{item.name}</a>
      </li>
    ));

    return (
      <nav className={'gg-nav' + (this.props.side ? ' gg-nav--side' : '')}>
        <ul>{itemsList}</ul>
      </nav>
    );
  }
}

export default Nav;
