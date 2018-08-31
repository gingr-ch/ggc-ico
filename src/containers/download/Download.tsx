import * as React from 'react';
import OnVisible from 'react-on-visible';
// import LocalizedStrings from 'react-localization';
// import { DownloadStrings } from '../../components/l18n';

import './Download.css';

const whitePaper = require(process.env.REACT_APP_MEDIA_URL +
  'download/whitePaper.png');
const lightPaper = require(process.env.REACT_APP_MEDIA_URL +
  'download/lightPaper.png');
const factSheet = require(process.env.REACT_APP_MEDIA_URL +
  'download/factSheets.png');
const memorandum = require(process.env.REACT_APP_MEDIA_URL +
  'download/legal_memorandum.png');

const whitepaperPdf = require('../../assets/docs/ggcoin-whitepaper.pdf');
const lightpaperPdf = require('../../assets/docs/ggcoin-lightpaper.pdf');
const factSheetPdf = require('../../assets/docs/ggcoin-factsheet.pdf');
const memorandumPdf = require('../../assets/docs/ggcoin-memorandum.pdf');

class Download extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--download">
        <div className="gg-content-container">
          <h2 className="app-header app-header--small">
            {this.props.lang.download}
          </h2>
          <OnVisible
            className="hidden-content hidden-content--flip-in-right"
            percent={50}
          >
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
                <a href={whitepaperPdf} target="_blank">
                  <img src={whitePaper} />
                </a>
                <p>{this.props.lang.whitepaper}</p>
              </li>
              <li className="download-item">
                <a href={factSheetPdf} target="_blank">
                  <img src={factSheet} />
                </a>
                <p>{this.props.lang.factSheet}</p>
              </li>
              <li className="download-item">
                <a href={lightpaperPdf} target="_blank">
                  <img src={lightPaper} />
                </a>
                <p>{this.props.lang.lightpaper}</p>
              </li>
              <li className="download-item">
                <a href={memorandumPdf} target="_blank">
                  <img src={memorandum} />
                </a>
                <p>{this.props.lang.companysMemorandum}</p>
              </li>
            </ul>
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default Download;
