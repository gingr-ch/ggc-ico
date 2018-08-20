import * as React from 'react';
import OnVisible from 'react-on-visible';
// import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import './PromoLogos.css';

const luzernerZeitung = require(process.env.REACT_APP_MEDIA_URL +
  'press/luzerner_zeitung.png');
const teleZuri = require(process.env.REACT_APP_MEDIA_URL +
  'press/tele_zuri.png');
const startupValley = require(process.env.REACT_APP_MEDIA_URL +
  'press/startup_valley.png');
const teleBasel = require(process.env.REACT_APP_MEDIA_URL +
  'press/telebasel.png');
const watson = require(process.env.REACT_APP_MEDIA_URL + 'press/watson.png');

// export const langEn = require('../../assets/l18n/press-reports.en.json');
//
// export interface LocaleStrings extends LocalizedStringsMethods {
//   pressReports: string;
// }
//
// export const strings: LocaleStrings = new LocalizedStrings({
//   en: langEn,
// });

const logos = [
  { 0: luzernerZeitung },
  { 1: teleZuri },
  { 2: startupValley },
  { 3: teleBasel },
  { 4: watson },
];

class PromoLogos extends React.Component<any, any> {
  percentage: number;

  constructor(props: any) {
    super(props);
  }

  render() {
    if (isWidthUp('sm', this.props.width)) {
      this.percentage = 200;
    } else {
      this.percentage = 100;
    }

    return (
      <div className="promo-logos">
        <OnVisible className="hidden-content">
          <ul className="press-logos">
            {logos.map((logo, i) => (
              <li className="press-logo" key={i}>
                <img src={logo[i]} />
              </li>
            ))}
          </ul>
        </OnVisible>
      </div>
    );
  }
}

export default withWidth()(PromoLogos);
