import * as React from 'react';
import LocalizedStrings from 'react-localization';
import { FooterStrings } from '../../components/l18n';

export const langEn = require('../../assets/l18n/footer.en.json');
export const strings: FooterStrings = new LocalizedStrings({
  en: langEn,
});

import './Footer.css';

const scene = require('../../assets/img/scene.png');
const swissFlag = require('../../assets/img/flags/switzerland.png');

const locations = [
  {
    country: strings.austria,
    phone: '43 720 88 07 10',
  },
  {
    country: strings.germany,
    phone: '49 303 08 07 677',
  },
  {
    country: strings.switzerland,
    phone: '41 55 588 00 91',
  },
  {
    country: strings.canada,
    phone: '1 604 900 8866',
  },
  {
    country: strings.spain,
    phone: '34 950 68 00 05',
  },
  {
    country: strings.unitedKingdom,
    phone: '44 800 086 9900',
  },
  {
    country: strings.australia,
    phone: '61 8 7150 1555',
  },
  {
    country: strings.newZealand,
    phone: '64 4 887 1055',
  },
  {
    country: strings.belgium,
    phone: '32 2 588 22 19',
  },
  {
    country: strings.denmark,
    phone: '45 89 87 40 99',
  },
  {
    country: strings.france,
    phone: '33 1 86 26 66 22',
  },
  {
    country: strings.netherlands,
    phone: '31 85 888 6189',
  },
  {
    country: strings.italy,
    phone: '39 099 944 0069',
  },
  {
    country: strings.portugal,
    phone: '351 308 804 904',
  },
  {
    country: strings.finland,
    phone: '358 9 424 550 10',
  },
  {
    country: strings.norway,
    phone: '47 23 96 63 96',
  },
  {
    country: strings.sweden,
    phone: '46 76 466 70 77',
  },
  {
    country: strings.czechRepublic,
    phone: '420 228 883 012',
  },
  {
    country: strings.hungary,
    phone: '36 84 884 000',
  },
  {
    country: strings.poland,
    phone: '48 71 716 68 78',
  },
  {
    country: strings.slovakia,
    phone: '421 48/233 36 08',
  },
  {
    country: strings.estonia,
    phone: '372 8804265',
  },
  {
    country: strings.bulgaria,
    phone: '359 2 492 5417',
  },
  {
    country: strings.latvia,
    phone: '371 66 163 771',
  },
  {
    country: strings.lithuania,
    phone: '370 447 20340',
  },
  {
    country: strings.romania,
    phone: '40 31 630 2370',
  },
  {
    country: strings.greece,
    phone: '30 2241 888026',
  },
  {
    country: strings.ireland,
    phone: '353 76 888 7008',
  },
  {
    country: strings.mexico,
    phone: '52 443 690 3990',
  },
  {
    country: strings.turkey,
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
                  {strings.address}
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
                {strings.switzerland}
              </p>

              <p>
                {strings.phone}: +41 555 00 88 91<br />
                {strings.mobile}: +41 79 579 77 77<br />
                {strings.email}:{' '}
                <a href="mailto:info@ggcico.io">info@ggcico.io</a>
              </p>

              <p>
                {strings.companyRegistration} {strings.number}
                <span style={{ color: '#F39FFF' }}>CHE-461.393.191</span>
              </p>
            </div>

            <div
              className="flex-column"
              style={{ alignItems: 'flex-start', width: '100%' }}
            >
              <h4 className="footer-title">{strings.locations}</h4>
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
            ©2017 Gingr AG | {strings.allRightsReserved}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
