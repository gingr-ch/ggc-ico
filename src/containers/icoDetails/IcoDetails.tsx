import * as React from 'react';
import Carousel from 'nuka-carousel';

import Button from '../../components/button/Button';
import './IcoDetails.css';

const gingr = require(process.env.REACT_APP_MEDIA_URL + 'gingr_left.png');

import Chart from '../../components/svgChart/svgChart';
import Chart2 from '../../components/svgChart2/svgChart2';

class IcoDetails extends React.Component<any, any> {
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
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      // tslint:disable-next-line:align
    }, 0);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--ico-details">
        <div className="gg-content-container">
          <h1 className="app-header">{this.props.lang.icoDetails}</h1>
          <div className="spacer" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '24px', marginBottom: '16px' }}>
              {this.props.lang.privateSaleNow}
            </div>
            <div className="color-green" style={{ fontSize: '30px' }}>
              75% {this.props.lang.discount}
            </div>
            <div
              className="color-green"
              style={{ fontSize: '27px', marginBottom: '16px' }}
            >
              1 GGC = 0.03 EUR
            </div>
            <div className="spacer" />
            {this.state.user === 'friends' && (
              <Button
                click={this.click}
                borderColor="#00D646"
                className="btn-buy-coins"
              >
                {this.props.lang.buyCoinsNow}
              </Button>
            )}
          </div>

          <div className="spacer hide-xs" />
          <div className="spacer hide-xs" />
          <div className="spacer hide-xs" />
          <div className="spacer" />

          <Carousel autoplay={true} heightMode={'max'} wrapAround={true}>
            <Chart lang={this.props.lang} />
            <Chart2 lang={this.props.lang} />
          </Carousel>

          <img className="gingr-left" src={gingr} alt="" />
        </div>
      </div>
    );
  }
}

export default IcoDetails;
