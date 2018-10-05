import * as React from 'react';
import OnVisible from 'react-on-visible';
import LazyLoad from 'react-lazyload';

import './Footer.css';

const scene = require(process.env.REACT_APP_MEDIA_URL + 'scene.png');
const swissFlag = require(process.env.REACT_APP_MEDIA_URL +
  'flags/switzerland.png');

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

class Footer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  click() {
    let url = 'https://admin.ggcico.io/auth/register?refcode=' + refcode;
    window.open(url, '_blank');
  }

  render() {
    if (this.props.user) {
      refcode = users[this.props.user];
    }

    const locations = [
      {
        country: this.props.lang.austria,
        phone: '43 720 88 07 10',
      },
      {
        country: this.props.lang.germany,
        phone: '49 303 08 07 677',
      },
      {
        country: this.props.lang.switzerland,
        phone: '41 55 588 00 91',
      },
      {
        country: this.props.lang.canada,
        phone: '1 604 900 8866',
      },
      {
        country: this.props.lang.spain,
        phone: '34 950 68 00 05',
      },
      {
        country: this.props.lang.unitedKingdom,
        phone: '44 800 086 9900',
      },
      {
        country: this.props.lang.australia,
        phone: '61 8 7150 1555',
      },
      {
        country: this.props.lang.newZealand,
        phone: '64 4 887 1055',
      },
      {
        country: this.props.lang.belgium,
        phone: '32 2 588 22 19',
      },
      {
        country: this.props.lang.denmark,
        phone: '45 89 87 40 99',
      },
      {
        country: this.props.lang.netherlands,
        phone: '31 13 808 0077',
      },
      {
        country: this.props.lang.portugal,
        phone: '351 308 804 904',
      },
      {
        country: this.props.lang.finland,
        phone: '358 9 424 550 10',
      },
      {
        country: this.props.lang.sweden,
        phone: '46 76 466 70 77',
      },
      {
        country: this.props.lang.hungary,
        phone: '36 84 884 000',
      },
      {
        country: this.props.lang.poland,
        phone: '48 71 716 68 78',
      },
      {
        country: this.props.lang.slovakia,
        phone: '421 48/233 36 08',
      },
      {
        country: this.props.lang.estonia,
        phone: '372 8804265',
      },
      {
        country: this.props.lang.bulgaria,
        phone: '359 2 492 5417',
      },
      {
        country: this.props.lang.latvia,
        phone: '371 66 163 771',
      },
      {
        country: this.props.lang.romania,
        phone: '40 31 630 2370',
      },
      {
        country: this.props.lang.greece,
        phone: '30 2241 888026',
      },
      {
        country: this.props.lang.ireland,
        phone: '353 76 888 7008',
      },
      {
        country: this.props.lang.mexico,
        phone: '52 443 690 3990',
      },
      {
        country: this.props.lang.turkey,
        phone: '90 216 900 11 90',
      },
    ];
    return (
      <div className="gg-section-container gg-section-container--footer">
        <div
          className="gg-content-container flex-row"
          style={{ justifyContent: 'flex-start' }}
        >
          <LazyLoad offset={500} height={745}>
            <OnVisible
              className="hidden-content hidden-content--fade-in"
              percent={-100}
            >
              <img src={scene} alt="" className="footer-image" />
            </OnVisible>
          </LazyLoad>

          <div className="footer-content flex-row">
            <div
              className="footer-address flex-column"
              style={{ alignItems: 'flex-start' }}
            >
              <div
                className="flex-row"
                style={{ justifyContent: 'flex-start' }}
              >
                <h4 className="footer-title" style={{ marginRight: '16px' }}>
                  {this.props.lang.address}
                </h4>
                <img
                  src={swissFlag}
                  alt=""
                  style={{ width: '24px', height: '24px' }}
                />
              </div>
              <p>
                Gingr AG
                <br />
                Badenerstrasse 809
                <br />
                8048 Zürich
                <br />
                {this.props.lang.switzerland}
              </p>

              <p>
                {this.props.lang.phone}: +41 555 00 88 91
                <br />
                {this.props.lang.mobile}: +41 79 579 77 77
                <br />
                {this.props.lang.email}:{' '}
                <a href="mailto:info@ggcico.io">info@ggcico.io</a>
              </p>

              <p>
                {this.props.lang.companyRegistration} {this.props.lang.number}
                <span style={{ color: '#F39FFF' }}>CHE-461.393.191</span>
              </p>
            </div>

            <div
              className="flex-column"
              style={{ alignItems: 'flex-start', width: '100%' }}
            >
              <h4 className="footer-title">{this.props.lang.locations}</h4>
              <div className="footer-locations flex-row">
                <div
                  className="locations-list flex-column"
                  style={{
                    padding: '0px',
                    justifyContent: 'flex-start',
                    flex: '1 1 50%',
                  }}
                >
                  {locations.slice(0, 13).map((location, i) => (
                    <div key={i} className="locations-item flex-row">
                      <div>{location.country}</div>
                      <div>+ {location.phone}</div>
                    </div>
                  ))}
                </div>
                <div
                  className="locations-list flex-column"
                  style={{
                    padding: '0px',
                    justifyContent: 'flex-start',
                    flex: '1 1 50%',
                  }}
                >
                  {locations.slice(13).map((location, i) => (
                    <div key={i} className="locations-item flex-row">
                      <div>{location.country}</div>
                      <div>+ {location.phone}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            ©2018 Gingr AG | {this.props.lang.allRightsReserved}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
