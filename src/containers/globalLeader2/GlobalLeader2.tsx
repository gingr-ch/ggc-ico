import * as React from 'react';
import OnVisible from 'react-on-visible';

import './GlobalLeader2.css';

import Arrows from '../../components/svgArrows/svgArrows';

class GlobalLeader2 extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--global-leader2">
        <div className="gg-content-container">
          <OnVisible className="hidden-content hidden-content--arrows">
            <div className="table-arrow">
              <Arrows />
            </div>
          </OnVisible>
          <OnVisible className="hidden-content hidden-content--flip-in-right hidden-content--ico-details2">
            <table className="table-market-cap">
              <tbody>
                <tr className="yellow-text">
                  <td>2019</td>
                  <td>2019 / 2020</td>
                  <td />
                  <td>2020</td>
                  <td />
                  <td>2021</td>
                  <td>2021 / 2022</td>
                  <td>2022</td>
                </tr>
                <tr style={{ height: '33px' }}>
                  <td
                    style={{
                      background: '#ffd643',
                      color: '#5a068b',
                      textAlign: 'left',
                      fontSize: '17px',
                    }}
                  />
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
                  />
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
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default GlobalLeader2;
