import * as React from 'react';
import OnVisible from 'react-on-visible';

import Map from '../../components/svgMap/svgMap';

import './GlobalLeader3.css';

// const continents = require(process.env.REACT_APP_MEDIA_URL + 'continents.png');

class GlobalLeader3 extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--global-leader3">
        <div className="gg-content-container">
          <OnVisible className="hidden-content hidden-content--fade-in">
            <Map style={{ maxWidth: '100%' }} lang={this.props.lang} />
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default GlobalLeader3;
