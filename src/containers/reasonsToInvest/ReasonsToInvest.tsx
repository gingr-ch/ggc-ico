import * as React from 'react';
// import LocalizedStrings from 'react-localization';
// import { ReasonsToInvestStrings } from '../../components/l18n';
import OnVisible from 'react-on-visible';

import './ReasonsToInvest.css';

const reasonsImg = require(process.env.REACT_APP_MEDIA_URL +
  'reason_to_invest.png');

// export const langEn = require('../../assets/l18n/reasons-to-invest.en.json');
// export const strings: ReasonsToInvestStrings = new LocalizedStrings({
//   en: langEn,
// });

class ReasonsToInvest extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const reasonsList = [
      {
        id: 1,
        text: this.props.lang.ggCoinShould,
      },
      {
        id: 2,
        text: this.props.lang.weProvideFirm,
      },
      {
        id: 3,
        text: this.props.lang.ourAssetsAnd,
      },
      {
        id: 4,
        text: this.props.lang.theGingrPlatformHas,
      },
      {
        id: 5,
        text: this.props.lang.withYourHelp,
      },
      {
        id: 6,
        text: this.props.lang.gingrHasAlready,
      },
      {
        id: 7,
        text: this.props.lang.ourConceptHas,
      },
      {
        id: 8,
        text: this.props.lang.theFirmHasGained,
      },
      {
        id: 9,
        text: this.props.lang.weAreRegarded,
      },
      {
        id: 10,
        text: this.props.lang.gingrIsThePioneer,
      },
    ];

    return (
      <div className="gg-section-container gg-section-container--reasons-to-invest">
        <div className="gg-content-container">
          <h1 className="app-header">{this.props.lang.reasonsToInvest}</h1>
          <div className="flex-row flex-column-xs">
            <div className="flex-column flex-column--45 order-xs-3">
              <img
                src={reasonsImg}
                alt={this.props.lang.reasonsToInvest}
                className="rti-image"
              />
            </div>
            <div className="flex-column flex-column--25 order-xs-1">
              <OnVisible className="hidden-content hidden-content--list">
                {reasonsList.slice(0, 5).map((d, i) => (
                  <div key={d.id} className="reason-list flex-column">
                    <span>{d.id}</span>
                    {d.text}
                  </div>
                ))}
              </OnVisible>
            </div>
            <div className="flex-column flex-column--25 order-xs-2">
              <OnVisible className="hidden-content hidden-content--list">
                {reasonsList.slice(5, 10).map((d, i) => (
                  <div key={d.id} className="reason-list flex-column">
                    <span>{d.id}</span>
                    {d.text}
                  </div>
                ))}
              </OnVisible>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReasonsToInvest;
