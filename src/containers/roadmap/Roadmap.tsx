import * as React from 'react';
import OnVisible from 'react-on-visible';

import './Roadmap.css';
import SvgRoadmap from '../../components/svgRoadmap/Roadmap';

const balloon = require(process.env.REACT_APP_MEDIA_URL + 'gg_balloon.png');
const gingr = require(process.env.REACT_APP_MEDIA_URL + 'gingr_balloons.png');

class Roadmap extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--roadmap">
        <div className="gg-content-container">
          <h1 className="app-header">{this.props.lang.roadmap}</h1>
          <OnVisible className="hidden-content hidden-content--zoom-in">
            <h2>{this.props.lang.datesComingSoon}</h2>
          </OnVisible>

          <div className="hide-xs" style={{ marginTop: '100px' }}>
            <SvgRoadmap lang={this.props.lang} maxw="645px" minw="645px" />
          </div>

          <div className="hide show-xs">
            <SvgRoadmap lang={this.props.lang} maxw="100%" minw="100%" />
          </div>

          <div
            className="flex-row"
            style={{ alignItems: 'stretch', justifyContent: 'center' }}
          >
            <div
              className="flex-column"
              style={{ justifyContent: 'flex-end', paddingTop: '150px' }}
            >
              <img src={gingr} alt="Girl holding a bunch of ballons" />
            </div>

            <div
              className="flex-column roadmap-ballon-container"
              style={{ justifyContent: 'flex-start' }}
            >
              <OnVisible className="hidden-content hidden-content--slide-in-up">
                <img src={balloon} alt="Balloon floating upwards" />
              </OnVisible>
              <h4>"{this.props.lang.oneCryptoCurrencyFromThousands}"</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Roadmap;
