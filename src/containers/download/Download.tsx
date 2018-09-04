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
const companyMemorandum = require(process.env.REACT_APP_MEDIA_URL +
  'download/memorandum.png');

const whitepaperPdf = require('../../assets/docs/ggcoin-white_paper.pdf');
const lightpaperPdf = require('../../assets/docs/ggcoin-lightpaper.pdf');
const factSheetPdf = require('../../assets/docs/ggcoin-factsheet.pdf');
const memorandumPdf = require('../../assets/docs/ggcoin-legal_memorandum.pdf');
const companyMemorandumPdf = require('../../assets/docs/ggcoin-company_memorandum.pdf');

class Download extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--download">
        <div className="gg-container">
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
                <a href={whitepaperPdf} download="ggc-white-paper.pdf">
                  <img src={whitePaper} />
                </a>
                <p>{this.props.lang.whitepaper}</p>
              </li>
              <li className="download-item">
                <a href={factSheetPdf} download="ggc-fact-sheet.pdf">
                  <img src={factSheet} />
                </a>
                <p>{this.props.lang.factSheet}</p>
              </li>
              <li className="download-item">
                <a href={lightpaperPdf} download="ggc-light-paper.pdf">
                  <img src={lightPaper} />
                </a>
                <p>{this.props.lang.lightpaper}</p>
              </li>
              <li className="download-item">
                <a
                  href={companyMemorandumPdf}
                  download="ggc-company-memorandum.pdf"
                >
                  <img src={companyMemorandum} />
                </a>
                <p>{this.props.lang.companysMemorandum}</p>
              </li>
              <li className="download-item">
                <a href={memorandumPdf} download="ggc-legal-memorandum.pdf">
                  <img src={memorandum} />
                </a>
                <p>{this.props.lang.legalMemorandum}</p>
              </li>
            </ul>
          </OnVisible>
        </div>
      </div>
    );
  }
}

export default Download;
