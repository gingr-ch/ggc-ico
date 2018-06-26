import * as React from 'react';

import './HookUp.css';

const clientPhone = require('../../assets/img/phone_gingr.png');
const phoneQrClient = require('../../assets/img/phone_qr_client_beam.png');
const phoneQrGingr = require('../../assets/img/phone_qr_gingr.png');
const calendar = require('../../assets/img/icons/calendar.svg');
const escrow = require('../../assets/img/icons/export_lock.svg');

class HookUp extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--hookup">
        <div className="gg-content-container">
          <h1>
            <span>Hook Up</span> Booking
          </h1>
          <h4>
            "Find your most desired choice at your preferred time and place with
            a few clicks!"
          </h4>
          <div className="hookup flex-row">
            <div
              className="hookup__phone"
              style={{ transform: 'translate3d(0,31px,0)' }}
            >
              <img src={clientPhone} alt="" />
              <span>Client Phone</span>
            </div>

            <div
              className="path path--horizontal path__arrow"
              style={{ left: '-12px' }}
            />

            <div className="hookup__hookup">
              Hook<br />Up
            </div>

            <div
              className="path path--horizontal path__arrow"
              style={{ left: '-12px' }}
            />

            <div className="hookup__calendar">
              <img src={calendar} alt="" />
            </div>

            <div className="path path--horizontal path__arrow" />

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
                  <span>Client Phone</span>
                </div>

                <div className="hookup__phone">
                  <img src={phoneQrGingr} alt="" />
                  <span>Gingr Phone</span>
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
