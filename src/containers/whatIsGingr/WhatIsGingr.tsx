import * as React from 'react';
import ReactPlayer from 'react-player';
import OnVisible from 'react-on-visible';
import classNames from 'classnames';

import './WhatIsGingr.css';

const clientIcon = require('../../assets/img/icons/client.png');
const gingrIcon = require('../../assets/img/icons/gingr.png');
const agencyIcon = require('../../assets/img/icons/agency.png');
const establishmentIcon = require('../../assets/img/icons/establishment.png');
const gingrImg = require('../../assets/img/what_is_gingr--gingr.png');
const establishmentImg = require('../../assets/img/what_is_gingr--establishment.png');

const whatIsList = [
  {
    id: 0,
    title: 'Client',
    classTitle: 'client',
    icon: clientIcon,
    content:
      'Worldwide access to instant and guaranteed sex in a quick and effortless way. Have their information stored while remaining anonymous and pay securely, fast and confidentially',
    video: 'https://vimeo.com/194665559',
  },
  {
    id: 1,
    title: 'Gingr',
    subtitle: 'Sex-Worker',
    classTitle: 'gingr',
    icon: gingrIcon,
    content:
      'Worldwide work with only one tool which can connect to millions of clients. Recruitment and workspaces provided by Gingr Connect and Gingr Pop n Go. Receive payments directly on our platform from pre-paying clients with GG Coin. Feel safe every step of the journey with Gingr Care.',
    img: gingrImg,
  },
  {
    id: 2,
    title: 'Agency & Establishment',
    classTitle: 'agency-establishment',
    icon: establishmentIcon,
    icon2: agencyIcon,
    content:
      'State of the art management features to assist with bookings, personnel requirements and many other areas of the business. Geo-location and advertising on a site that everybody is talking about. Access to pre-paying clients and accounts to store funds from sale revenues with Gingr Bank.',
    img: establishmentImg,
  },
];
class WhatIsGingr extends React.Component {
  player: any;

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

    return (
      <div className="gg-section-container gg-section-container--what-is-gingr">
        <div className="gg-content-container">
          <h1>What is Gingr?</h1>
          <h3>
            "THE FIRST GLOBAL MARKET PLACE WITH CRYPTO PAYMENTS FOR THE PAID SEX
            INDUSTRY."
          </h3>

          <div className="list-2-col">
            {whatIsList.map((d, i) => (
              <div key={d.id} className="l2c__container">
                <div className="l2c__media">
                  {d.img && (
                    <img className="l2c__media-image" src={d.img} alt="" />
                  )}
                  {d.video && (
                    <ReactPlayer
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
                <div className={'l2c__content l2c__content--' + d.classTitle}>
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
