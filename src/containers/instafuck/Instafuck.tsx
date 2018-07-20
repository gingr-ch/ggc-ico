import * as React from 'react';
// import OnVisible from 'react-on-visible';

import './Instafuck.css';

import InstafuckChart from '../../components/svgInstafuck/svgInstafuck';
const instafuckMap = require('../../assets/img/instafuck/instafuck_map.png');
const gingrIconPink = require('../../assets/img/instafuck/gingr_icon--pink.png');
const instafuckPhone = require('../../assets/img/instafuck/instafuck_phone.png');
const ggcLogo = require('../../assets/img/instafuck/ggc_logo.png');
const instafuckEscrow = require('../../assets/img/instafuck/instafuck_escrow.png');

class Instafuck extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--instafuck">
        <div className="gg-content-container">
          <h3>Welcome to</h3>
          <h1>Instafuck</h1>
          <h4>
            "We have created the world’s first button where you get instant
            access with a guaranteed booking for sex"
          </h4>
          <div className="spacer" />
          <div className="hide-xs">
            <InstafuckChart />
          </div>

          <div className="hide show-xs flex-column">
            <div className="instafuck-item">
              <img src={gingrIconPink} alt="" />
              <h1>1</h1>
              <p>Gingrs (sex-workers) activate thier Instafuck status.</p>
            </div>
            <div className="instafuck-item">
              <img src={instafuckMap} alt="" />
              <h1>2</h1>
              <p>All available Gingrs will be displayed.</p>
            </div>
            <div className="instafuck-item">
              <img src={instafuckPhone} alt="" />
              <h1>3</h1>
              <p>Client selects favourite Gingr.</p>
            </div>
            <div className="instafuck-item">
              <img src={ggcLogo} alt="" />
              <h1>4</h1>
              <p>GG Coin sent to escrow to PAY NOW!</p>
            </div>
            <div className="instafuck-item">
              <img src={instafuckEscrow} alt="" />
              <h1>5</h1>
              <p>
                Through our scanning process funds will be released from escrow
                to begin the date.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Instafuck;
