import * as React from 'react';
// import LocalizedStrings from 'react-localization';
// import { ReasonsToInvestStrings } from '../../components/l18n';

import './ReasonsToInvest.css';

const reasonsImg = require('../../assets/img/reason_to_invest.png');

// export const langEn = require('../../assets/l18n/reasons-to-invest.en.json');
// export const strings: ReasonsToInvestStrings = new LocalizedStrings({
//   en: langEn,
// });

class ReasonsToInvest extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { strings: this.props.lang };
  }

  render() {
    const reasonsList = [
      {
        id: 1,
        text: this.state.strings.ggCoinShould,
      },
      {
        id: 2,
        text: this.state.strings.weProvideFirm,
      },
      {
        id: 3,
        text: this.state.strings.ourAssetsAnd,
      },
      {
        id: 4,
        text: this.state.strings.theGingrPlatformHas,
      },
      {
        id: 5,
        text: this.state.strings.withYourHelp,
      },
      {
        id: 6,
        text: this.state.strings.gingrHasAlready,
      },
      {
        id: 7,
        text: this.state.strings.ourConceptHas,
      },
      {
        id: 8,
        text: this.state.strings.theFirmHasGained,
      },
      {
        id: 9,
        text: this.state.strings.weAreRegarded,
      },
      {
        id: 10,
        text: this.state.strings.gingrIsThePioneer,
      },
    ];

    return (
      <div className="gg-section-container gg-section-container--reasons-to-invest">
        <div className="gg-content-container">
          <h1 className="gg-head gg-head--xs">
            {this.state.strings.reasonsToInvest}
          </h1>
          <div className="flex-row flex-column-xs">
            <div className="flex-column flex-column--45 order-xs-3">
              <img
                src={reasonsImg}
                alt={this.state.strings.reasonsToInvest}
                className="rti-image"
              />
            </div>
            <div className="flex-column flex-column--25 order-xs-1">
              {reasonsList.slice(0, 5).map((d, i) => (
                <div key={d.id} className="reason-list flex-column">
                  <span>{d.id}</span>
                  {d.text}
                </div>
              ))}
            </div>
            <div className="flex-column flex-column--25 order-xs-2">
              {reasonsList.slice(5, 10).map((d, i) => (
                <div key={d.id} className="reason-list flex-column">
                  <span>{d.id}</span>
                  {d.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReasonsToInvest;
