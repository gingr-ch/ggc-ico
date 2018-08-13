import * as React from 'react';
// import OnVisible from 'react-on-visible';
// import LocalizedStrings from 'react-localization';
// import { InstafuckStrings } from '../../components/l18n';

import './Instafuck.css';

import InstafuckChart from '../../components/svgInstafuck/svgInstafuck2';
const instafuckMap = require(process.env.REACT_APP_MEDIA_URL +
  'instafuck/instafuck_map.png');
const gingrIconPink = require(process.env.REACT_APP_MEDIA_URL +
  'instafuck/gingr_icon--pink.png');
const instafuckPhone = require(process.env.REACT_APP_MEDIA_URL +
  'instafuck/instafuck_phone.png');
const ggcLogo = require(process.env.REACT_APP_MEDIA_URL +
  'instafuck/ggc_logo.png');
const instafuckEscrow = require(process.env.REACT_APP_MEDIA_URL +
  'instafuck/instafuck_escrow.png');

// export const langEn = require('../../assets/l18n/instafuck.en.json');
// export const strings: InstafuckStrings = new LocalizedStrings({
//   en: langEn,
// });
class Instafuck extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--instafuck">
        <div className="gg-content-container">
          <h3>{this.props.lang.welcomeTo}</h3>
          <h1 className="app-header">{this.props.lang.instafuck}</h1>
          <h4>"{this.props.lang.weHaveCreatedThe}"</h4>
          <div className="spacer" />
          <div className="hide-xs">
            <InstafuckChart lang={this.props.lang} />
          </div>

          <div className="hide show-xs flex-column">
            <div className="instafuck-item">
              <img src={gingrIconPink} alt="" />
              <h1>1</h1>
              <p>{this.props.lang.instafuckStep1}</p>
            </div>
            <div className="instafuck-item">
              <img src={instafuckMap} alt="" />
              <h1>2</h1>
              <p>{this.props.lang.instafuckStep2}</p>
            </div>
            <div className="instafuck-item">
              <img src={instafuckPhone} alt="" />
              <h1>3</h1>
              <p>{this.props.lang.instafuckStep3}</p>
            </div>
            <div className="instafuck-item">
              <img src={ggcLogo} alt="" />
              <h1>4</h1>
              <p>{this.props.lang.instafuckStep4}</p>
            </div>
            <div className="instafuck-item">
              <img src={instafuckEscrow} alt="" />
              <h1>5</h1>
              <p>{this.props.lang.instafuckStep5}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Instafuck;
