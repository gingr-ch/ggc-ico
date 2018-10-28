import * as React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import history from '../BrowserHistory';
import Caret from '../svgCaret/svgCaret';

const Nav = styled.div`
  color: white;
  font-size: 16px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;
  display: none;

  button {
    color: white;
    padding-left: 0;
  }

  svg {
    width: 28px;
    fill: var(--yellow);
    transform: translate3d(0, -1.5px, 0);
  }

  @media (max-width: 699px) {
    display: flex;
  }
`;

const MobileNav = props => {
  return (
    <Nav>
      <Button size="small" onClick={history.goBack}>
        <Caret /> {props.children}
      </Button>
    </Nav>
  );
};

export default MobileNav;
