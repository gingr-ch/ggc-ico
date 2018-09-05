import * as React from 'react';
import Button from '../../components/button/Button';
import OnVisible from 'react-on-visible';
// import LocalizedStrings from 'react-localization';
// import { FeedbackStrings } from '../../components/l18n';
//
// export const langEn = require('../../assets/l18n/feedback.en.json');
// export const strings: FeedbackStrings = new LocalizedStrings({
//   en: langEn,
// });

import './Feedback.css';

const telegram = require(process.env.REACT_APP_MEDIA_URL +
  'social/telegram.png');
const twitter = require(process.env.REACT_APP_MEDIA_URL + 'social/twitter.png');
const facebook = require(process.env.REACT_APP_MEDIA_URL +
  'social/facebook.png');
const instagram = require(process.env.REACT_APP_MEDIA_URL +
  'social/instagram.png');

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class Feedback extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = { email: '' };
  }

  click(link: string) {
    window.open(link, '_blank');
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'newsletter', ...this.state }),
    })
      .then(() =>
        alert(
          'Success! Thank you for your interest in our newsletter. You will receive updates on our ICO per this email.'
        )
      )
      .catch(error => alert(error));
    e.preventDefault();
  };

  render() {
    const { email } = this.state;

    return (
      <div className="gg-section-container gg-section-container--feedback">
        <div className="gg-content-container flex-row">
          <h1 className="app-header">{this.props.lang.feedback}</h1>
          <h4>{this.props.lang.ourCompanyIsOpen}</h4>
          <OnVisible className="hidden-content hidden-content--fade-in">
            <div className="flex-row feedback-social">
              <div className="flex-column feeback-social__item">
                <img
                  src={telegram}
                  alt={this.props.lang.telegram}
                  onClick={() => this.click('https://t.me/gingrggcgroup')}
                />
                <span>
                  {this.props.lang.telegram} {this.props.lang.group}
                </span>
              </div>
              <div className="flex-column feeback-social__item">
                <img
                  src={telegram}
                  alt={this.props.lang.telegram}
                  onClick={() => this.click('https://t.me/gingrggcoin')}
                />
                <span>
                  {this.props.lang.telegram} {this.props.lang.channel}
                </span>
              </div>
              <div className="flex-column feeback-social__item">
                <img
                  src={twitter}
                  alt={this.props.lang.twitter}
                  onClick={() => this.click('https://twitter.com/GingrICO')}
                />
                <span>{this.props.lang.twitter}</span>
              </div>
              <div className="flex-column feeback-social__item">
                <img
                  src={facebook}
                  alt={this.props.lang.facebook}
                  onClick={() =>
                    this.click('https://www.facebook.com/gingr.ch/')
                  }
                />
                <span>{this.props.lang.facebook}</span>
              </div>
              <div className="flex-column feeback-social__item">
                <img
                  src={instagram}
                  alt={this.props.lang.instagram}
                  onClick={() =>
                    this.click('https://www.instagram.com/gingrerotic/')
                  }
                />
                <span>{this.props.lang.instagram}</span>
              </div>
            </div>
          </OnVisible>

          <div className="feedback-newsletter flex-column">
            <h3 className="feedback-newsletter__title">
              {this.props.lang.signUpForOurNewsletter}
            </h3>
            <form
              onSubmit={this.handleSubmit}
              name="newsletter"
              className="feedback-newsletter__form flex-row"
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <input
                className="feedback-input"
                type="email"
                name="email"
                id="email"
                placeholder={this.props.lang.email}
                onChange={this.handleChange}
                value={email}
              />
              <Button borderColor={'#f29eff'} btnType="submit">
                {this.props.lang.signUp}
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
