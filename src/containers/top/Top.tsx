import * as React from 'react';
import ReactPlayer from 'react-player';
import classNames from 'classnames';
import OnVisible from 'react-on-visible';
import Dialog from 'rc-dialog';
// import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import 'rc-dialog/assets/index.css';

import './Top.css';

import Button from '../../components/button/Button';
import PromoLogos from '../../components/promoLogos/PromoLogos';
import SuisseIco from '../../components/svgSuisseIco/svgSuisseIco';
import LegallyApproved from '../../components/svgLegallyApproved/svgLegallyApproved';
import Finma from '../../components/svgFinma/svgFinma';
import LegalContent from '../../components/legalContent/LegalContent';

const video = require('../../assets/video/promo.m4v');

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
      visible: false,
      width: 860,
      destroyOnClose: true,
      center: true,
      mousePosition: { x: 0, y: 0 },
    };

    this.videoToggle = this.videoToggle.bind(this);
    this.close = this.close.bind(this);
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

  close() {
    this.setState({
      open: false,
      muted: true,
      volume: 0,
      controls: false,
      playing: true,
    });
  }

  ref = (player: any) => {
    this.player = player;
    this.player.seekTo(44);
  };

  click(link: string) {
    window.open(link, '_blank');
  }

  onClick = (e: any) => {
    // const currProfile = _.find(list, { id: id });
    // const currProfile = item;
    this.setState({
      mousePosition: {
        x: e.pageX,
        y: e.pageY,
      },
      visible: true,
    });
  };

  // componentDidMount() {
  //   if (!isWidthUp('sm', this.props.width)) {
  //     console.warn('poo');
  //     this.player.playing = false;
  //   }
  // }

  onClose = () => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  onDestroyOnCloseChange = (e: any) => {
    this.setState({
      destroyOnClose: e.target.checked,
    });
  };

  center = (e: any) => {
    this.setState({
      center: e.target.checked,
    });
  };

  render() {
    const style = {
      width: this.state.width,
    };

    let wrapClassName = '';
    if (this.state.center) {
      wrapClassName = 'center';
    }

    let classes = classNames({
      'gg-top-left': true,
      'gg-frame-open': this.state.open,
    });

    let btnClose = classNames({
      'close-button__image': true,
      'close-button__image--show': this.state.open,
    });

    const dialog = (
      <Dialog
        visible={this.state.visible}
        wrapClassName={wrapClassName}
        animation="zoom"
        maskAnimation="fade"
        onClose={this.onClose}
        style={style}
        mousePosition={this.state.mousePosition}
        destroyOnClose={this.state.destroyOnClose}
      >
        <div className="rc-dialog-body__content flex-row">
          <div className="rc-dialog-body__text flex-column">
            <LegalContent lang={this.props.lang} />
          </div>
        </div>
      </Dialog>
    );

    return (
      <div className="gg-section-container gg-section-container--top">
        <div className={classes}>
          <div className="gg-top-left__container">
            <div className="gg-top-content">
              <h1 className="app-header gg-h1">
                "{this.props.lang.revolutionizingTheOldestIndustryInTheWorld}"
              </h1>
            </div>
            <SuisseIco
              width="150px"
              style={{ marginTop: '2em', overflow: 'visible' }}
              className="suisse-ico-logo"
              lang={this.props.lang}
            />

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

            <div className="stamps-container">
              <LegallyApproved
                width="150px"
                height="150px"
                onClick={e => this.onClick(e)}
              />
              <Finma
                width="150px"
                height="150px"
                onClick={e => this.onClick(e)}
              />
              <a
                onClick={e => this.onClick(e)}
                style={{
                  textDecoration: 'underline',
                  fontSize: '14px',
                  position: 'relative',
                  top: '-1em',
                  cursor: 'pointer',
                }}
              >
                read more
              </a>
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
          <div className="btn-close-video">
            <svg
              version="1.1"
              className={btnClose}
              x="0px"
              y="0px"
              viewBox="0 0 51.976 51.976"
              onClick={this.close}
            >
              <g>
                <path
                  d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0
                C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778
                c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828
                c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828
                l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"
                />
              </g>
            </svg>
          </div>
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
                attributes: {
                  controlsList: 'nodownload',
                },
                forceVideo: true,
              },
            }}
            playsinline={true}
            style={{ background: '#000000' }}
          />
        </div>
        {dialog}
      </div>
    );
  }
}

// export default withWidth()(Top);
export default Top;
