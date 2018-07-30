import * as React from 'react';
import VimeoPlayer from 'react-player';
import OnVisible from 'react-on-visible';
import classNames from 'classnames';
// import LocalizedStrings from 'react-localization';
// import { WhatIsGingrStrings } from '../../components/l18n';

import './WhatIsGingr.css';

const clientIcon = require('../../assets/img/icons/client.png');
const gingrIcon = require('../../assets/img/icons/gingr.png');
const agencyIcon = require('../../assets/img/icons/agency.png');
const establishmentIcon = require('../../assets/img/icons/establishment.png');
const gingrImg = require('../../assets/img/what_is_gingr--gingr.png');
const establishmentImg = require('../../assets/img/what_is_gingr--establishment.png');

// export const langEn = require('../../assets/l18n/what-is-gingr.en.json');
// export const strings: WhatIsGingrStrings = new LocalizedStrings({
//   en: langEn,
// });

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

  render() {
    let classes = (i: any) =>
      classNames({
        left: !this.isEven(i),
        right: this.isEven(i),
      });

    const whatIsList = [
      {
        id: 0,
        title: this.props.lang.client,
        classTitle: 'client',
        icon: clientIcon,
        content: this.props.lang.worldwideAccessTo,
        video: 'https://vimeo.com/194665559',
      },
      {
        id: 1,
        title: this.props.lang.gingr,
        subtitle: 'Sex-Worker',
        classTitle: 'gingr',
        icon: gingrIcon,
        content: this.props.lang.worldwideWorkWith,
        img: gingrImg,
      },
      {
        id: 2,
        title: this.props.lang.agencyAndEstablishemnt,
        classTitle: 'agency-establishment',
        icon: establishmentIcon,
        icon2: agencyIcon,
        content: this.props.lang.stateOfTheArt,
        img: establishmentImg,
      },
    ];

    return (
      <div className="gg-section-container gg-section-container--what-is-gingr">
        <div className="gg-content-container">
          <h1 className="gg-head gg-head--xs">
            {this.props.lang.whatIsGingr}?
          </h1>
          <h3>"{this.props.lang.theFirstGlobalMarket}"</h3>

          <div className="list-2-col">
            {whatIsList.map((d, i) => (
              <div key={d.id} className="l2c__container">
                <div className="l2c__media order-xs-2">
                  {d.img && (
                    <img className="l2c__media-image" src={d.img} alt="" />
                  )}
                  {d.video && (
                    <VimeoPlayer
                      url={d.video}
                      width="431px"
                      height="232px"
                      playing={false}
                      muted={false}
                      controls={false}
                      loop={false}
                      ref={this.ref}
                      className="l2c__media-image"
                    />
                  )}
                </div>
                <div
                  className={
                    'l2c__content l2c__content--' + d.classTitle + ' order-xs-1'
                  }
                >
                  <OnVisible className={'slide-in slide-in--' + classes(i)}>
                    <div className="l2c__content-title">
                      {d.icon2 && <img src={d.icon2} alt="" />}
                      <img src={d.icon} alt="" />
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
