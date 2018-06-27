import * as React from 'react';

import './IcoDetails3.css';

const pie = require('../../assets/img/ico-pie-chart.png');
const ggcLogo = require('../../assets/img/ggc-logo--flat.png');
const flame = require('../../assets/img/flame.png');
const ethereum = require('../../assets/img/ethereum-logo.png');

class IcoDetails3 extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--ico-details3">
        <div className="gg-content-container">
          <div className="flex-row" style={{ justifyContent: 'center' }}>
            <img src={pie} alt="" style={{ width: '157px', height: '157px' }} />
            <div
              className="coin-supply-values flex-column"
              style={{ alignItems: 'flex-start', paddingTop: '32px' }}
            >
              <div className="title">TOTAL COIN SUPPLY</div>
              <div>1'000’000’000</div>
              <div className="title">FOR CROWD SALE</div>
              <div>700'000'000 (70%)</div>
              <div className="title">GINGR AG</div>
              <div>300’000’000 (30%)</div>
            </div>
          </div>
          <div
            className="flex-row"
            style={{ justifyContent: 'center', alignItems: 'flex-start' }}
          >
            <div
              className="ggc-card flex-column"
              style={{ alignItems: 'flex-start' }}
            >
              <img src={ggcLogo} alt="" />
              <div className="title">MAIN SALE PRICE</div>
              <div>
                Coin Price issue:<br />
                <span
                  style={{
                    color: '#FFD500',
                    fontSize: '20px',
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    display: 'block',
                  }}
                >
                  € 0.10 Cent
                </span>
                Starting price of GGC implementation on Gingr platform is €0.30.
              </div>
            </div>
            <div
              className="ggc-card flex-column"
              style={{ alignItems: 'flex-start' }}
            >
              <img src={flame} alt="" />
              <div className="title">COINS BURNED</div>
              <div>Remaining GG Coins from 700 million will be burned.</div>
            </div>
            <div
              className="ggc-card flex-column"
              style={{ alignItems: 'flex-start' }}
            >
              <img src={ethereum} alt="" />
              <div className="title">ETHEREUM TEC</div>
              <div>
                Used Block Chain:<br />
                Ethereum ERC-20 standard-based
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IcoDetails3;
