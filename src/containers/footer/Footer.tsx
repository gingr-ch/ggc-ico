import * as React from 'react';
import OnVisible from 'react-on-visible';
// import LocalizedStrings from 'react-localization';
// import { FooterStrings } from '../../components/l18n';
//
// export const langEn = require('../../assets/l18n/footer.en.json');
// export const strings: FooterStrings = new LocalizedStrings({
//   en: langEn,
// });

import './Footer.css';

const scene = require(process.env.REACT_APP_MEDIA_URL + 'scene.png');
const swissFlag = require(process.env.REACT_APP_MEDIA_URL +
  'flags/switzerland.png');

class Footer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  click() {
    window.open('https://admin.ggcico.io/auth/register', '_blank');
  }

  render() {
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
        country: this.props.lang.france,
        phone: '33 1 86 26 66 22',
      },
      {
        country: this.props.lang.netherlands,
        phone: '31 85 888 6189',
      },
      {
        country: this.props.lang.italy,
        phone: '39 099 944 0069',
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
        country: this.props.lang.norway,
        phone: '47 23 96 63 96',
      },
      {
        country: this.props.lang.sweden,
        phone: '46 76 466 70 77',
      },
      {
        country: this.props.lang.czechRepublic,
        phone: '420 228 883 012',
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
        country: this.props.lang.lithuania,
        phone: '370 447 20340',
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
          <OnVisible
            className="hidden-content hidden-content--fade-in"
            percent={-100}
          >
            <img src={scene} alt="" className="footer-image" />
          </OnVisible>

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
                  {locations.slice(0, 15).map((location, i) => (
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
                  {locations.slice(15).map((location, i) => (
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
            ©2017 Gingr AG | {this.props.lang.allRightsReserved}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
