import * as React from 'react';
import LocalizedStrings from 'react-localization';
import { ReasonsWhyStrings } from '../../components/l18n';

import './ReasonsWhy.css';

const gingr = require('../../assets/img/reasons-why.png');

export const langEn = require('../../assets/l18n/reasons-why.en.json');
export const strings: ReasonsWhyStrings = new LocalizedStrings({
  en: langEn,
});
class ReasonsWhy extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--reasons-why">
        <div className="gg-content-container">
          <h1>
            {strings.sixReasons} <span>{strings.why}</span>
          </h1>
          <h4>{strings.theGGCoinCould}</h4>

          <div className="flex-row reasons-why-container">
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
                <div>{strings.theGGCoinWillBe}</div>
              </div>
              <div className="reasons-why-list__item flex-row">
                <div className="number">2</div>
                <div>{strings.burn20OfOurProfits}</div>
              </div>
              <div className="reasons-why-list__item flex-row">
                <div className="number">3</div>
                <div>{strings.weBuyBackGGC}</div>
              </div>
              <div className="reasons-why-list__item flex-row">
                <div className="number">4</div>
                <div>{strings.ofTheTransaction}</div>
              </div>
              <div className="reasons-why-list__item flex-row">
                <div className="number">5</div>
                <div>{strings.weBuyBackGGC}</div>
              </div>
              <div
                className="reasons-why-list__item flex-row"
                style={{ justifyContent: 'flex-start' }}
              >
                <div className="number">6</div>
                <div>{strings.smartContracts}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReasonsWhy;
