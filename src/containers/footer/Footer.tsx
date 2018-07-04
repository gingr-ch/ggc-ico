import * as React from 'react';

import './Footer.css';

const scene = require('../../assets/img/scene.png');
const swissFlag = require('../../assets/img/flags/switzerland.png');

const locations = [
  {
    country: 'Austria',
    phone: '43 720 88 07 10',
  },
  {
    country: 'Germany',
    phone: '49 303 08 07 677',
  },
  {
    country: 'Switzerland',
    phone: '41 55 588 00 91',
  },
  {
    country: 'Canada',
    phone: '1 604 900 8866',
  },
  {
    country: 'Spain',
    phone: '34 950 68 00 05',
  },
  {
    country: 'United Kingdom',
    phone: '44 800 086 9900',
  },
  {
    country: 'Australia',
    phone: '61 8 7150 1555',
  },
  {
    country: 'New Zealand',
    phone: '64 4 887 1055',
  },
  {
    country: 'Belgium',
    phone: '32 2 588 22 19',
  },
  {
    country: 'Denmark',
    phone: '45 89 87 40 99',
  },
  {
    country: 'France',
    phone: '33 1 86 26 66 22',
  },
  {
    country: 'Netherlands',
    phone: '31 85 888 6189',
  },
  {
    country: 'Italy',
    phone: '39 099 944 0069',
  },
  {
    country: 'Portugal',
    phone: '351 308 804 904',
  },
  {
    country: 'Finland',
    phone: '358 9 424 550 10',
  },
  {
    country: 'Norway',
    phone: '47 23 96 63 96',
  },
  {
    country: 'Sweden',
    phone: '46 76 466 70 77',
  },
  {
    country: 'Czech Republic',
    phone: '420 228 883 012',
  },
  {
    country: 'Hungary',
    phone: '36 84 884 000',
  },
  {
    country: 'Poland',
    phone: '48 71 716 68 78',
  },
  {
    country: 'Slovakia',
    phone: '421 48/233 36 08',
  },
  {
    country: 'Estonia',
    phone: '372 8804265',
  },
  {
    country: 'Bulgaria',
    phone: '359 2 492 5417',
  },
  {
    country: 'Latvia',
    phone: '371 66 163 771',
  },
  {
    country: 'Lithuania',
    phone: '370 447 20340',
  },
  {
    country: 'Romania',
    phone: '40 31 630 2370',
  },
  {
    country: 'Greece',
    phone: '30 2241 888026',
  },
  {
    country: 'Ireland',
    phone: '353 76 888 7008',
  },
  {
    country: 'Mexico',
    phone: '52 443 690 3990',
  },
  {
    country: 'Turkey',
    phone: '90 216 900 11 90',
  },
];

class Footer extends React.Component {
  click() {
    window.open('https://admin.ggcico.io/auth/register', '_blank');
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--footer">
        <div
          className="gg-content-container flex-row"
          style={{ justifyContent: 'flex-start' }}
        >
          <img src={scene} alt="" style={{ marginTop: '-439px' }} />

          <div
            className="flex-row"
            style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}
          >
            <div
              className="footer-address flex-column"
              style={{ alignItems: 'flex-start' }}
            >
              <div
                className="flex-row"
                style={{ justifyContent: 'flex-start' }}
              >
                <h4 className="footer-title" style={{ marginRight: '16px' }}>
                  Address
                </h4>
                <img
                  src={swissFlag}
                  alt=""
                  style={{ width: '24px', height: '24px' }}
                />
              </div>
              <p>
                Gingr AG<br />
                Badenerstrasse 809<br />
                8048 Zürich<br />
                Switzerland
              </p>

              <p>
                Phone: +41 555 00 88 91<br />
                Mobile: +41 79 579 77 77<br />
                Email: <a href="mailto:info@ggcico.io">info@ggcico.io</a>
              </p>

              <p>
                Company Registration No.
                <span style={{ color: '#F39FFF' }}>CHE-461.393.191</span>
              </p>
            </div>

            <div
              className="flex-column"
              style={{ alignItems: 'flex-start', width: '100%' }}
            >
              <h4 className="footer-title">Locations</h4>
              <div
                className="flex-row"
                style={{
                  alignItems: 'flex-start',
                }}
              >
                <div
                  className="locations-list flex-column"
                  style={{
                    padding: '0px',
                    justifyContent: 'flex-start',
                    flex: '1 1 50%',
                  }}
                >
                  {locations.slice(0, 15).map(location => (
                    <div className="locations-item flex-row">
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
                  {locations.slice(15).map(location => (
                    <div className="locations-item flex-row">
                      <div>{location.country}</div>
                      <div>+ {location.phone}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            ©2017 Gingr AG | All Rights Reserved
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
