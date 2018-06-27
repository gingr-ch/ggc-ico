import * as React from 'react';

import './IcoDetails2.css';

// const gingr = require('../../assets/img/gingr_left.png');

class IcoDetails2 extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--ico-details">
        <div className="gg-content-container">
          <table>
            <tr>
              <td>PRIVATE SALE</td>
              <td />
              <td />
              <td>0 - 17.5</td>
              <td>million coins offered</td>
              <td>-70%</td>
              <td>€ 0.03</td>
            </tr>
            <tr>
              <td>PRE-SALE</td>
              <td>Day 1</td>
              <td>early birds</td>
              <td>17.5 - X</td>
              <td>million coins offered</td>
              <td>-50%</td>
              <td>€ 0.05</td>
            </tr>
            <tr>
              <td />
              <td>Day 2-10</td>
              <td />
              <td>X - 87.5</td>
              <td>million coins offered</td>
              <td>-25%</td>
              <td>€ 0.075</td>
            </tr>
            <tr>
              <td />
              <td>Day 10-20</td>
              <td />
              <td>87.5 - 192.5</td>
              <td>million coins offered</td>
              <td>-15%</td>
              <td>€ 0.085</td>
            </tr>
            <tr>
              <td />
              <td>Day 20-30</td>
              <td />
              <td>192.5 - 297.5</td>
              <td>million coins offered</td>
              <td>-10%</td>
              <td>€ 0.09</td>
            </tr>
            <tr>
              <td>MAIN-SALE</td>
              <td>Day 1</td>
              <td>early birds</td>
              <td>297.5 - X</td>
              <td>million coins offered</td>
              <td />
              <td>€ 0.095</td>
            </tr>
            <tr>
              <td />
              <td>Day 2-31</td>
              <td />
              <td>X - 600</td>
              <td>million coins offered</td>
              <td />
              <td>€ 0.245</td>
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td>
                € 0.005 each 24 hour for 30 remaining days or until all coins
                are sold. Max reach € 0.245
              </td>
              <td />
              <td />
            </tr>
            <tr>
              <td>LAST CHANCE</td>
              <td />
              <td />
              <td />
              <td>100</td>
              <td>million coins offered</td>
              <td>€ 0.30</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default IcoDetails2;
