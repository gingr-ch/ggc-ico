import * as React from 'react';
// import LocalizedStrings from 'react-localization';
// import { TeamStrings } from '../../components/l18n';
//
// export const langEn = require('../../assets/l18n/team.en.json');
// export const strings: TeamStrings = new LocalizedStrings({
//   en: langEn,
// });

import './Team.css';

class Team extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--team">
        <div className="gg-content-container">
          <h1 className="app-header">{this.props.lang.team}</h1>
        </div>
      </div>
    );
  }
}

export default Team;
