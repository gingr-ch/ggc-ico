import * as React from 'react';

import './ReasonsWhy.css';

const gingr = require('../../assets/img/reasons-why.png');

class ReasonsWhy extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--reasons-why">
        <div className="gg-content-container">
          <h1>
            6 REASONS <span>WHY</span>
          </h1>
          <h4>THE GG COIN COULD INCREASE BY A 1000 TIMES</h4>

          <div
            className="flex-row"
            style={{
              justifyContent: 'center',
              alignItems: 'stretch',
              marginTop: '50px',
            }}
          >
            <div>
              <img
                src={gingr}
                style={{ maxWidth: '360px', width: '100%' }}
                alt=""
              />
            </div>
            <div className="reasons-why-list">
              <div className="reasons-why-list__item flex-row">
                <div className="number">1</div>
                <div>
                  The GG Coin will be introduced in 2019 on Gingr platform for
                  the mainstream, all erotic dates with sex-workers will be paid
                  with the GG Coin.
                </div>
              </div>
              <div className="reasons-why-list__item flex-row">
                <div className="number">2</div>
                <div>
                  Burn 20% of our profits made from worldwide member ships.
                </div>
              </div>
              <div className="reasons-why-list__item flex-row">
                <div className="number">3</div>
                <div>We buy back GG Coins.</div>
              </div>
              <div className="reasons-why-list__item flex-row">
                <div className="number">4</div>
                <div>
                  20% of the transaction fees will be burned. Aprox. 10 Cents
                  per Tran.
                </div>
              </div>
              <div className="reasons-why-list__item flex-row">
                <div className="number">5</div>
                <div>
                  Equity Gingr Share Token in 2020 can only be bought with GG
                  Coins.
                </div>
              </div>
              <div
                className="reasons-why-list__item flex-row"
                style={{ justifyContent: 'flex-start' }}
              >
                <div className="number">6</div>
                <div>
                  Smart contracts in place for GG Coins to be use to pay for
                  erotic dates on the Gingr platform for any sex-worker around
                  the world.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReasonsWhy;
