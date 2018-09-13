import * as React from 'react';
import Img from 'react-image';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import './ReasonsWhy.css';
import OnVisible from 'react-on-visible';

const gingr = require(process.env.REACT_APP_MEDIA_URL + 'reasons-why.png');
const gingrThumb = require(process.env.REACT_APP_MEDIA_URL +
  'thumbs/reasons-why.png');

// export const langEn = require('../../assets/l18n/reasons-why.en.json');
// export const strings: ReasonsWhyStrings = new LocalizedStrings({
//   en: langEn,
// });
class ReasonsWhy extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--reasons-why">
        <div className="gg-content-container">
          <h1 className="app-header">
            {this.props.lang.sixReasons} <span>{this.props.lang.why}</span>
          </h1>
          <h4>{this.props.lang.theGGCoinCould}</h4>

          <div className="flex-row reasons-why-container">
            <div>
              <Img
                src={gingr}
                style={{
                  maxWidth: '360px',
                  width: '100%',
                  height: '100%',
                  maxHeight: '728.217px',
                }}
                loader={
                  <Img
                    src={gingrThumb}
                    style={{
                      maxWidth: '360px',
                      width: '100%',
                      height: '100%',
                      maxHeight: '728.217px',
                      filter: 'blur(10px)',
                    }}
                  />
                }
                container={children => {
                  return (
                    <ReactCSSTransitionReplace
                      transitionName="fade-wait"
                      changeWidth={false}
                    >
                      {children}
                    </ReactCSSTransitionReplace>
                  );
                }}
              />
            </div>
            <div className="reasons-why-list">
              <OnVisible className="hidden-content hidden-content--list">
                <div className="reasons-why-list__item flex-row">
                  <div className="number">1</div>
                  <div>{this.props.lang.theGGCoinWillBe}</div>
                </div>
                <div className="reasons-why-list__item flex-row">
                  <div className="number">2</div>
                  <div>{this.props.lang.burn20OfOurProfits}</div>
                </div>
                <div className="reasons-why-list__item flex-row">
                  <div className="number">3</div>
                  <div>{this.props.lang.weBuyBackGGC}</div>
                </div>
                <div className="reasons-why-list__item flex-row">
                  <div className="number">4</div>
                  <div>{this.props.lang.ofTheTransaction}</div>
                </div>
                <div className="reasons-why-list__item flex-row">
                  <div className="number">5</div>
                  <div>{this.props.lang.equityGingrShare}</div>
                </div>
                <div
                  className="reasons-why-list__item flex-row"
                  style={{ justifyContent: 'flex-start' }}
                >
                  <div className="number">6</div>
                  <div>{this.props.lang.weTargetAGlobal}</div>
                </div>
              </OnVisible>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReasonsWhy;
