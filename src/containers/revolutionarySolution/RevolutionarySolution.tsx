import * as React from 'react';
// import LocalizedStrings from 'react-localization';
// import { RevolutionarySolutionStrings } from '../../components/l18n';
import OnVisible from 'react-on-visible';

import './RevolutionarySolution.css';
import GgCard from '../../components/ggCards/GgCard';
import Cycle from '../../components/svgCycle/svgCycle2';

// export const langEn = require('../../assets/l18n/revolutionary-solution.en.json');
// export const strings: RevolutionarySolutionStrings = new LocalizedStrings({
//   en: langEn,
// });

const gingr = require(process.env.REACT_APP_MEDIA_URL + 'gingr_necklace.png');
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
            {this.props.lang.revolutionary}
            <br /> {this.props.lang.solution}
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

          <OnVisible className="hidden-content hidden-content--slide-in--right">
            <Cycle lang={this.props.lang} />
          </OnVisible>

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
              <img
                src={gingr}
                alt=""
                style={{ maxWidth: '749px', width: '100%' }}
              />
            </OnVisible>
          </div>
        </div>
      </div>
    );
  }
}

export default RevolutionarySolution;
