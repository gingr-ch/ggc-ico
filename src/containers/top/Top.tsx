import * as React from 'react';
import VimeoPlayer from 'react-player';
import classNames from 'classnames';
// import Img from 'react-image';

import './Top.css';

import Button from '../../components/button/Button';
import ButtonPlay from '../../components/buttonPlay/ButtonPlay';
import OnVisible from 'react-on-visible';

const chart = require(process.env.REACT_APP_MEDIA_URL + 'chart.png');

class Top extends React.Component<any, any> {
  player: any;
  env = process.env.REACT_APP_MEDIA_URL;

  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
      muted: true,
      volume: 0,
    };

    this.videoToggle = this.videoToggle.bind(this);
    this.click = this.click.bind(this);
  }

  videoToggle() {
    this.setState({
      open: true,
      muted: false,
      volume: 1,
    });
    console.warn(this.state);
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
              "{this.props.lang.revolutionizing}
              <br /> {this.props.lang.theOldestIndustry} <br />
              {this.props.lang.inTheWorld}"
            </h1>
            <div className="spacer hide show-xs" />

            <div className="play-button hide show-xs">
              <OnVisible className="rotate-in">
                <ButtonPlay videoToggle={this.videoToggle}>
                  {this.props.lang.play}
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
                {this.props.lang.privateSale}
              </div>
              <div className="color-green" style={{ fontSize: '30px' }}>
                {this.props.lang.discount}
              </div>
              <div
                className="color-green"
                style={{ fontSize: '27px', marginBottom: '16px' }}
              >
                1 GGC = 0.03 EUR
              </div>

              <div className="spacer hide show-xs" />

              <Button click={this.click} borderColor="#00D646">
                {this.props.lang.buyCoinsNow}
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
                  {this.props.lang.play}
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
          <VimeoPlayer
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
