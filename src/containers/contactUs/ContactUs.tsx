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
function encode(data: any) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}
class ContactUs extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  click() {
    window.open('https://admin.ggcico.io/auth/register', '_blank');
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      // .then(() => navigateTo(form.getAttribute('action')))
      .then(() => e.props.alert.success('Form sent successfully'))
      .catch(error => e.props.alert.error(error));
  };

  render() {
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
              name="contact"
              method="post"
              action="#"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
              className="contactus-form flex-column"
            >
              <input
                className="contactus-form__input"
                type="text"
                name="email"
                id="email"
                placeholder={this.props.lang.email}
                onChange={this.handleChange}
              />
              <textarea
                className="contactus-form__textarea"
                name="message"
                id="message"
                placeholder={this.props.lang.message}
                onChange={this.handleChange}
              />
              <Button click={() => this.handleSubmit}>
                {this.props.lang.send}
              </Button>
            </form>
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default ContactUs;
