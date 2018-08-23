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
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactUs extends React.Component<any, any> {
  constructor(props: object) {
    super(props);

    this.state = { email: '', message: '' };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
    e.preventDefault();
  };

  render() {
    const { email, message } = this.state;

    return (
      <div className="gg-section-container gg-section-container--contactus">
        <div
          className="gg-content-container"
          style={{ alignItems: 'stretch', position: 'relative', zIndex: 4 }}
        >
          <div className="flex-row" style={{ justifyContent: 'center' }}>
            <h1 className="app-header">{this.props.lang.contactUs}</h1>
          </div>

          <OnVisible className="hidden-content hidden-content--fade-in">
            <form
              onSubmit={this.handleSubmit}
              name="contact"
              className="contactus-form flex-column"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input
                className="contactus-form__input"
                type="email"
                name="email"
                id="email"
                placeholder={this.props.lang.email}
                onChange={this.handleChange}
                value={email}
              />
              <textarea
                className="contactus-form__textarea"
                name="message"
                id="message"
                placeholder={this.props.lang.message}
                onChange={this.handleChange}
                value={message}
              />
              <Button btnType="submit">{this.props.lang.send}</Button>
            </form>
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default ContactUs;
