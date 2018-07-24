import * as React from 'react';
// import LocalizedStrings from 'react-localization';
// import { IcoDetailsStrings } from '../../components/l18n';
//
// export const langEn = require('../../assets/l18n/ico-details.en.json');
// export const strings: IcoDetailsStrings = new LocalizedStrings({
//   en: langEn,
// });

import './IcoDetails3.css';

const pie = require('../../assets/img/ico-pie-chart.png');
const ggcLogo = require('../../assets/img/ggc-logo--flat.png');
const flame = require('../../assets/img/flame.png');
const ethereum = require('../../assets/img/ethereum-logo.png');

class IcoDetails3 extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { strings: this.props.lang };
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--ico-details3">
        <div className="gg-content-container">
          <div
            className="flex-row pie-chart-container"
            style={{ justifyContent: 'center' }}
          >
            <img src={pie} alt="" style={{ width: '157px', height: '157px' }} />
            <div
              className="coin-supply-values flex-column"
              style={{ alignItems: 'flex-start', paddingTop: '32px' }}
            >
              <div className="title">{this.state.strings.totalCoinSupply}</div>
              <div>1'000’000’000</div>
              <div className="title">{this.state.strings.totalCoinSupply}</div>
              <div>700'000'000 (70%)</div>
              <div className="title">GINGR AG</div>
              <div>300’000’000 (30%)</div>
            </div>
          </div>
          <div
            className="ico-details-items-container flex-row"
            style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginTop: '50px',
            }}
          >
            <div
              className="ggc-card flex-column"
              style={{ alignItems: 'flex-start' }}
            >
              <img src={ggcLogo} alt="" />
              <div className="title">{this.state.strings.mainSalePrice}</div>
              <div>
                {this.state.strings.coinPriceIssue}:<br />
                <span
                  style={{
                    color: '#FFD500',
                    fontSize: '20px',
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    display: 'block',
                  }}
                >
                  € 0.10 {this.state.strings.cent}
                </span>
                {this.state.strings.startingPriceofGGC} €0.30.
              </div>
            </div>
            <div
              className="ggc-card flex-column"
              style={{ alignItems: 'flex-start' }}
            >
              <img src={flame} alt="" />
              <div className="title">{this.state.strings.coinsBurned}</div>
              <div>{this.state.strings.remainingGGCCoins}</div>
            </div>
            <div
              className="ggc-card flex-column"
              style={{ alignItems: 'flex-start' }}
            >
              <img src={ethereum} alt="" />
              <div className="title">{this.state.strings.ethereumTEC}</div>
              <div>
                {this.state.strings.usedBlockchain}:<br />
                {this.state.strings.standardBased}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IcoDetails3;
