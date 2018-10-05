import * as React from 'react';
import OnVisible from 'react-on-visible';
import LazyLoad from 'react-lazyload';

import Button from '../../components/button/Button';
import './Beta.css';

const gingrV1 = require(process.env.REACT_APP_MEDIA_URL + 'gingr_v1.png');

class Beta extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  click() {
    window.open('https://gingr.ch', '_blank');
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--beta">
        <div className="gg-content-container">
          <h1 className="app-header">
            {this.props.lang.gingr} <span>2.0</span>
          </h1>
          <h3>{this.props.lang.comingSoon}</h3>
          <div className="spacer" />
          <OnVisible
            className="hidden-content hidden-content--flip-in-right"
            percent={50}
          >
            <p className="beta-item">{this.props.lang.clickHereToVisit}</p>
          </OnVisible>
          <OnVisible
            className="hidden-content hidden-content--flip-in-right"
            percent={60}
          >
            <Button
              className="beta-item btn-beta"
              click={this.click}
              borderColor="#ffd400"
            >
              {this.props.lang.gingr} 1.0
            </Button>
          </OnVisible>

          <div className="spacer" />
          <LazyLoad offset={500} height={557}>
            <img src={gingrV1} alt="" className="beta-image" />
          </LazyLoad>
        </div>
      </div>
    );
  }
}

export default Beta;
