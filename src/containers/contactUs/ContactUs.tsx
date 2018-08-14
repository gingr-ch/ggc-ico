import * as React from 'react';
import Button from '../../components/button/Button';
import OnVisible from 'react-on-visible';
// import LocalizedStrings from 'react-localization';
// import { ContactUsStrings } from '../../components/l18n';
//
// export const langEn = require('../../assets/l18n/contact-us.en.json');
// export const strings: ContactUsStrings = new LocalizedStrings({
//   en: langEn,
// });

import './ContactUs.css';

// const telegram = require(process.env.REACT_APP_MEDIA_URL + 'social/telegram.png');

class ContactUs extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  click() {
    window.open('https://admin.ggcico.io/auth/register', '_blank');
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--contactus">
        <div className="gg-content-container" style={{ alignItems: 'stretch' }}>
          <div className="flex-row" style={{ justifyContent: 'center' }}>
            <h1 className="app-header">{this.props.lang.contactUs}</h1>
          </div>

          <OnVisible className="hidden-content hidden-content--fade-in">
            <div className="contactus-form flex-column">
              <input
                className="contactus-form__input"
                type="text"
                placeholder={this.props.lang.email}
              />
              <textarea
                className="contactus-form__textarea"
                placeholder={this.props.lang.message}
              />
              <Button click={this.click}>{this.props.lang.send}</Button>
            </div>
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default ContactUs;
