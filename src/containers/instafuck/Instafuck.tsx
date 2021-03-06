import * as React from 'react';
import OnVisible from 'react-on-visible';
import LazyLoad from 'react-lazyload';

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

class Instafuck extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--instafuck">
        <div className="gg-content-container">
          <h3>{this.props.lang.welcomeTo}</h3>
          <OnVisible
            percent={50}
            className="hidden-content hidden-content--instafuck"
          >
            <h1 className="app-header">{this.props.lang.instafuck}</h1>
          </OnVisible>
          <h4>"{this.props.lang.weHaveCreatedThe}"</h4>
          <div className="spacer" />
          <div
            className="hide-xs"
            style={{
              width: '100%',
              overflow: 'hidden',
            }}
          >
            <LazyLoad offset={500} height={1242.959}>
              <InstafuckChart lang={this.props.lang} />
            </LazyLoad>
          </div>

          <div
            className="hide show-xs"
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '2.5em',
            }}
          >
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
