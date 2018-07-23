import * as React from 'react';
import ReactPlayer from 'react-player';
import classNames from 'classnames';
import LocalizedStrings from 'react-localization';

import './Top.css';

import Button from '../../components/button/Button';
import ButtonPlay from '../../components/buttonPlay/ButtonPlay';
import OnVisible from 'react-on-visible';

const chart = require('../../assets/img/chart.png');

export const langEn = require('../../assets/l18n/top.en.json');
export const langDe = require('../../assets/l18n/top.de.json');

import { TopStrings } from '../../components/l18n';

export const strings: TopStrings = new LocalizedStrings({
  en: langEn,
  de: langDe,
});

class Top extends React.Component {
  state = {
    open: false,
  };

  player: any;

  constructor(props: object) {
    super(props);

    this.videoToggle = this.videoToggle.bind(this);
    this.click = this.click.bind(this);
  }

  videoToggle() {
    // console.log("hello");
    this.setState({
      open: true,
      muted: false,
      volume: 1,
    });

    this.player.seekTo(0);
  }

  ref = (player: any) => {
    this.player = player;
  };

  click() {
    window.open('https://admin.ggcico.io/auth/register', '_blank');
  }

  render() {
    let classes = classNames({
      'gg-top-left': true,
      'gg-frame-open': this.state.open,
    });

    return (
      <div className="gg-section-container gg-section-container--top">
        <div className={classes}>
          <div className="gg-top-left__container">
            <div className="spacer hide show-xs" />
            <div className="spacer hide show-xs" />

            <h1 className="gg-h1">
              "{strings.revolutionizing}
              <br /> {strings.theOldestIndustry} <br />
              {strings.inTheWorld}"
            </h1>
            <div className="spacer hide show-xs" />

            <div className="play-button hide show-xs">
              <OnVisible className="rotate-in">
                <ButtonPlay videoToggle={this.videoToggle}>
                  {strings.play}
                </ButtonPlay>
              </OnVisible>
            </div>
            <div className="spacer hide show-xs" />
            <div className="spacer" />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '16px' }}>
                {strings.privateSale}
              </div>
              <div className="color-green" style={{ fontSize: '30px' }}>
                {strings.discount}
              </div>
              <div
                className="color-green"
                style={{ fontSize: '27px', marginBottom: '16px' }}
              >
                1 GGC = 0.03 EUR
              </div>

              <div className="spacer hide show-xs" />

              <Button click={this.click} borderColor="#00D646">
                {strings.buyCoinsNow}
              </Button>
            </div>
            <div className="spacer" />
            <div className="spacer" />
            <img
              src={chart}
              alt="Chart"
              style={{ maxWidth: '600px', width: '100%' }}
            />
            <div className="play-button hide-xs">
              <OnVisible className="rotate-in">
                <ButtonPlay videoToggle={this.videoToggle}>
                  {strings.play}
                </ButtonPlay>
              </OnVisible>
            </div>
          </div>
        </div>
        <div style={{ flex: '1 1 50%', background: 'transparent' }}>
          some content
        </div>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'red',
            zIndex: 0,
          }}
        >
          <ReactPlayer
            url="https://vimeo.com/194665559"
            width="100%"
            height="100%"
            playing={false}
            muted={true}
            controls={false}
            loop={false}
            ref={this.ref}
          />
        </div>
      </div>
    );
  }
}

export default Top;
