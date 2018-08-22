import * as React from 'react';
// import OnVisible from 'react-on-visible';
import Carousel from 'nuka-carousel';
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

const anabell = require(process.env.REACT_APP_MEDIA_URL + 'press/anabell.png');
const bernerZeitung = require(process.env.REACT_APP_MEDIA_URL +
  'press/bz_berner_zeitung.png');
const thunerTagblatt = require(process.env.REACT_APP_MEDIA_URL +
  'press/bz_thuner_tagblatt.png');
const derBund = require(process.env.REACT_APP_MEDIA_URL + 'press/der_bund.png');

const logos = [
  { 0: luzernerZeitung },
  { 1: teleZuri },
  { 2: startupValley },
  { 3: teleBasel },
  { 4: watson },
  { 5: anabell },
  { 6: bernerZeitung },
  { 7: thunerTagblatt },
  { 8: derBund },
];

class PromoLogos extends React.Component<any, any> {
  percentage: number;
  slides: number;

  constructor(props: any) {
    super(props);
  }

  render() {
    if (isWidthUp('sm', this.props.width)) {
      this.slides = 5;
    } else {
      this.slides = 2;
    }

    return (
      <div className="promo-logos">
        <div className="press-logos">
          <Carousel
            autoplay={true}
            heightMode={'max'}
            wrapAround={true}
            slidesToShow={this.slides}
            renderCenterLeftControls={({ previousSlide }) => (
              <button
                style={{ background: 'none', color: 'white', border: 'none' }}
                onClick={previousSlide}
              >
                &#60;
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button
                style={{ background: 'none', color: 'white', border: 'none' }}
                onClick={nextSlide}
              >
                &#62;
              </button>
            )}
          >
            {logos.map((logo, i) => (
              <div className="press-logo" key={i}>
                <img src={logo[i]} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default withWidth()(PromoLogos);
