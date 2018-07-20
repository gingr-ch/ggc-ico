import * as React from 'react';
import Button from '../../components/button/Button';

import './Feedback.css';

const telegram = require('../../assets/img/social/telegram.png');
const twitter = require('../../assets/img/social/twitter.png');
const facebook = require('../../assets/img/social/facebook.png');
const instagram = require('../../assets/img/social/instagram.png');

class Feedback extends React.Component {
  click() {
    window.open('https://admin.ggcico.io/auth/register', '_blank');
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--feedback">
        <div className="gg-content-container flex-row">
          <h1>Feedback</h1>
          <h4>
            Our company is open to suggestions. Any feedback is welcome. Follow
            and contact us on social media channels.
          </h4>

          <div className="flex-row feedback-social">
            <div className="flex-column">
              <img src={telegram} alt="" />
              <span>Telegram</span>
            </div>
            <div className="flex-column">
              <img src={twitter} alt="" />
              <span>Twitter</span>
            </div>
            <div className="flex-column">
              <img src={facebook} alt="" />
              <span>Facebook</span>
            </div>
            <div className="flex-column">
              <img src={instagram} alt="" />
              <span>Instagram</span>
            </div>
          </div>

          <div className="feedback-newsletter flex-column">
            <h3 className="feedback-newsletter__title">
              Sign up for our newsletter
            </h3>
            <div className="feedback-newsletter__form flex-row">
              <input
                className="feedback-input"
                type="text"
                placeholder="Email address"
              />
              <Button borderColor={'#f29eff'} click={this.click}>
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
