import * as React from 'react';
// import LocalizedStrings from 'react-localization';
// import { FooterStrings } from '../../components/l18n';
//
// export const langEn = require('../../assets/l18n/footer.en.json');
// export const strings: FooterStrings = new LocalizedStrings({
//   en: langEn,
// });

import './Footer.css';

const scene = require('../../assets/img/scene.png');
const swissFlag = require('../../assets/img/flags/switzerland.png');

class Footer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { strings: this.props.lang };
  }

  click() {
    window.open('https://admin.ggcico.io/auth/register', '_blank');
  }

  render() {
    const locations = [
      {
        country: this.state.strings.austria,
        phone: '43 720 88 07 10',
      },
      {
        country: this.state.strings.germany,
        phone: '49 303 08 07 677',
      },
      {
        country: this.state.strings.switzerland,
        phone: '41 55 588 00 91',
      },
      {
        country: this.state.strings.canada,
        phone: '1 604 900 8866',
      },
      {
        country: this.state.strings.spain,
        phone: '34 950 68 00 05',
      },
      {
        country: this.state.strings.unitedKingdom,
        phone: '44 800 086 9900',
      },
      {
        country: this.state.strings.australia,
        phone: '61 8 7150 1555',
      },
      {
        country: this.state.strings.newZealand,
        phone: '64 4 887 1055',
      },
      {
        country: this.state.strings.belgium,
        phone: '32 2 588 22 19',
      },
      {
        country: this.state.strings.denmark,
        phone: '45 89 87 40 99',
      },
      {
        country: this.state.strings.france,
        phone: '33 1 86 26 66 22',
      },
      {
        country: this.state.strings.netherlands,
        phone: '31 85 888 6189',
      },
      {
        country: this.state.strings.italy,
        phone: '39 099 944 0069',
      },
      {
        country: this.state.strings.portugal,
        phone: '351 308 804 904',
      },
      {
        country: this.state.strings.finland,
        phone: '358 9 424 550 10',
      },
      {
        country: this.state.strings.norway,
        phone: '47 23 96 63 96',
      },
      {
        country: this.state.strings.sweden,
        phone: '46 76 466 70 77',
      },
      {
        country: this.state.strings.czechRepublic,
        phone: '420 228 883 012',
      },
      {
        country: this.state.strings.hungary,
        phone: '36 84 884 000',
      },
      {
        country: this.state.strings.poland,
        phone: '48 71 716 68 78',
      },
      {
        country: this.state.strings.slovakia,
        phone: '421 48/233 36 08',
      },
      {
        country: this.state.strings.estonia,
        phone: '372 8804265',
      },
      {
        country: this.state.strings.bulgaria,
        phone: '359 2 492 5417',
      },
      {
        country: this.state.strings.latvia,
        phone: '371 66 163 771',
      },
      {
        country: this.state.strings.lithuania,
        phone: '370 447 20340',
      },
      {
        country: this.state.strings.romania,
        phone: '40 31 630 2370',
      },
      {
        country: this.state.strings.greece,
        phone: '30 2241 888026',
      },
      {
        country: this.state.strings.ireland,
        phone: '353 76 888 7008',
      },
      {
        country: this.state.strings.mexico,
        phone: '52 443 690 3990',
      },
      {
        country: this.state.strings.turkey,
        phone: '90 216 900 11 90',
      },
    ];
    return (
      <div className="gg-section-container gg-section-container--footer">
        <div
          className="gg-content-container flex-row"
          style={{ justifyContent: 'flex-start' }}
        >
          <img src={scene} alt="" className="footer-image" />

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
                  {this.state.strings.address}
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
                {this.state.strings.switzerland}
              </p>

              <p>
                {this.state.strings.phone}: +41 555 00 88 91<br />
                {this.state.strings.mobile}: +41 79 579 77 77<br />
                {this.state.strings.email}:{' '}
                <a href="mailto:info@ggcico.io">info@ggcico.io</a>
              </p>

              <p>
                {this.state.strings.companyRegistration}{' '}
                {this.state.strings.number}
                <span style={{ color: '#F39FFF' }}>CHE-461.393.191</span>
              </p>
            </div>

            <div
              className="flex-column"
              style={{ alignItems: 'flex-start', width: '100%' }}
            >
              <h4 className="footer-title">{this.state.strings.locations}</h4>
              <div className="footer-locations flex-row">
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
            ©2017 Gingr AG | {this.state.strings.allRightsReserved}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
