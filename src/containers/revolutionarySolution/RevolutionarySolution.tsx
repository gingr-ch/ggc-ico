import * as React from 'react';
import Img from 'react-image';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import OnVisible from 'react-on-visible';
import LazyLoad from 'react-lazyload';

import './RevolutionarySolution.css';
import GgCard from '../../components/ggCards/GgCard';
import Cycle from '../../components/svgCycle/svgCycle2';

const gingr = require(process.env.REACT_APP_MEDIA_URL +
  'gingr_necklace_749.png');
const gingrThumb = require(process.env.REACT_APP_MEDIA_URL +
  'thumbs/gingr_necklace.png');
const popngo = require(process.env.REACT_APP_MEDIA_URL + 'icons/popngo.png');
const gingrBank = require(process.env.REACT_APP_MEDIA_URL +
  'icons/gingr-bank.png');
const gingrCare = require(process.env.REACT_APP_MEDIA_URL +
  'icons/gingr-care.png');
const gingrConnect = require(process.env.REACT_APP_MEDIA_URL +
  'icons/gingr-connect.png');

class RevolutionarySolution extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const cardsData = [
      {
        image: popngo,
        title: this.props.lang.gingrPopNGo,
        content: this.props.lang.neverHasItBeen,
      },
      {
        image: gingrBank,
        title: this.props.lang.gingrBank,
        content: this.props.lang.theWorldsFirstAccessible,
      },
      {
        image: gingrCare,
        title: this.props.lang.gingrCare,
        content: this.props.lang.aSpaceForAll,
      },
      {
        image: gingrConnect,
        title: this.props.lang.gingrConnect,
        content: this.props.lang.ourRecruitmentSection,
      },
    ];

    return (
      <div className="gg-section-container gg-section-container--revolutionary-solution">
        <div
          className="gg-content-container"
          style={{ justifyContent: 'space-between' }}
        >
          <h1 className="app-header app-header--xs">
            {this.props.lang.formatString(
              this.props.lang.revolutionarySolution,
              <div>{this.props.lang.revolutionary}</div>,
              <div>{this.props.lang.solution}</div>
            )}
          </h1>

          <div
            className="flex-row"
            style={{
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              justifyContent: 'center',
              marginTop: '50px',
            }}
          >
            {cardsData.map((d, i) => (
              <GgCard
                key={i}
                image={d.image}
                title={d.title}
                content={d.content}
              />
            ))}
          </div>

          <div className="revolutionary__title">
            {this.props.lang.sexWorkerLifecycle}
          </div>

          <LazyLoad offset={500} height={980.28}>
            <OnVisible className="hidden-content hidden-content--slide-in--right">
              <Cycle lang={this.props.lang} />
            </OnVisible>
          </LazyLoad>

          <div style={{ marginTop: '150px', marginBottom: '-3px' }}>
            <OnVisible className="hidden-content hidden-content--slide-in--left">
              <h4
                style={{ maxWidth: '275px', marginBottom: '50px' }}
                className="center-title"
              >
                “{this.props.lang.rightDecisionsBringRightPeople}”
              </h4>
            </OnVisible>
            <OnVisible className="hidden-content hidden-content--fade-in">
              <Img
                src={gingr}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '749px',
                  maxHeight: '635px',
                }}
                alt={this.props.lang.reasonsToInvest}
                className="rti-image"
                onClick={this.props.onClick}
                loader={
                  <Img
                    src={gingrThumb}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '749px',
                      maxHeight: '635px',
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
            </OnVisible>
          </div>
        </div>
      </div>
    );
  }
}

export default RevolutionarySolution;
