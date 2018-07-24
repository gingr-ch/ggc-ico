import * as React from 'react';
// import LocalizedStrings from 'react-localization';
// import { IcoDetailsStrings } from '../../components/l18n';
//
// export const langEn = require('../../assets/l18n/ico-details.en.json');
// export const strings: IcoDetailsStrings = new LocalizedStrings({
//   en: langEn,
// });

import './IcoDetails2.css';

// const gingr = require('../../assets/img/gingr_left.png');

class IcoDetails2 extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { strings: this.props.lang };
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--ico-details2">
        <div className="gg-content-container">
          <table className="table-private-sale">
            <tbody>
              <tr style={{ background: '#392551' }}>
                <td className="color--green">
                  {this.state.strings.privateSale}
                </td>
                <td />
                <td />
                <td>0 - 17.5</td>
                <td>{this.state.strings.millionCoinsOffered}</td>
                <td className="color--green">-70%</td>
                <td className="color--green">€ 0.03</td>
              </tr>
              <tr style={{ background: '#4c306a' }}>
                <td className="color--red">{this.state.strings.preSale}</td>
                <td>{this.state.strings.day} 1</td>
                <td>{this.state.strings.earlyBirds}</td>
                <td>17.5 - X</td>
                <td>{this.state.strings.millionCoinsOffered}</td>
                <td className="color--red">-50%</td>
                <td className="color--red">€ 0.05</td>
              </tr>
              <tr style={{ background: '#4c306a' }}>
                <td />
                <td>{this.state.strings.day} 2-10</td>
                <td />
                <td>X - 87.5</td>
                <td>{this.state.strings.millionCoinsOffered}</td>
                <td className="color--red">-25%</td>
                <td className="color--red">€ 0.075</td>
              </tr>
              <tr style={{ background: '#4c306a' }}>
                <td />
                <td>{this.state.strings.day} 10-20</td>
                <td />
                <td>87.5 - 192.5</td>
                <td>{this.state.strings.millionCoinsOffered}</td>
                <td className="color--red">-15%</td>
                <td className="color--red">€ 0.085</td>
              </tr>
              <tr style={{ background: '#4c306a' }}>
                <td />
                <td>{this.state.strings.day} 20-30</td>
                <td />
                <td>192.5 - 297.5</td>
                <td>{this.state.strings.millionCoinsOffered}</td>
                <td className="color--red">-10%</td>
                <td className="color--red">€ 0.09</td>
              </tr>
              <tr style={{ background: '#392551' }}>
                <td className="color--purple">{this.state.strings.mainSale}</td>
                <td>{this.state.strings.day} 1</td>
                <td>{this.state.strings.earlyBirds}</td>
                <td>297.5 - X</td>
                <td>{this.state.strings.millionCoinsOffered}</td>
                <td />
                <td className="color--purple">€ 0.095</td>
              </tr>
              <tr style={{ background: '#392551' }}>
                <td />
                <td>{this.state.strings.day} 2-31</td>
                <td />
                <td>X - 600</td>
                <td>{this.state.strings.millionCoinsOffered}</td>
                <td />
                <td className="color--purple">€ 0.245</td>
              </tr>
              <tr style={{ background: '#392551' }}>
                <td />
                <td />
                <td />
                <td />
                <td style={{ maxWidth: '200px' }}>
                  € 0.005 {this.state.strings.each24Hour} € 0.245
                </td>
                <td />
                <td />
              </tr>
              <tr style={{ background: '#4c306a' }}>
                <td className="color--cyan">{this.state.strings.lastChance}</td>
                <td />
                <td />
                <td>100</td>
                <td>{this.state.strings.millionCoinsOffered}</td>
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
