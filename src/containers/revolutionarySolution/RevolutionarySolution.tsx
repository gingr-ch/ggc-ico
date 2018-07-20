import * as React from 'react';

import './RevolutionarySolution.css';
import GgCard from '../../components/ggCards/GgCard';
import Cycle from '../../components/svgCycle/svgCycle';

const gingr = require('../../assets/img/gingr_necklace.png');
const popngo = require('../../assets/img/icons/popngo.png');
const gingrBank = require('../../assets/img/icons/gingr-bank.png');
const gingrCare = require('../../assets/img/icons/gingr-care.png');
const gingrConnect = require('../../assets/img/icons/gingr-connect.png');

const cardsData = [
  {
    image: popngo,
    title: 'Gingr Pop N Go',
    content:
      'Never has it been so easy to rent property and earn at least three times more. Pop N Go lets you turn a room, apartment or house in to a temporary sex working space.',
  },
  {
    image: gingrBank,
    title: 'Gingr Bank',
    content:
      'The worlds first accessible bank to the prostitution industry. Solving the cash problem worldwide to store funds for sex-workers, establishments and agencies.',
  },
  {
    image: gingrCare,
    title: 'Gingr Care',
    content:
      'A space for all sex-workers that can come for help and support in a confidential surrounding with many facilities and professionals. Our physical presence to allow us to be closer and in direct contact with our users and the whole community.',
  },
  {
    image: gingrConnect,
    title: 'Gingr Connect',
    content:
      'Our recruitment section for prostitution bringing together on one platform sex-workers, establishments and agencies. It will be the site with the most employers and job vacancy offers globally for sex-workers.',
  },
];

class RevolutionarySolution extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--revolutionary-solution">
        <div
          className="gg-content-container"
          style={{ justifyContent: 'space-between' }}
        >
          <h1>
            REVOLUTIONARY<br /> ALL ROUND SOLUTION
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

          <div className="revolutionary__title">Sex-worker Lifecycle</div>

          <Cycle />

          <div style={{ marginTop: '150px', marginBottom: '-3px' }}>
            <h4
              style={{ maxWidth: '275px', marginBottom: '50px' }}
              className="center-title"
            >
              “RIGHT DECISIONS BRING RIGHT PEOPLE”
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
