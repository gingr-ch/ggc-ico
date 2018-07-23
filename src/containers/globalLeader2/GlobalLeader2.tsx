import * as React from 'react';
import LocalizedStrings from 'react-localization';
import { GlobalLeaderStrings } from '../../components/l18n';

export const langEn = require('../../assets/l18n/global-leader.en.json');
export const strings: GlobalLeaderStrings = new LocalizedStrings({
  en: langEn,
});

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

class GlobalLeader2 extends React.Component {
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
                  {strings.softCap}
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
                  {strings.maxCap}
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
                <td>{strings.switzerland}</td>
                <td>{strings.unitedKingdom}</td>
                <td>{strings.france}</td>
                <td>{strings.portugal}</td>
                <td>{strings.czechRepublic}</td>
                <td>{strings.mexico}</td>
                <td>{strings.africa}</td>
                <td>{strings.worldwideBranding}</td>
              </tr>
              <tr>
                <td>{strings.germany}</td>
                <td>{strings.newZealand}</td>
                <td>{strings.luxemburg}</td>
                <td>{strings.finland}</td>
                <td>{strings.poland}</td>
                <td>{strings.venezuela}</td>
                <td>{strings.asia}</td>
                <td />
              </tr>
              <tr>
                <td>{strings.austria}</td>
                <td>{strings.australia}</td>
                <td>{strings.italy}</td>
                <td>{strings.norway}</td>
                <td>{strings.hungary}</td>
                <td>{strings.columbia}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td>{strings.lichtenstein}</td>
                <td>{strings.canada}</td>
                <td>{strings.belgium}</td>
                <td>{strings.sweden}</td>
                <td>{strings.slovakia}</td>
                <td>{strings.brasil}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td>{strings.ireland}</td>
                <td>{strings.netherlands}</td>
                <td />
                <td>{strings.lithuania}</td>
                <td>{strings.argentina}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td>{strings.denmark}</td>
                <td />
                <td>{strings.latvia}</td>
                <td>{strings.paraguay}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td>{strings.greece}</td>
                <td />
                <td>{strings.estonia}</td>
                <td>{strings.peru}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td>{strings.spain}</td>
                <td />
                <td>{strings.bulgaria}</td>
                <td>{strings.equador}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td>{strings.romania}</td>
                <td>{strings.uruguay}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>{strings.costaRica}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>{strings.panama}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>{strings.nicaragua}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>{strings.bolivia}</td>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>{strings.chile}</td>
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
