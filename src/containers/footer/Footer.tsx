import * as React from 'react';

import './Footer.css';

const scene = require('../../assets/img/scene.png');

class Footer extends React.Component {
  click() {
    window.open('https://admin.ggcico.io/auth/register', '_blank');
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--footer">
        <div
          className="gg-content-container flex-row"
          style={{ justifyContent: 'flex-start' }}
        >
          <img src={scene} alt="" style={{ marginTop: '-439px' }} />
        </div>
      </div>
    );
  }
}

export default Footer;
