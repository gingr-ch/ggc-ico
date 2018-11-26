import * as React from 'react';
import './Nav.css';

const Nav = props => {
  const itemsList = props.items.map(item => (
    <li key={item.id.toString()}>
      <a href={item.anchor}>{item.name}</a>
    </li>
  ));

  return (
    <nav className={'gg-nav' + (props.side ? ' gg-nav--side' : '')}>
      <ul>{itemsList}</ul>
    </nav>
  );
};

export default Nav;
