import * as React from 'react';
import Carousel from 'nuka-carousel';
// import LocalizedStrings from 'react-localization';
// import { IcoDetailsStrings } from '../../components/l18n';

import Button from '../../components/button/Button';
import './IcoDetails.css';

const gingr = require('../../assets/img/gingr_left.png');
const icoStages = require('../../assets/img/chart.png');
const icoStagesAlt = require('../../assets/img/chartAlt_nobg.png');

// export const langEn = require('../../assets/l18n/ico-details.en.json');
// export const strings: IcoDetailsStrings = new LocalizedStrings({
//   en: langEn,
// });
class IcoDetails extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { strings: this.props.lang };
  }

  click() {
    window.open('https://admin.ggcico.io/auth/register', '_blank');
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--ico-details">
        <div className="gg-content-container">
          <h1>{this.state.strings.icoDetails}</h1>
          <div className="spacer" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '24px', marginBottom: '16px' }}>
              {this.state.strings.privateSaleNow}
            </div>
            <div className="color-green" style={{ fontSize: '30px' }}>
              70% {this.state.strings.discount}
            </div>
            <div
              className="color-green"
              style={{ fontSize: '27px', marginBottom: '16px' }}
            >
              1 GGC = 0.03 EUR
            </div>
            <div className="spacer" />
            <Button click={this.click} borderColor="#00D646">
              {this.state.strings.buyCoinsNow}
            </Button>
          </div>

          <div className="spacer" />
          <div className="spacer" />
          <div className="spacer" />
          <div className="spacer" />

          <Carousel autoplay={true} heightMode={'max'} wrapAround={true}>
            <img src={icoStages} />
            <img src={icoStagesAlt} />
          </Carousel>

          <img className="gingr-left" src={gingr} alt="" />
        </div>
      </div>
    );
  }
}

export default IcoDetails;
