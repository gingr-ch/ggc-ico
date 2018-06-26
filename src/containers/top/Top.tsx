import * as React from 'react';
import ReactPlayer from 'react-player';
import classNames from 'classnames';

import './Top.css';

import Button from '../../components/button/Button';
import ButtonPlay from '../../components/buttonPlay/ButtonPlay';

const chart = require('../../assets/img/chart.png');

class Top extends React.Component {
  state = {
    open: false
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
      volume: 1
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
      'gg-frame-open': this.state.open
    });

    return (
      <div className="gg-section-container">
        <div className={classes}>
          <h1 style={{ fontSize: '36px' }}>
            "REVOLUTIONIZING<br /> THE OLDEST INDUSTRY <br />IN THE WORLD"
          </h1>
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
            <Button click={this.click} borderColor="#00D646">
              Buy coins now
            </Button>
          </div>
          <img
            src={chart}
            alt="Chart"
            style={{ maxWidth: '600px', width: '100%' }}
          />
          <div
            style={{
              position: 'absolute',
              zIndex: 9,
              width: '122px',
              height: '122px',
              right: '-61px',
              top: 'calc(50% - 61px)'
            }}
          >
            <ButtonPlay videoToggle={this.videoToggle}>PLAY</ButtonPlay>
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
            zIndex: 0
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
