import * as React from 'react';
import OnVisible from 'react-on-visible';

import './StrongSolution.css';

const gingrLogo = require('../../assets/img/gingr_logo.png');
const ggcLogo = require('../../assets/img/ggc-ico_logo.png');
const gstLogo = require('../../assets/img/gingr-share-token_logo.png');

class StrongSolution extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--strong-solution">
        <div className="gg-content-container">
          <h1>Strong Solution</h1>
          <OnVisible className="hidden-content" percent={80}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                width: '100%'
              }}
            >
              <div className="flex-column flex-column--30">
                <div className="flex-column__image">
                  <img src={gingrLogo} alt="Gingr"/>
                </div>
                <div className="flex-column__content">
                  <h3 className="title">GINGR PLATFORM</h3>
                  <p>
                    The first worldwide direct end to end booking platform for prostitution using
                    Blockchain Smart Contract Technology.
                    A modern, humorous and user-friendly way to book and pay for sex-worker services.
                    Gingr takes care of everything so you don’t have to.
                  </p>
                </div>
              </div>
              <div className="flex-column flex-column--30">
                <div className="flex-column__image">
                  <img src={ggcLogo} alt="GGC ICO"/>
                </div>
                <div className="flex-column__content">
                  <h3 className="title">GG COIN / CURRENCY (GGC)</h3>
                  <p>
                    A new global ecosystem with its own currency for safe and anonymous payments.
                    A crypto coin which will revolutionize the way transactions are made in $186 billion market.
                    Welcome to the future GG Coin.
                  </p>
                </div>
              </div>
              <div className="flex-column flex-column--30">
                <div className="flex-column__image">
                  <img src={gstLogo} alt="Gingr Share Token"/>
                </div>
                <div className="flex-column__content">
                  <h3 className="title">GINGR SHARE TOKEN (GST)</h3>
                  <p>
                    Gingr Share Tokens are the equitable part of the company.
                    They are ordinary shares with the same rights as you would expect from any other ordinary share,
                    with each share representing a part of the company. Sale starts in 2020.
                  </p>
                </div>
              </div>
            </div>
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default StrongSolution;
