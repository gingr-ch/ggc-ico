import * as React from 'react';
import OnVisible from 'react-on-visible';
// import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import './PressReports.css';

const luzernerZeitung = require('../../assets/img/press/luzerner_zeitung.png');
const teleZuri = require('../../assets/img/press/tele_zuri.png');
const startupValley = require('../../assets/img/press/startup_valley.png');
const teleBasel = require('../../assets/img/press/telebasel.png');
const watson = require('../../assets/img/press/watson.png');

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

  render() {
    if (isWidthUp('sm', this.props.width)) {
      this.percentage = 200;
    } else {
      this.percentage = 100;
    }

    return (
      <div className="gg-section-container gg-section-container--press-reports">
        <div className="gg-content-container">
          <h2 className="press-title">{this.props.lang.pressReports}</h2>
          <OnVisible className="hidden-content" percent={this.percentage}>
            <ul className="press-logos">
              <li>
                <img src={luzernerZeitung} />
              </li>
              <li>
                <img src={teleZuri} />
              </li>
              <li>
                <img src={startupValley} />
              </li>
              <li>
                <img src={teleBasel} />
              </li>
              <li>
                <img src={watson} />
              </li>
            </ul>
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default withWidth()(PressReports);
