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
const technicalPaper = require(process.env.REACT_APP_MEDIA_URL +
  'download/technicalPaper.png');

// const whitepaperPdf = require('../../assets/docs/ggcoin-white_paper.pdf');
// const lightpaperPdf = require('../../assets/docs/ggcoin-lightpaper.pdf');
// const factSheetPdf = require('../../assets/docs/ggcoin-factsheet.pdf');
// const memorandumPdf = require('../../assets/docs/ggcoin-legal_memorandum.pdf');
// const companyMemorandumPdf = require('../../assets/docs/ggcoin-company_memorandum.pdf');

const whitepaperPdf = 'https://api.ggcoin.ch/download/pdf/ggc-white-paper.pdf';
const lightpaperPdf = 'https://api.ggcoin.ch/download/pdf/ggc-light-paper.pdf';
const factSheetPdf = 'https://api.ggcoin.ch/download/pdf/ggc-fact-sheet.pdf';
const memorandumPdf =
  'https://api.ggcoin.ch/download/pdf/ggc-legal-memorandum.pdf';
const companyMemorandumPdf =
  'https://api.ggcoin.ch/download/pdf/ggc-company-memorandum.pdf';
const technicalPaperPdf =
  'https://api.ggcoin.ch/download/pdf/ggc-technical-paper.pdf';

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
                <a href={technicalPaperPdf} target="_blank">
                  <img src={technicalPaper} />
                </a>
                <p>{this.props.lang.technicalPaper}</p>
              </li>
              <li className="download-item">
                <a href={memorandumPdf} target="_blank">
                  <img src={memorandum} />
                </a>
                <p>{this.props.lang.legalMemorandum}</p>
              </li>
              <li className="download-item">
                <a href={companyMemorandumPdf} target="_blank">
                  <img src={companyMemorandum} />
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
