import * as React from 'react';
// import OnVisible from 'react-on-visible';
// import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import './PressReports.css';

import Button from '../../components/button/Button';
import Chart from '../../components/svgChart/svgChart';

// const luzernerZeitung = require(process.env.REACT_APP_MEDIA_URL +
// 'press/luzerner_zeitung.png');
// const teleZuri = require(process.env.REACT_APP_MEDIA_URL +
//   'press/tele_zuri.png');
// const startupValley = require(process.env.REACT_APP_MEDIA_URL +
//   'press/startup_valley.png');
// const teleBasel = require(process.env.REACT_APP_MEDIA_URL +
//   'press/telebasel.png');
// const watson = require(process.env.REACT_APP_MEDIA_URL + 'press/watson.png');

// export const langEn = require('../../assets/l18n/press-reports.en.json');
//
// export interface LocaleStrings extends LocalizedStringsMethods {
//   pressReports: string;
// }
//
// export const strings: LocaleStrings = new LocalizedStrings({
//   en: langEn,
// });

class PressReports extends React.Component<any, any> {
  percentage: number;

  constructor(props: any) {
    super(props);
  }

  click() {
    window.open('https://admin.ggcico.io/auth/register', '_blank');
  }

  render() {
    if (isWidthUp('sm', this.props.width)) {
      this.percentage = 200;
    } else {
      this.percentage = 100;
    }

    return (
      <div className="gg-section-container gg-section-container--press-reports">
        <div className="gg-content-container">
          <Chart lang={this.props.lang} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            className="buy-coins-container"
          >
            <div
              style={{
                fontSize: '24px',
                marginBottom: '16px',
                textTransform: 'uppercase',
              }}
            >
              {this.props.lang.privateSaleNow}
            </div>
            <div style={{ fontSize: '30px', color: '#F39FFF' }}>
              {this.props.lang.discount}
            </div>
            <div
              style={{
                fontSize: '27px',
                marginBottom: '16px',
                color: '#F39FFF',
              }}
            >
              1 GGC = 0.03 EUR
            </div>

            <div className="spacer hide show-xs" />

            <Button
              click={this.click}
              borderColor="#F39FFF"
              className="btn-buy-coins"
            >
              {this.props.lang.buyCoinsNow}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withWidth()(PressReports);
