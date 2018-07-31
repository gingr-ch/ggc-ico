import * as React from 'react';
// import LocalizedStrings from 'react-localization';
// import { HookUpStrings } from '../../components/l18n';

import './HookUp.css';

const clientPhone = require(process.env.REACT_APP_MEDIA_URL +
  'phone_gingr.png');
const phoneQrClient = require(process.env.REACT_APP_MEDIA_URL +
  'phone_qr_client_beam.png');
const phoneQrGingr = require(process.env.REACT_APP_MEDIA_URL +
  'phone_qr_gingr.png');
const calendar = require(process.env.REACT_APP_MEDIA_URL +
  'icons/calendar.svg');
const escrow = require(process.env.REACT_APP_MEDIA_URL +
  'icons/export_lock.svg');

// export const langEn = require('../../assets/l18n/hook-up.en.json');
// export const strings: HookUpStrings = new LocalizedStrings({
//   en: langEn,
// });
//
class HookUp extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--hookup">
        <div className="gg-content-container">
          <h1>
            <span>{this.props.lang.hookUp}</span> {this.props.lang.booking}
          </h1>
          <h4>"{this.props.lang.findYourMostDesired}"</h4>
          <div className="hookup flex-row">
            <div
              className="hookup__phone"
              style={{ transform: 'translate3d(0,31px,0)' }}
            >
              <img src={clientPhone} alt="" />
              <span>{this.props.lang.clientPhone}</span>
            </div>

            <div
              className="path path--horizontal path__arrow path--vertical-xs"
              style={{ left: '-12px' }}
            />

            <div className="hookup__hookup">
              Hook<br />Up
            </div>

            <div
              className="path path--horizontal path__arrow path--vertical-xs"
              style={{ left: '-12px' }}
            />

            <div className="hookup__calendar">
              <img src={calendar} alt="" />
            </div>

            <div className="path path--horizontal path__arrow path--vertical-xs" />

            <div className="hookup__transactiontransaction__escrow flex-column">
              <div
                className="transaction__escrow flex-row"
                style={{ alignItems: 'flex-start' }}
              >
                <div className="path path--vertical" />
                <div
                  className="path path--horizontal"
                  style={{ left: '-26px' }}
                />

                <img src={escrow} className="escrow__image" alt="" />

                <div className="path path--horizontal" />
                <div className="path path--vertical path__arrow" />
              </div>

              <div className="hookup__phones">
                <div className="hookup__phone hookup__phone--start">
                  <img src={phoneQrClient} alt="" />
                  <span>{this.props.lang.clientPhone}</span>
                </div>

                <div className="hookup__phone">
                  <img src={phoneQrGingr} alt="" />
                  <span>{this.props.lang.gingrPhone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HookUp;
