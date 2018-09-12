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
  {
    title: luzernerZeitung,
    link:
      'http://www.luzernerzeitung.ch/nachrichten/video/news/sts181177,10010',
  },
  {
    title: teleZuri,
    link:
      'https://www.telezueri.ch/63-show-zueriinfo/13610-episode-express-sex-auf-knopfdruck-die-schnellste-badewanne-der-welt',
  },
  {
    title: startupValley,
    link: 'https://www.startupvalley.news/de/gingr-das-bordell-in-der-cloud/',
  },
  {
    title: teleBasel,
    link:
      'https://telebasel.ch/telebasel-news/?aid=4063&pid=80858&channel=15881',
  },
  {
    title: watson,
    link:
      'https://www.watson.ch/Schweiz/App/226677653-%C2%ABInsta-Fuck%C2%BB-App--Jetzt-k%C3%B6nnen-Sexarbeiterinnen-ihre-Freier-bewerten',
  },
  {
    title: anabell,
    link: 'https://desktop.12app.ch/articles/24173241',
  },
  {
    title: bernerZeitung,
    link:
      'https://www.bernerzeitung.ch/leben/gesellschaft/er-wollte-den-sexmarkt-revolutionieren/story/17758002',
  },
  {
    title: thunerTagblatt,
    link:
      'https://www.thunertagblatt.ch/leben/gesellschaft/er-wollte-den-sexmarkt-revolutionieren/story/17758002',
  },
  {
    title: derBund,
    link:
      'https://www.derbund.ch/leben/gesellschaft/er-wollte-den-sexmarkt-revolutionieren/story/17758002',
  },
];

class PromoLogos extends React.Component<any, any> {
  percentage: number;
  slides: number;

  constructor(props: any) {
    super(props);

    this.click = this.click.bind(this);
  }

  click(link: string) {
    window.open(link, '_blank');
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
            initialSlideHeight={54}
            wrapAround={true}
            slidesToShow={this.slides}
            cellSpacing={10}
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
                <img src={logo.title} onClick={() => this.click(logo.link)} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default withWidth()(PromoLogos);
