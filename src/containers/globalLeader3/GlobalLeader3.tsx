import * as React from 'react';
import OnVisible from 'react-on-visible';

import './GlobalLeader3.css';

const continents = require(process.env.REACT_APP_MEDIA_URL + 'continents.png');

class GlobalLeader3 extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--global-leader3">
        <div className="gg-content-container">
          <OnVisible className="hidden-content hidden-content--fade-in">
            <img src={continents} alt="" style={{ maxWidth: '100%' }} />
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default GlobalLeader3;
