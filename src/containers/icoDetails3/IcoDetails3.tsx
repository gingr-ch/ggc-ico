import * as React from 'react';
// import LocalizedStrings from 'react-localization';
// import { IcoDetailsStrings } from '../../components/l18n';
//
// export const langEn = require('../../assets/l18n/ico-details.en.json');
// export const strings: IcoDetailsStrings = new LocalizedStrings({
//   en: langEn,
// });
import OnVisible from 'react-on-visible';

import './IcoDetails3.css';
// import PieChart from '../../components/pieChart/PieChart';

import PieChart from '../../components/svgPie/svgPie';

// const pie = require(process.env.REACT_APP_MEDIA_URL + 'ico-pie-chart.png');
const euroSign = require(process.env.REACT_APP_MEDIA_URL +
  'euro-sign-logo.png');
const ggcLogo = require(process.env.REACT_APP_MEDIA_URL + 'ggc-logo--flat.png');
const flame = require(process.env.REACT_APP_MEDIA_URL + 'flame.png');
const ethereum = require(process.env.REACT_APP_MEDIA_URL + 'ethereum-logo.png');

// const pieItems = [
//   {
//     id: 0,
//     value: '50%',
//     pos: 'left',
//   },
//   {
//     id: 1,
//     value: '50%',
//     pos: 'right',
//   },
// ];

class IcoDetails3 extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--ico-details3">
        <div className="gg-content-container">
          <div
            className="flex-row pie-chart-container"
            style={{ justifyContent: 'center' }}
          >
            <OnVisible className="hidden-content hidden-content--slide-in--left hidden-content--ico-details--slide-in--left">
              <PieChart width="154px" />
            </OnVisible>
            <OnVisible
              className="hidden-content hidden-content--slide-in--left hidden-content--ico-details--slide-in--left"
              percent={30}
            >
              <div
                className="coin-supply-values flex-column"
                style={{ alignItems: 'flex-start', paddingTop: '32px' }}
              >
                <div className="title title--cyan flex-row">
                  <div>50%</div> {this.props.lang.publicSale}
                </div>
                <div className="title title--pink flex-row">
                  <div>30%</div> {this.props.lang.companyReserve}
                </div>
                <div className="title title--purple flex-row">
                  <div>10%</div> {this.props.lang.strategicPartnerships}
                </div>
                <div className="title flex-row">
                  <div>10%</div>{' '}
                  {this.props.lang.earlySupportersAndAngelInvestors}
                </div>
              </div>
            </OnVisible>
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
              <OnVisible className="hidden-content hidden-content--fade-in-rotate">
                <img src={euroSign} alt="" />
              </OnVisible>
              <div className="title">{this.props.lang.hardcap}</div>
              <div>
                <span
                  style={{
                    color: '#FFD500',
                    fontSize: '20px',
                  }}
                >
                  € 20.45 {this.props.lang.million}
                </span>
              </div>
            </div>

            <div
              className="ggc-card flex-column"
              style={{ alignItems: 'flex-start' }}
            >
              <OnVisible className="hidden-content hidden-content--fade-in-rotate">
                <img src={ggcLogo} alt="" />
              </OnVisible>
              <div className="title">{this.props.lang.mainSalePrice}</div>
              <div>
                {this.props.lang.coinPriceIssue}:<br />
                <span
                  style={{
                    color: '#FFD500',
                    fontSize: '20px',
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    display: 'block',
                  }}
                >
                  € 0.12
                </span>
              </div>
            </div>
            <div
              className="ggc-card flex-column"
              style={{ alignItems: 'flex-start' }}
            >
              <OnVisible className="hidden-content hidden-content--fade-in-rotate">
                <img src={flame} alt="" />
              </OnVisible>
              <div className="title">{this.props.lang.coinsBurned}</div>
              <div>{this.props.lang.remainingGGCCoins}</div>
            </div>
            <div
              className="ggc-card flex-column"
              style={{ alignItems: 'flex-start' }}
            >
              <OnVisible className="hidden-content hidden-content--fade-in-rotate">
                <img src={ethereum} alt="" />
              </OnVisible>
              <div className="title">{this.props.lang.ethereumTEC}</div>
              <div>
                {this.props.lang.usedBlockchain}:<br />
                {this.props.lang.standardBased}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IcoDetails3;
