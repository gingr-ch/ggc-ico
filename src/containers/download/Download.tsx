import * as React from 'react';
import OnVisible from 'react-on-visible';
import LocalizedStrings from 'react-localization';
import { DownloadStrings } from '../../components/l18n';

import './Download.css';

const whitePaper = require('../../assets/img/download/whitePaper.png');
const lightPaper = require('../../assets/img/download/lightPaper.png');
const numbers = require('../../assets/img/download/numbers.png');
const memorandum = require('../../assets/img/download/memorandum.png');

export const langEn = require('../../assets/l18n/download.en.json');
export const strings: DownloadStrings = new LocalizedStrings({
  en: langEn,
});
class Download extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--download">
        <div className="gg-content-container">
          <h2 className="download-title">{strings.download}</h2>
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
                <p>{strings.whitepaper}</p>
              </li>
              <li className="download-item">
                <img src={lightPaper} />
                <p>{strings.lightpaper}</p>
              </li>
              <li className="download-item">
                <img src={numbers} />
                <p>{strings.numbers}</p>
              </li>
              <li className="download-item">
                <img src={memorandum} />
                <p>{strings.companysMemorandum}</p>
              </li>
            </ul>
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default Download;
