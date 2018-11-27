import * as React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Nav.css';

const scrollWithOffset = (el, offset) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: 'smooth',
  });
};

const Nav = props => {
  const itemsList = props.items.map(item => (
    <li key={item.id.toString()}>
      <Link to={'/#' + item.anchor} scroll={el => scrollWithOffset(el, 5)}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <nav className={'gg-nav' + (props.side ? ' gg-nav--side' : '')}>
      <ul>{itemsList}</ul>
    </nav>
  );
};

export default Nav;
