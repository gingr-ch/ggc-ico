import * as React from 'react';
// import OnVisible from 'react-on-visible';
import LocalizedStrings from 'react-localization';
import { InstafuckStrings } from '../../components/l18n';

import './Instafuck.css';

import InstafuckChart from '../../components/svgInstafuck/svgInstafuck';
const instafuckMap = require('../../assets/img/instafuck/instafuck_map.png');
const gingrIconPink = require('../../assets/img/instafuck/gingr_icon--pink.png');
const instafuckPhone = require('../../assets/img/instafuck/instafuck_phone.png');
const ggcLogo = require('../../assets/img/instafuck/ggc_logo.png');
const instafuckEscrow = require('../../assets/img/instafuck/instafuck_escrow.png');

export const langEn = require('../../assets/l18n/instafuck.en.json');
export const strings: InstafuckStrings = new LocalizedStrings({
  en: langEn,
});
class Instafuck extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--instafuck">
        <div className="gg-content-container">
          <h3>{strings.welcomeTo}</h3>
          <h1>{strings.instafuck}</h1>
          <h4>"{strings.weHaveCreatedThe}"</h4>
          <div className="spacer" />
          <div className="hide-xs">
            <InstafuckChart />
          </div>

          <div className="hide show-xs flex-column">
            <div className="instafuck-item">
              <img src={gingrIconPink} alt="" />
              <h1>1</h1>
              <p>{strings.instafuckStep1}</p>
            </div>
            <div className="instafuck-item">
              <img src={instafuckMap} alt="" />
              <h1>2</h1>
              <p>{strings.instafuckStep2}</p>
            </div>
            <div className="instafuck-item">
              <img src={instafuckPhone} alt="" />
              <h1>3</h1>
              <p>{strings.instafuckStep3}</p>
            </div>
            <div className="instafuck-item">
              <img src={ggcLogo} alt="" />
              <h1>4</h1>
              <p>{strings.instafuckStep4}</p>
            </div>
            <div className="instafuck-item">
              <img src={instafuckEscrow} alt="" />
              <h1>5</h1>
              <p>{strings.instafuckStep5}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Instafuck;
