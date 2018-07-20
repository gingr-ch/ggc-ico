import * as React from 'react';
import OnVisible from 'react-on-visible';

import './Download.css';

const whitePaper = require('../../assets/img/download/whitePaper.png');
const lightPaper = require('../../assets/img/download/lightPaper.png');
const numbers = require('../../assets/img/download/numbers.png');
const memorandum = require('../../assets/img/download/memorandum.png');

class Download extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--download">
        <div className="gg-content-container">
          <h2 className="download-title">Download</h2>
          <OnVisible className="hidden-content" percent={200}>
            <ul
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                listStyleType: 'none',
                flexWrap: 'wrap',
              }}
            >
              <li className="download-item">
                <img src={whitePaper} />
                <p>WHITEPAPER</p>
              </li>
              <li className="download-item">
                <img src={lightPaper} />
                <p>LIGHTPAPER</p>
              </li>
              <li className="download-item">
                <img src={numbers} />
                <p>NUMBERS</p>
              </li>
              <li className="download-item">
                <img src={memorandum} />
                <p>COMPANY'S MEMORANDUM & ARTICLES OF ASSOCITATION</p>
              </li>
            </ul>
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default Download;
