import * as React from 'react';
// import LocalizedStrings from 'react-localization';
// import { RoadmapStrings } from '../../components/l18n';
//
// export const langEn = require('../../assets/l18n/roadmap.en.json');
// export const strings: RoadmapStrings = new LocalizedStrings({
//   en: langEn,
// });

import './Roadmap.css';
import SvgRoadmap from '../../components/svgRoadmap/Roadmap';

// const roadmap = require(process.env.REACT_APP_MEDIA_URL + 'roadmap.svg');
const balloon = require(process.env.REACT_APP_MEDIA_URL + 'gg_balloon.png');
const gingr = require(process.env.REACT_APP_MEDIA_URL + 'gingr_balloons.png');
const roadMap = require(process.env.REACT_APP_MEDIA_URL + 'roadmap_mobile.png');
// const gingr = require(process.env.REACT_APP_MEDIA_URL + 'gingr_necklace.png');

// const cardsData = [
//   {
//     image: popngo,
//     title: 'Gingr Pop N Go',
//     content:
//       'Never has it been so easy to rent property and earn at least three times more. Pop N Go lets you turn a room, apartment or house in to a temporary sex working space.',
//   },
//   {
//     image: gingrBank,
//     title: 'Gingr Bank',
//     content:
//       'The worlds first accessible bank to the prostitution industry. Solving the cash problem worldwide to store funds for sex-workers, establishments and agencies.',
//   },
//   {
//     image: gingrCare,
//     title: 'Gingr Care',
//     content:
//       'A space for all sex-workers that can come for help and support in a confidential surrounding with many facilities and professionals. Our physical presence to allow us to be closer and in direct contact with our users and the whole community.',
//   },
//   {
//     image: gingrConnect,
//     title: 'Gingr Connect',
//     content:
//       'Our recruitment section for prostitution bringing together on one platform sex-workers, establishments and agencies. It will be the site with the most employers and job vacancy offers globally for sex-workers.',
//   },
// ];

class Roadmap extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--roadmap">
        <div className="gg-content-container">
          <h1>{this.props.lang.roadmap}</h1>
          <h2>{this.props.lang.datesComingSoon}</h2>

          <div className="hide-xs">
            <SvgRoadmap lang={this.props.lang} />
          </div>

          <div className="hide show-xs">
            <img src={roadMap} alt="" />
          </div>

          <div
            className="flex-row"
            style={{ alignItems: 'stretch', justifyContent: 'center' }}
          >
            <div
              className="flex-column"
              style={{ justifyContent: 'flex-end', paddingTop: '150px' }}
            >
              <img src={gingr} alt="" />
            </div>

            <div
              className="flex-column roadmap-ballon-container"
              style={{ justifyContent: 'flex-start' }}
            >
              <img src={balloon} alt="" />
              <h4>"{this.props.lang.oneCryptoCurrencyFromThousands}"</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Roadmap;
