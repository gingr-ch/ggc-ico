import * as React from 'react';
import Button from '../../components/button/Button';
import OnVisible from 'react-on-visible';
// import styled from 'styled-components';

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

// const Loader = styled.div`xml:space="preserve"
//   border: 1px solid rgba(0, 0, 0, 0.2);
//   border-left-color: #5cb85c;
//   animation: loader-spin 1.2s infinite linear;
//   position: absolute;
//   display: inline-block;
//   vertical-align: top;
//   border-radius: 50%;
//   width: 2em;
//   height: 2em;
// `;

class Feedback extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = { email: '', sending: false, sent: false };
  }

  click(link: string) {
    window.open(link, '_blank');
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ sending: true });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'newsletter', ...this.state }),
    })
      .then(() => {
        setTimeout(() => this.setState({ sent: true }), 3000);
      })
      .catch(error => alert(error));
  };

  render() {
    const { email, sending, sent } = this.state;

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
                {!sent && !sending && this.props.lang.signUp}
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
