import * as React from 'react';
import OnVisible from 'react-on-visible';

import './PressReports.css';

const luzernerZeitung = require('../../assets/img/press/luzerner_zeitung.png');
const teleZuri = require('../../assets/img/press/tele_zuri.png');
const startupValley = require('../../assets/img/press/startup_valley.png');
const teleBasel = require('../../assets/img/press/telebasel.png');
const watson = require('../../assets/img/press/watson.png');

class PressReports extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--press-reports">
        <div className="gg-content-container">
          <h2 className="press-title">Press Reports</h2>
          <OnVisible className="hidden-content" percent={200}>
            <ul
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                listStyleType: 'none'
              }}
            >
              <li><img src={luzernerZeitung} /></li>
              <li><img src={teleZuri} /></li>
              <li><img src={startupValley} /></li>
              <li><img src={teleBasel} /></li>
              <li><img src={watson} /></li>
            </ul>
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default PressReports;
