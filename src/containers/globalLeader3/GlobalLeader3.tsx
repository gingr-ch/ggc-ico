import * as React from 'react';

import './GlobalLeader3.css';

const continents = require('../../assets/img/continents.png');

class GlobalLeader3 extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--global-leader3">
        <div className="gg-content-container">
          <img src={continents} alt="" style={{ maxWidth: '100%' }} />
        </div>
      </div>
    );
  }
}

export default GlobalLeader3;
