import * as React from 'react';
import OnVisible from 'react-on-visible';
// import LocalizedStrings from 'react-localization';
//
// import { BetaStrings } from '../../components/l18n';

import Button from '../../components/button/Button';
import './Beta.css';

const gingrV1 = require('../../assets/img/gingr_v1.png');

// export const langEn = require('../../assets/l18n/gingr-beta.en.json');
//
// export const strings: BetaStrings = new LocalizedStrings({
//   en: langEn,
// });
//
class Beta extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { strings: this.props.lang };
  }

  click() {
    window.open('https://gingr.ch', '_blank');
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--beta">
        <div className="gg-content-container">
          <h1 className="gg-head gg-head--xs">
            {this.state.strings.gingr}{' '}
            <span>2.0 {this.state.strings.beta}</span>
          </h1>
          <h3>{this.state.strings.comingSoon}</h3>
          <div className="spacer" />
          <p>{this.state.strings.clickHereToVisit}</p>
          <Button click={this.click} borderColor="#ffd400">
            {this.state.strings.gingr} 1.0
          </Button>

          <div className="spacer" />

          <OnVisible className="hidden-content" percent={50}>
            <img src={gingrV1} alt="" className="beta-image" />
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default Beta;
