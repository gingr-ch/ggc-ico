import * as React from 'react';
import LazyLoad from 'react-lazyload';

import TeamList from '../../components/teamList/TeamList';

import './TeamAll.css';

class TeamAll extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--teamAll">
        <div className="gg-content-container flex-row">
          <LazyLoad offset={1000} height={986.51}>
            <TeamList lang={this.props.lang} />
          </LazyLoad>
        </div>
      </div>
    );
  }
}

export default TeamAll;
