import * as React from 'react';
// import LocalizedStrings from 'react-localization';
// import { GlobalLeaderStrings } from '../../components/l18n';
//
// export const langEn = require('../../assets/l18n/global-leader.en.json');
// export const strings: GlobalLeaderStrings = new LocalizedStrings({
//   en: langEn,
// });

import './GlobalLeader2.css';

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

class GlobalLeader2 extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--global-leader2">
        <div className="gg-content-container">
          <table className="table-market-cap">
            <tbody>
              <tr className="yellow-text">
                <td>2018</td>
                <td>2018 / 2019</td>
                <td />
                <td>2019</td>
                <td />
                <td>2020</td>
                <td>2020 / 2021</td>
                <td>2021</td>
              </tr>
              <tr>
                <td
                  style={{
                    background: '#ffd643',
                    color: '#5a068b',
                    textAlign: 'left',
                    fontSize: '17px',
                  }}
                >
                  {this.props.lang.softCap}
                </td>
                <td style={{ background: '#ffd643' }} />
                <td style={{ background: '#ffd643' }} />
                <td style={{ background: '#ffd643' }} />
                <td style={{ background: '#ffd643' }} />
                <td style={{ background: '#ffd643' }} />
                <td style={{ background: '#ffd643' }} />
                <td
                  style={{
                    background: '#ffd643',
                    color: '#5a068b',
                    textAlign: 'right',
                    fontSize: '17px',
                  }}
                >
                  {this.props.lang.maxCap}
                </td>
              </tr>
              <tr className="yellow-text">
                <td>1 M</td>
                <td>4.5 M</td>
                <td>12 M</td>
                <td>25.5 M</td>
                <td>31 M</td>
                <td>37.5 M</td>
                <td>49-76.5 M</td>
                <td>100 M</td>
              </tr>
              <tr>
                <td>{this.props.lang.switzerland}</td>
                <td>{this.props.lang.unitedKingdom}</td>
                <td>{this.props.lang.france}</td>
                <td>{this.props.lang.portugal}</td>
                <td>{this.props.lang.czechRepublic}</td>
                <td>{this.props.lang.mexico}</td>
                <td>{this.props.lang.africa}</td>
                <td>{this.props.lang.worldwideBranding}</td>
              </tr>
              <tr>
                <td>{this.props.lang.germany}</td>
                <td>{this.props.lang.newZealand}</td>
                <td>{this.props.lang.luxemburg}</td>
                <td>{this.props.lang.finland}</td>
                <td>{this.props.lang.poland}</td>
                <td>{this.props.lang.venezuela}</td>
                <td>{this.props.lang.asia}</td>
                <td />
              </tr>
              <tr>
                <td>{this.props.lang.austria}</td>
                <td>{this.props.lang.australia}</td>
                <td>{this.props.lang.italy}</td>
                <td>{this.props.lang.norway}</td>
                <td>{this.props.lang.hungary}</td>
                <td>{this.props.lang.columbia}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>{this.props.lang.lichtenstein}</td>
                <td>{this.props.lang.canada}</td>
                <td>{this.props.lang.belgium}</td>
                <td>{this.props.lang.sweden}</td>
                <td>{this.props.lang.slovakia}</td>
                <td>{this.props.lang.brasil}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td>{this.props.lang.ireland}</td>
                <td>{this.props.lang.netherlands}</td>
                <td />
                <td>{this.props.lang.lithuania}</td>
                <td>{this.props.lang.argentina}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td>{this.props.lang.denmark}</td>
                <td />
                <td>{this.props.lang.latvia}</td>
                <td>{this.props.lang.paraguay}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td>{this.props.lang.greece}</td>
                <td />
                <td>{this.props.lang.estonia}</td>
                <td>{this.props.lang.peru}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td>{this.props.lang.spain}</td>
                <td />
                <td>{this.props.lang.bulgaria}</td>
                <td>{this.props.lang.equador}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td>{this.props.lang.romania}</td>
                <td>{this.props.lang.uruguay}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>{this.props.lang.costaRica}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>{this.props.lang.panama}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>{this.props.lang.nicaragua}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>{this.props.lang.bolivia}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>{this.props.lang.chile}</td>
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default GlobalLeader2;
