import * as React from 'react';
// import LocalizedStrings from 'react-localization';
// import { GlobalLeaderStrings } from '../../components/l18n';
//
// export const langEn = require('../../assets/l18n/global-leader.en.json');
// export const strings: GlobalLeaderStrings = new LocalizedStrings({
//   en: langEn,
// });

import './GlobalLeader.css';

// const balloon = require(process.env.REACT_APP_MEDIA_URL + 'gg_balloon.png');
// const gingr = require(process.env.REACT_APP_MEDIA_URL + 'gingr_balloons.png');

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

class GlobalLeader extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--global-leader">
        <div className="gg-content-container">
          <h1>
            {this.props.lang.globalLeader}
            <br />
            {this.props.lang.inTheMarket}
          </h1>
          <h4>"{this.props.lang.bePartOfOurVision}"</h4>
        </div>
      </div>
    );
  }
}

export default GlobalLeader;
