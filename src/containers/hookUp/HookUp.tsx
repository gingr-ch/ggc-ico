import * as React from 'react';
import OnVisible from 'react-on-visible';

import './HookUp.css';

const clientPhone = require(process.env.REACT_APP_MEDIA_URL +
  'phone_gingr.png');
const phoneQrClient = require(process.env.REACT_APP_MEDIA_URL +
  'phone_qr_client_beam.png');
const phoneQrGingr = require(process.env.REACT_APP_MEDIA_URL +
  'phone_qr_gingr.png');
const calendar = require(process.env.REACT_APP_MEDIA_URL +
  'icons/calendar.svg');
const escrow = require(process.env.REACT_APP_MEDIA_URL + 'icons/lock.svg');

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
          <h1 className="app-header">
            {this.props.lang.formatString(
              this.props.lang.hookupBooking,
              <span>{this.props.lang.hookUp}</span>,
              this.props.lang.booking
            )}
          </h1>
          <h4>"{this.props.lang.findYourMostDesired}"</h4>
          <OnVisible className="hidden-content hidden-content--slide-in--right">
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
                Hook
                <br />
                Up
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

                  <div className="escrow__text">{this.props.lang.escrow}</div>

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
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default HookUp;
