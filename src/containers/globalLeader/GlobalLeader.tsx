import * as React from 'react';

import './GlobalLeader.css';

class GlobalLeader extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--global-leader">
        <div className="gg-content-container">
          <h1 className="app-header">
            {this.props.lang.globalLeader}
            <br />
            {this.props.lang.inTheMarket}
          </h1>
          <h4>"{this.props.lang.bePartOfOurVision}"</h4>
        </div>
      </div>
    );
  }
}

export default GlobalLeader;
