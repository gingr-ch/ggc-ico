import * as React from 'react';

import './TeamCEO.css';

const image = require('../../assets/img/teamCEO.jpg');

class TeamCEO extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--teamCEO">
        <div className="gg-content-container">
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
}

export default TeamCEO;
