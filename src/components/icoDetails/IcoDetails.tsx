import * as React from 'react';
import Carousel from 'nuka-carousel';

import Button from '../../components/button/Button';
import './IcoDetails.css';

const gingr = require('../../assets/img/gingr_left.png');
const icoStages = require('../../assets/img/chart.png');
const icoStagesAlt = require('../../assets/img/chartAlt_nobg.png');

class IcoDetails extends React.Component {
  click() {
    window.open('https://admin.ggcico.io/auth/register', '_blank');
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--ico-details">
        <div className="gg-content-container">
          <h1>ICO DETAILS</h1>
          <div className="spacer" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '24px', marginBottom: '16px' }}>
              PRIVATE SALE NOW
            </div>
            <div className="color-green" style={{ fontSize: '30px' }}>
              70% DISCOUNT
            </div>
            <div
              className="color-green"
              style={{ fontSize: '27px', marginBottom: '16px' }}
            >
              1 GGC = 0.03 EUR
            </div>
            <div className="spacer" />
            <Button click={this.click} borderColor="#00D646">
              Buy coins now
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
