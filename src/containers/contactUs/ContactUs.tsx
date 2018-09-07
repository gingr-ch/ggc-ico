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

    this.state = { email: '', message: '', sending: false, sent: false };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ sending: true });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => setTimeout(() => this.setState({ sent: true }), 3000))
      .catch(error => alert(error));
  };

  render() {
    const { email, message, sending, sent } = this.state;

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
              <Button btnType="submit" className={sent && 'btn-sent'}>
                {sending &&
                  !sent && (
                    <svg
                      width="55"
                      height="17"
                      viewBox="0 0 120 30"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fff"
                    >
                      <circle cx="15" cy="15" r="15">
                        <animate
                          attributeName="r"
                          from="15"
                          to="15"
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from="1"
                          to="1"
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                        <animate
                          attributeName="r"
                          from="9"
                          to="9"
                          begin="0s"
                          dur="0.8s"
                          values="9;15;9"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from="0.5"
                          to="0.5"
                          begin="0s"
                          dur="0.8s"
                          values=".5;1;.5"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx="105" cy="15" r="15">
                        <animate
                          attributeName="r"
                          from="15"
                          to="15"
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="fill-opacity"
                          from="1"
                          to="1"
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  )}
                {sending && sent && this.props.lang.sent}
                {!sent && !sending && this.props.lang.send}
              </Button>
            </form>
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default ContactUs;
