import * as React from 'react';

import './IcoDetails2.css';

// const gingr = require('../../assets/img/gingr_left.png');

class IcoDetails2 extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--ico-details2">
        <div className="gg-content-container">
          <table className="table-private-sale">
            <tbody>
              <tr style={{ background: '#392551' }}>
                <td className="color--green">PRIVATE SALE</td>
                <td />
                <td />
                <td>0 - 17.5</td>
                <td>million coins offered</td>
                <td className="color--green">-70%</td>
                <td className="color--green">€ 0.03</td>
              </tr>
              <tr style={{ background: '#4c306a' }}>
                <td className="color--red">PRE-SALE</td>
                <td>Day 1</td>
                <td>early birds</td>
                <td>17.5 - X</td>
                <td>million coins offered</td>
                <td className="color--red">-50%</td>
                <td className="color--red">€ 0.05</td>
              </tr>
              <tr style={{ background: '#4c306a' }}>
                <td />
                <td>Day 2-10</td>
                <td />
                <td>X - 87.5</td>
                <td>million coins offered</td>
                <td className="color--red">-25%</td>
                <td className="color--red">€ 0.075</td>
              </tr>
              <tr style={{ background: '#4c306a' }}>
                <td />
                <td>Day 10-20</td>
                <td />
                <td>87.5 - 192.5</td>
                <td>million coins offered</td>
                <td className="color--red">-15%</td>
                <td className="color--red">€ 0.085</td>
              </tr>
              <tr style={{ background: '#4c306a' }}>
                <td />
                <td>Day 20-30</td>
                <td />
                <td>192.5 - 297.5</td>
                <td>million coins offered</td>
                <td className="color--red">-10%</td>
                <td className="color--red">€ 0.09</td>
              </tr>
              <tr style={{ background: '#392551' }}>
                <td className="color--purple">MAIN-SALE</td>
                <td>Day 1</td>
                <td>early birds</td>
                <td>297.5 - X</td>
                <td>million coins offered</td>
                <td />
                <td className="color--purple">€ 0.095</td>
              </tr>
              <tr style={{ background: '#392551' }}>
                <td />
                <td>Day 2-31</td>
                <td />
                <td>X - 600</td>
                <td>million coins offered</td>
                <td />
                <td className="color--purple">€ 0.245</td>
              </tr>
              <tr style={{ background: '#392551' }}>
                <td />
                <td />
                <td />
                <td />
                <td style={{ maxWidth: '200px' }}>
                  € 0.005 each 24 hour for 30 remaining days or until all coins
                  are sold. Max reach € 0.245
                </td>
                <td />
                <td />
              </tr>
              <tr style={{ background: '#4c306a' }}>
                <td className="color--cyan">LAST CHANCE</td>
                <td />
                <td />
                <td>100</td>
                <td>million coins offered</td>
                <td />
                <td className="color--cyan">€ 0.30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default IcoDetails2;
