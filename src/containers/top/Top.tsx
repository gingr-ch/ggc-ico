import * as React from 'react';
import ReactPlayer from 'react-player';
import classNames from 'classnames';
import OnVisible from 'react-on-visible';
// import Img from 'react-image';
// import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import './Top.css';

import Button from '../../components/button/Button';
import PromoLogos from '../../components/promoLogos/PromoLogos';
// import ButtonPlay from '../../components/buttonPlay/ButtonPlay';
// import Chart from '../../components/svgChart/svgChart';

const video = require('../../assets/video/ggc-ico.mp4');
// const chart = require(process.env.REACT_APP_MEDIA_URL + 'chart.png');

class Top extends React.Component<any, any> {
  player: any;
  env = process.env.REACT_APP_MEDIA_URL;
  percentage: number;

  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
      muted: true,
      volume: 0,
      controls: false,
      playing: true,
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
    this.player.seekTo(0);
  }

  ref = (player: any) => {
    this.player = player;
    this.player.seekTo(44);
  };

  click() {
    window.open('https://admin.ggcico.io/auth/register', '_blank');
  }

  // componentDidMount() {
  //   if (!isWidthUp('sm', this.props.width)) {
  //     console.warn('poo');
  //     this.player.playing = false;
  //   }
  // }

  render() {
    let classes = classNames({
      'gg-top-left': true,
      'gg-frame-open': this.state.open,
    });

    return (
      <div className="gg-section-container gg-section-container--top">
        <div className={classes}>
          <div className="gg-top-left__container">
            <h1 className="app-header gg-h1">
              "{this.props.lang.revolutionizing}
              <br /> {this.props.lang.theOldestIndustry} <br />
              {this.props.lang.inTheWorld}"
            </h1>

            <div className="play-button">
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
            overflow: 'hidden',
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

// export default withWidth()(Top);
export default Top;
