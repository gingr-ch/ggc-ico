import * as React from 'react';
import ReactPlayer from 'react-player';
import OnVisible from 'react-on-visible';
import classNames from 'classnames';
import LazyLoad from 'react-lazyload';

import './WhatIsGingr.css';

const clientIcon = require(process.env.REACT_APP_MEDIA_URL +
  'icons/client.png');
const gingrIcon = require(process.env.REACT_APP_MEDIA_URL + 'icons/gingr.png');
const agencyIcon = require(process.env.REACT_APP_MEDIA_URL +
  'icons/agency.png');
const establishmentIcon = require(process.env.REACT_APP_MEDIA_URL +
  'icons/establishment.png');

// require videos
import gingrVideo from '../../assets/video/gingr-video.m4v';
import establishmentVideo from '../../assets/video/establishment-video.m4v';

class WhatIsGingr extends React.Component<any, any> {
  player: any;

  constructor(props: any) {
    super(props);
  }

  ref = (player: any) => {
    this.player = player;
  };

  isEven(i: any) {
    return i % 2 === 0;
  }

  getLanguage() {
    if (
      this.props.lang._language !== 'en' &&
      this.props.lang._language !== 'es' &&
      this.props.lang._language !== 'de'
    ) {
      return 'en';
    }

    return this.props.lang._language;
  }

  render() {
    let classes = (i: any) =>
      classNames({
        left: !this.isEven(i),
        right: this.isEven(i),
      });

    const clientVideo = require('../../assets/video/client-video_' +
      this.getLanguage() +
      '.m4v');

    const whatIsList = [
      {
        id: 0,
        title: this.props.lang.client,
        classTitle: 'client',
        icon: clientIcon,
        content: this.props.lang.worldwideAccessTo,
        video: clientVideo,
      },
      {
        id: 1,
        title: this.props.lang.gingr,
        subtitle: 'Sex-Worker',
        classTitle: 'gingr',
        icon: gingrIcon,
        content: this.props.lang.worldwideWorkWith,
        video: gingrVideo,
      },
      {
        id: 2,
        title: this.props.lang.agencyAndEstablishemnt,
        classTitle: 'agency-establishment',
        icon: establishmentIcon,
        icon2: agencyIcon,
        content: this.props.lang.stateOfTheArt,
        video: establishmentVideo,
      },
    ];

    return (
      <div className="gg-section-container gg-section-container--what-is-gingr">
        <div className="gg-content-container">
          <h1 className="app-header">{this.props.lang.whatIsGingr}?</h1>
          <h3>"{this.props.lang.theFirstGlobalMarket}"</h3>

          <div className="list-2-col">
            {whatIsList.map((d, i) => (
              <div key={d.id} className="l2c__container">
                <div className="l2c__media order-xs-2">
                  <LazyLoad offset={1000}>
                    {d.video && (
                      <ReactPlayer
                        url={d.video}
                        width="431px"
                        height="234px"
                        playing={false}
                        volume={0.8}
                        muted={false}
                        controls={true}
                        loop={false}
                        ref={this.ref}
                        config={{
                          file: {
                            forceVideo: true,
                          },
                        }}
                        playsinline={true}
                        style={{
                          background: '#000000',
                          zIndex: 3,
                          position: 'relative',
                        }}
                      />
                    )}
                  </LazyLoad>
                </div>
                <div
                  className={
                    'l2c__content l2c__content--' + d.classTitle + ' order-xs-1'
                  }
                >
                  <OnVisible className={'slide-in slide-in--' + classes(i)}>
                    <div className="l2c__content-title">
                      {d.icon2 && (
                        <img
                          src={d.icon2}
                          alt={d.classTitle + ' second icon'}
                        />
                      )}
                      <img src={d.icon} alt={d.classTitle + ' icon'} />
                      <h3>
                        {d.title}
                        {d.subtitle && (
                          <span className="l2c__content-subtitle">
                            ({d.subtitle})
                          </span>
                        )}
                      </h3>
                    </div>
                    <p>{d.content}</p>
                  </OnVisible>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default WhatIsGingr;
