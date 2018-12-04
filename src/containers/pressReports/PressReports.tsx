import * as React from 'react';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import './PressReports.css';

import Button from '../../components/button/Button';
import Chart from '../../components/svgChart/svgChart';

const users = {
  friends1: 'L247',
  friends2: 'L229',
  friends3: 'L198',
  friends4: 'L230',
  friends5: 'L224',
  friends6: 'L231',
  friends7: 'L232',
  friends8: 'L234',
  friends9: 'L235',
  friends10: 'L236',
  friends11: 'L237',
  friends12: 'L238',
  friends13: 'L239',
  friends14: 'L240',
  friends15: 'L241',
  friends16: 'L242',
  friends17: 'L243',
  friends18: 'L244',
  friends19: 'L245',
  friends20: 'L246',
};

let refcode = '';

class PressReports extends React.Component<any, any> {
  percentage: number;

  constructor(props: any) {
    super(props);

    this.state = {
      user: 'friends',
    };
  }

  click() {
    let url = 'https://admin.ggcico.io/auth/register?refcode=' + refcode;
    window.open(url, '_blank');
  }

  componentDidMount() {
    this.setState({ user: this.props.user });
  }

  render() {
    if (isWidthUp('sm', this.props.width)) {
      this.percentage = 200;
    } else {
      this.percentage = 100;
    }

    if (this.state.user) {
      refcode = users[this.state.user];
    }

    return (
      <div className="gg-section-container gg-section-container--press-reports">
        <div className="gg-content-container">
          <Chart lang={this.props.lang} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            className="buy-coins-container"
          >
            <div
              style={{
                fontSize: '24px',
                marginBottom: '16px',
                textTransform: 'uppercase',
              }}
            >
              {this.props.lang.privateSale} {this.props.lang.now}
            </div>
            <div style={{ fontSize: '30px', color: 'rgba(32, 206, 136, 1)' }}>
              75% {this.props.lang.discount}
            </div>
            <div
              style={{
                fontSize: '27px',
                marginBottom: '16px',
                color: 'rgba(32, 206, 136, 1)',
              }}
            >
              1 GGC = 0.03 EUR
            </div>

            <div className="spacer hide show-xs" />

            <Button
              click={this.click}
              borderColor="rgba(32, 206, 136, 1)"
              className="btn-buy-coins"
            >
              {this.props.lang.buyCoinsNow}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withWidth()(PressReports);
