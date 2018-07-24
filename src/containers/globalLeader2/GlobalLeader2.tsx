import * as React from 'react';
// import LocalizedStrings from 'react-localization';
// import { GlobalLeaderStrings } from '../../components/l18n';
//
// export const langEn = require('../../assets/l18n/global-leader.en.json');
// export const strings: GlobalLeaderStrings = new LocalizedStrings({
//   en: langEn,
// });

import './GlobalLeader2.css';

// const balloon = require('../../assets/img/gg_balloon.png');
// const gingr = require('../../assets/img/gingr_balloons.png');

// const gingr = require('../../assets/img/gingr_necklace.png');

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
    this.state = { strings: this.props.lang };
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
                  {this.state.strings.softCap}
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
                  {this.state.strings.maxCap}
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
                <td>{this.state.strings.switzerland}</td>
                <td>{this.state.strings.unitedKingdom}</td>
                <td>{this.state.strings.france}</td>
                <td>{this.state.strings.portugal}</td>
                <td>{this.state.strings.czechRepublic}</td>
                <td>{this.state.strings.mexico}</td>
                <td>{this.state.strings.africa}</td>
                <td>{this.state.strings.worldwideBranding}</td>
              </tr>
              <tr>
                <td>{this.state.strings.germany}</td>
                <td>{this.state.strings.newZealand}</td>
                <td>{this.state.strings.luxemburg}</td>
                <td>{this.state.strings.finland}</td>
                <td>{this.state.strings.poland}</td>
                <td>{this.state.strings.venezuela}</td>
                <td>{this.state.strings.asia}</td>
                <td />
              </tr>
              <tr>
                <td>{this.state.strings.austria}</td>
                <td>{this.state.strings.australia}</td>
                <td>{this.state.strings.italy}</td>
                <td>{this.state.strings.norway}</td>
                <td>{this.state.strings.hungary}</td>
                <td>{this.state.strings.columbia}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>{this.state.strings.lichtenstein}</td>
                <td>{this.state.strings.canada}</td>
                <td>{this.state.strings.belgium}</td>
                <td>{this.state.strings.sweden}</td>
                <td>{this.state.strings.slovakia}</td>
                <td>{this.state.strings.brasil}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td>{this.state.strings.ireland}</td>
                <td>{this.state.strings.netherlands}</td>
                <td />
                <td>{this.state.strings.lithuania}</td>
                <td>{this.state.strings.argentina}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td>{this.state.strings.denmark}</td>
                <td />
                <td>{this.state.strings.latvia}</td>
                <td>{this.state.strings.paraguay}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td>{this.state.strings.greece}</td>
                <td />
                <td>{this.state.strings.estonia}</td>
                <td>{this.state.strings.peru}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td>{this.state.strings.spain}</td>
                <td />
                <td>{this.state.strings.bulgaria}</td>
                <td>{this.state.strings.equador}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td>{this.state.strings.romania}</td>
                <td>{this.state.strings.uruguay}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>{this.state.strings.costaRica}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>{this.state.strings.panama}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>{this.state.strings.nicaragua}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>{this.state.strings.bolivia}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>{this.state.strings.chile}</td>
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
