import * as React from 'react';
import OnVisible from 'react-on-visible';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import './StrongSolution.css';

const gingrLogo = require(process.env.REACT_APP_MEDIA_URL + 'gingr_logo.svg');
const ggcLogo = require(process.env.REACT_APP_MEDIA_URL + 'ggc-ico_logo.png');
const gstLogo = require(process.env.REACT_APP_MEDIA_URL +
  'gingr-share-token_logo.png');

class StrongSolution extends React.Component<any, any> {
  percentage: number;

  constructor(props: any) {
    super(props);
  }

  render() {
    if (isWidthUp('sm', this.props.width)) {
      this.percentage = 80;
    } else {
      this.percentage = 30;
    }

    return (
      <div className="gg-section-container gg-section-container--strong-solution">
        <div className="gg-content-container">
          <h1 className="app-header">{this.props.lang.strongSolution}</h1>

          <div className="strong-solution-content">
            <div className="ssc-item flex-column flex-column--30">
              <div className="flex-column__image">
                <OnVisible
                  className="hidden-content hidden-content--from-left"
                  percent={this.percentage}
                >
                  <img
                    className="ssc-item__gingr-logo"
                    src={gingrLogo}
                    alt="Gingr logo"
                  />
                </OnVisible>
              </div>
              <div className="flex-column__content">
                <h3 className="title">{this.props.lang.gingrPlatform}</h3>
                <p>{this.props.lang.firstWorldwideDirect}</p>
              </div>
            </div>
            <div className="ssc-item flex-column flex-column--30">
              <div className="flex-column__image">
                <OnVisible
                  className="hidden-content hidden-content--from-left"
                  percent={this.percentage}
                >
                  <img src={ggcLogo} alt="GGC ICO icon" />
                </OnVisible>
              </div>
              <div className="flex-column__content">
                <h3 className="title">
                  {this.props.lang.ggCoinCurrency} (GGC)
                </h3>
                <p>{this.props.lang.aNewGlobalEcosystem}</p>
              </div>
            </div>
            <div className="ssc-item flex-column flex-column--30">
              <div className="flex-column__image">
                <OnVisible
                  className="hidden-content hidden-content--from-left"
                  percent={this.percentage}
                >
                  <img src={gstLogo} alt="Gingr Share Token icon" />
                </OnVisible>
              </div>
              <div className="flex-column__content">
                <h3 className="title">
                  {this.props.lang.gingrShareToken} (GST)
                </h3>
                <p>{this.props.lang.gingrShareTokensAre}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withWidth()(StrongSolution);
