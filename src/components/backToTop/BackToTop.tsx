import * as React from 'react';
import { goToTop } from 'react-scrollable-anchor';

import Button from '../button/Button';

import './BackToTop.css';

// const telegram = require('../../assets/img/social/telegram.png');

class BackToTop extends React.Component {
  render() {
    return (
      <div className="btt-btn">
        <Button click={goToTop}>
          <svg className="arrow-img" style={{ height: '47px', width: '39px' }}>
            <svg viewBox="0 0 45.5 44.4">
              <polyline
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                points="15.9,25.5 22.7,18.9 29.5,25.5"
              />
              <circle
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                cx="22.7"
                cy="22.2"
                r="18.3"
              />
            </svg>
          </svg>
        </Button>
      </div>
    );
  }
}

export default BackToTop;
