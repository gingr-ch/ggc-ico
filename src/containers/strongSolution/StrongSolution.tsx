import * as React from 'react';
import OnVisible from 'react-on-visible';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import './StrongSolution.css';

const gingrLogo = require(process.env.REACT_APP_MEDIA_URL + 'gingr_logo.png');
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
          <h1 className="gg-head gg-head--xs">
            {this.props.lang.strongSolution}
          </h1>
          <OnVisible className="hidden-content" percent={this.percentage}>
            <div className="strong-solution-content">
              <div className="ssc-item flex-column flex-column--30">
                <div className="flex-column__image">
                  <img src={gingrLogo} alt="Gingr" />
                </div>
                <div className="flex-column__content">
                  <h3 className="title">{this.props.lang.gingrPlatform}</h3>
                  <p>{this.props.lang.firstWorldwideDirect}</p>
                </div>
              </div>
              <div className="ssc-item flex-column flex-column--30">
                <div className="flex-column__image">
                  <img src={ggcLogo} alt="GGC ICO" />
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
                  <img src={gstLogo} alt="Gingr Share Token" />
                </div>
                <div className="flex-column__content">
                  <h3 className="title">
                    {this.props.lang.gingrShareToken} (GST)
                  </h3>
                  <p>{this.props.lang.gingrShareTokensAre}</p>
                </div>
              </div>
            </div>
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default withWidth()(StrongSolution);
