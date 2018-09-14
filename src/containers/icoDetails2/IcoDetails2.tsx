import * as React from 'react';
import OnVisible from 'react-on-visible';

import './IcoDetails2.css';

// import Arrows from '../../components/svgArrows/svgArrows';

class IcoDetails2 extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--ico-details2">
        <div className="gg-content-container">
          <OnVisible className="hidden-content hidden-content--flip-in-right hidden-content--ico-details2">
            <table className="table-private-sale">
              <tbody>
                <tr style={{ background: '#392551' }}>
                  <td className="color--green">
                    {this.props.lang.privateSale}
                  </td>
                  <td />
                  <td className="table-private-sale__coins">750</td>
                  <td>{this.props.lang.millionCoinsOffered}</td>
                  <td className="color--green">-75%</td>
                  <td className="color--green">€ 0.03</td>
                </tr>

                <tr style={{ background: '#4c306a' }}>
                  <td className="color--red">
                    {this.props.lang.publicPreSale}
                  </td>
                  <td />
                  <td className="table-private-sale__coins">150</td>
                  <td>{this.props.lang.millionCoinsOffered}</td>
                  <td className="color--red">-50%</td>
                  <td className="color--red">€ 0.06</td>
                </tr>

                <tr style={{ background: '#392551' }}>
                  <td className="color--purple">
                    {this.props.lang.publicMainSale}
                  </td>
                  <td>{this.props.lang.tier} 1</td>
                  <td className="table-private-sale__coins">50</td>
                  <td>{this.props.lang.millionCoinsOffered}</td>
                  <td className="color--red">-33%</td>
                  <td className="color--purple">€ 0.08</td>
                </tr>
                <tr style={{ background: '#392551' }}>
                  <td className="color--purple">
                    {this.props.lang.publicMainSale}
                  </td>
                  <td>{this.props.lang.tier} 2</td>
                  <td className="table-private-sale__coins">30</td>
                  <td>{this.props.lang.millionCoinsOffered}</td>
                  <td className="color--red">-16.6%</td>
                  <td className="color--purple">€ 0.10</td>
                </tr>
                <tr style={{ background: '#392551' }}>
                  <td className="color--purple">
                    {this.props.lang.publicMainSale}
                  </td>
                  <td>{this.props.lang.tier} 3</td>
                  <td className="table-private-sale__coins">20</td>
                  <td>{this.props.lang.millionCoinsOffered}</td>
                  <td />
                  <td className="color--purple">€ 0.12</td>
                </tr>
              </tbody>
            </table>
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default IcoDetails2;
