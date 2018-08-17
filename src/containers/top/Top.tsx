import * as React from 'react';
import ReactPlayer from 'react-player';
import classNames from 'classnames';
import OnVisible from 'react-on-visible';
// import Img from 'react-image';

import './Top.css';

import Button from '../../components/button/Button';
import PromoLogos from '../../components/promoLogos/PromoLogos';
// import ButtonPlay from '../../components/buttonPlay/ButtonPlay';
// import Chart from '../../components/svgChart/svgChart';

const video = require('../../assets/video/ggc-ico__promo.mp4');
// const chart = require(process.env.REACT_APP_MEDIA_URL + 'chart.png');

class Top extends React.Component<any, any> {
  player: any;
  env = process.env.REACT_APP_MEDIA_URL;

  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
      muted: true,
      volume: 0,
      controls: false,
      playing: false,
    };

    this.videoToggle = this.videoToggle.bind(this);
    this.click = this.click.bind(this);
  }

  videoToggle() {
    this.setState({
      open: true,
      muted: false,
      volume: 0.8,
      controls: true,
      playing: true,
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

            <h1 className="app-header gg-h1">
              "{this.props.lang.revolutionizing}
              <br /> {this.props.lang.theOldestIndustry} <br />
              {this.props.lang.inTheWorld}"
            </h1>
            <div className="spacer hide show-xs" />

            <div className="play-button hide-xs">
              <OnVisible className="rotate-in">
                <Button
                  click={this.videoToggle}
                  borderColor={'#ffffff'}
                  shape="rounded-edges"
                >
                  {this.props.lang.playVideo}
                </Button>
              </OnVisible>
            </div>

            <PromoLogos />
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'red',
            zIndex: 0,
          }}
          className="player-container"
        >
          <ReactPlayer
            url={video}
            width="100%"
            height="100%"
            playing={this.state.playing}
            volume={this.state.volume}
            muted={this.state.muted}
            controls={this.state.controls}
            loop={true}
            ref={this.ref}
            config={{
              file: {
                forceVideo: true,
              },
            }}
            playsinline={true}
            style={{ background: '#000000' }}
          />
        </div>
      </div>
    );
  }
}

export default Top;
