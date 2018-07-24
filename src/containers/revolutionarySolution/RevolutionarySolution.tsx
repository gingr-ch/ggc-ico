import * as React from 'react';
// import LocalizedStrings from 'react-localization';
// import { RevolutionarySolutionStrings } from '../../components/l18n';

import './RevolutionarySolution.css';
import GgCard from '../../components/ggCards/GgCard';
import Cycle from '../../components/svgCycle/svgCycle';

// export const langEn = require('../../assets/l18n/revolutionary-solution.en.json');
// export const strings: RevolutionarySolutionStrings = new LocalizedStrings({
//   en: langEn,
// });

const gingr = require('../../assets/img/gingr_necklace.png');
const popngo = require('../../assets/img/icons/popngo.png');
const gingrBank = require('../../assets/img/icons/gingr-bank.png');
const gingrCare = require('../../assets/img/icons/gingr-care.png');
const gingrConnect = require('../../assets/img/icons/gingr-connect.png');

class RevolutionarySolution extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { strings: this.props.lang };
  }

  render() {
    const cardsData = [
      {
        image: popngo,
        title: this.state.strings.gingrPopNGo,
        content: this.state.strings.neverHasItBeen,
      },
      {
        image: gingrBank,
        title: this.state.strings.gingrBank,
        content: this.state.strings.theWorldsFirstAccessible,
      },
      {
        image: gingrCare,
        title: this.state.strings.gingrCare,
        content: this.state.strings.aSpaceForAll,
      },
      {
        image: gingrConnect,
        title: this.state.strings.gingrConnect,
        content: this.state.strings.ourRecruitmentSection,
      },
    ];

    return (
      <div className="gg-section-container gg-section-container--revolutionary-solution">
        <div
          className="gg-content-container"
          style={{ justifyContent: 'space-between' }}
        >
          <h1>
            {this.state.strings.revolutionary}
            <br /> {this.state.strings.solution}
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
            {this.state.strings.sexWorkerLifecycle}
          </div>

          <Cycle lang={this.state.strings} />

          <div style={{ marginTop: '150px', marginBottom: '-3px' }}>
            <h4
              style={{ maxWidth: '275px', marginBottom: '50px' }}
              className="center-title"
            >
              “{this.state.strings.rightDecisionsBringRightPeople}”
            </h4>
            <img
              src={gingr}
              alt=""
              style={{ maxWidth: '749px', width: '100%' }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RevolutionarySolution;
