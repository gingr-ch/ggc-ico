import * as React from 'react';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import './PressReports.css';

import Button from '../../components/button/Button';
import Chart from '../../components/svgChart/svgChart';

class PressReports extends React.Component<any, any> {
  percentage: number;

  constructor(props: any) {
    super(props);

    this.state = {
      user: 'friends',
    };
  }

  click() {
    window.open('https://admin.ggcico.io/auth/register', '_blank');
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
              {this.props.lang.privateSale}{' '}
              {this.state.user && this.state.user.indexOf('friends') === 0 && this.props.lang.now}
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

            {this.state.user.indexOf('friends') === 0 && (
              <Button
                click={this.click}
                borderColor="rgba(32, 206, 136, 1)"
                className="btn-buy-coins"
              >
                {this.props.lang.buyCoinsNow}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withWidth()(PressReports);
