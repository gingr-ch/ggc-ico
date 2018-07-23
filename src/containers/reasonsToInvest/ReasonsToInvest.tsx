import * as React from 'react';
import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

import './ReasonsToInvest.css';

const reasonsImg = require('../../assets/img/reason_to_invest.png');

export const langEn = require('../../assets/l18n/reasons-to-invest.en.json');
export interface LocaleStrings extends LocalizedStringsMethods {
  reasonsToInvest: string;
  ggCoinShould: string;
  weProvideFirm: string;
  ourAssetsAnd: string;
  theGingrPlatformHas: string;
  withYourHelp: string;
  gingrHasAlready: string;
  ourConceptHas: string;
  theFirmHasGained: string;
  weAreRegarded: string;
  gingrIsThePioneer: string;
}

export const strings: LocaleStrings = new LocalizedStrings({
  en: langEn,
});

const reasonsList = [
  {
    id: 1,
    text: strings.ggCoinShould,
  },
  {
    id: 2,
    text: strings.weProvideFirm,
  },
  {
    id: 3,
    text: strings.ourAssetsAnd,
  },
  {
    id: 4,
    text: strings.theGingrPlatformHas,
  },
  {
    id: 5,
    text: strings.withYourHelp,
  },
  {
    id: 6,
    text: strings.gingrHasAlready,
  },
  {
    id: 7,
    text: strings.ourConceptHas,
  },
  {
    id: 8,
    text: strings.theFirmHasGained,
  },
  {
    id: 9,
    text: strings.weAreRegarded,
  },
  {
    id: 10,
    text: strings.gingrIsThePioneer,
  },
];

class ReasonsToInvest extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--reasons-to-invest">
        <div className="gg-content-container">
          <h1 className="gg-head gg-head--xs">{strings.reasonsToInvest}</h1>
          <div className="flex-row flex-column-xs">
            <div className="flex-column flex-column--45 order-xs-3">
              <img
                src={reasonsImg}
                alt={strings.reasonsToInvest}
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
