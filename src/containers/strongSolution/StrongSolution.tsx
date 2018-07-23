import * as React from 'react';
import OnVisible from 'react-on-visible';
import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

import './StrongSolution.css';

const gingrLogo = require('../../assets/img/gingr_logo.png');
const ggcLogo = require('../../assets/img/ggc-ico_logo.png');
const gstLogo = require('../../assets/img/gingr-share-token_logo.png');

export const langEn = require('../../assets/l18n/strong-solution.en.json');

export interface LocaleStrings extends LocalizedStringsMethods {
  strongSolution: string;
  gingrPlatform: string;
  ggCoinCurrency: string;
  gingrShareToken: string;
  firstWorldwideDirect: string;
  aNewGlobalEcosystem: string;
  gingrShareTokensAre: string;
}

export const strings: LocaleStrings = new LocalizedStrings({
  en: langEn,
});

class StrongSolution extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--strong-solution">
        <div className="gg-content-container">
          <h1 className="gg-head gg-head--xs">{strings.strongSolution}</h1>
          <OnVisible className="hidden-content" percent={80}>
            <div className="strong-solution-content">
              <div className="ssc-item flex-column flex-column--30">
                <div className="flex-column__image">
                  <img src={gingrLogo} alt="Gingr" />
                </div>
                <div className="flex-column__content">
                  <h3 className="title">{strings.gingrPlatform}</h3>
                  <p>{strings.firstWorldwideDirect}</p>
                </div>
              </div>
              <div className="ssc-item flex-column flex-column--30">
                <div className="flex-column__image">
                  <img src={ggcLogo} alt="GGC ICO" />
                </div>
                <div className="flex-column__content">
                  <h3 className="title">{strings.ggCoinCurrency} (GGC)</h3>
                  <p>{strings.aNewGlobalEcosystem}</p>
                </div>
              </div>
              <div className="ssc-item flex-column flex-column--30">
                <div className="flex-column__image">
                  <img src={gstLogo} alt="Gingr Share Token" />
                </div>
                <div className="flex-column__content">
                  <h3 className="title">{strings.gingrShareToken} (GST)</h3>
                  <p>{strings.gingrShareTokensAre}</p>
                </div>
              </div>
            </div>
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default StrongSolution;
