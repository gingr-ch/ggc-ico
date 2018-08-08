import * as React from 'react';
import Button from '../../components/button/Button';
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

class Feedback extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  click(link: string) {
    window.open(link, '_blank');
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--feedback">
        <div className="gg-content-container flex-row">
          <h1 className="app-header">{this.props.lang.feedback}</h1>
          <h4>{this.props.lang.ourCompanyIsOpen}</h4>

          <div className="flex-row feedback-social">
            <div className="flex-column">
              <img
                src={telegram}
                alt="Telegram"
                onClick={() =>
                  this.click('https://t.me/joinchat/HPxTWg1wnQKf8Guv3INWqw')
                }
              />
              <span>Telegram</span>
            </div>
            <div className="flex-column">
              <img
                src={twitter}
                alt="Twitter"
                onClick={() => this.click('https://twitter.com/GingrICO')}
              />
              <span>Twitter</span>
            </div>
            <div className="flex-column">
              <img
                src={facebook}
                alt="Facebook"
                onClick={() => this.click('https://www.facebook.com/gingr.ch/')}
              />
              <span>Facebook</span>
            </div>
            <div className="flex-column">
              <img
                src={instagram}
                alt="Instagram"
                onClick={() =>
                  this.click('https://www.instagram.com/gingrerotic/')
                }
              />
              <span>Instagram</span>
            </div>
          </div>

          <div className="feedback-newsletter flex-column">
            <h3 className="feedback-newsletter__title">
              {this.props.lang.signUpForOurNewsletter}
            </h3>
            <div className="feedback-newsletter__form flex-row">
              <input
                className="feedback-input"
                type="text"
                placeholder="Email address"
              />
              <Button
                borderColor={'#f29eff'}
                click={() =>
                  this.click('https://admin.ggcico.io/auth/register')
                }
              >
                {this.props.lang.signUp}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
