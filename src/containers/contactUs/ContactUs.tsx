import * as React from 'react';
import Button from '../../components/button/Button';

import './ContactUs.css';

// const telegram = require('../../assets/img/social/telegram.png');

class ContactUs extends React.Component {
  click() {
    window.open('https://admin.ggcico.io/auth/register', '_blank');
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--contactus">
        <div className="gg-content-container" style={{ alignItems: 'stretch' }}>
          <div className="flex-row" style={{ justifyContent: 'center' }}>
            <h1>Contact Us</h1>
          </div>

          <div
            className="flex-column"
            style={{
              alignItems: 'stretch',
              position: 'relative',
              width: '563px',
            }}
          >
            <input
              className="contactus-input"
              type="text"
              placeholder="Email"
            />
            <textarea className="contactus-textarea" placeholder="Message" />
            <Button click={this.click}>Send</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
