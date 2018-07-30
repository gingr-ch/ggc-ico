import * as React from 'react';

import TeamList from '../../components/teamList/TeamList';

import './TeamAll.css';

class TeamAll extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--teamAll">
        <div className="gg-content-container flex-row">
          <TeamList />
        </div>
      </div>
    );
  }
}

export default TeamAll;
