import * as React from 'react';
import OnVisible from 'react-on-visible';

import Button from '../../components/button/Button';
import './Beta.css';

const gingrV1 = require('../../assets/img/gingr_v1.png');

class Beta extends React.Component {
  click() {
    window.open('https://gingr.ch', '_blank');
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--beta">
        <div className="gg-content-container">
          <h1 className="gg-head gg-head--xs">
            Gingr <span>2.0 Beta</span>
          </h1>
          <h3>COMING SOON</h3>
          <div className="spacer" />
          <p>CLICK HERE TO VISIT OUR FIRST VERSION</p>
          <Button click={this.click} borderColor="#ffd400">
            Gingr 1.0
          </Button>

          <div className="spacer" />

          <OnVisible className="hidden-content" percent={50}>
            <img src={gingrV1} alt="" className="beta-image" />
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default Beta;
