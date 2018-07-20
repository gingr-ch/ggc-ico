import * as React from 'react';

import './ReasonsToInvest.css';

const reasonsImg = require('../../assets/img/reason_to_invest.png');

const reasonsList = [
  {
    id: 1,
    text: 'The GG coin should continuously increase in value',
  },
  {
    id: 2,
    text: 'We provide firm solutions to existing problems',
  },
  {
    id: 3,
    text: 'Our assets and technologies are state of the art',
  },
  {
    id: 4,
    text:
      'The Gingr platform has a social benefit, where we are helping the world',
  },
  {
    id: 5,
    text:
      'With your help we can change a 186$ billion market - and you will profit from it',
  },
  {
    id: 6,
    text: 'Gingr has already started the revolution',
  },
  {
    id: 7,
    text: 'Our concept has already been accepted by users worldwide',
  },
  {
    id: 8,
    text: 'The firm has gained traction and we have made money',
  },
  {
    id: 9,
    text: 'We are regarded and proven in the industry to be trustworthy',
  },
  {
    id: 10,
    text:
      'Gingr is the pioneer and will always be the global market leader in its industry',
  },
];

class ReasonsToInvest extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--reasons-to-invest">
        <div className="gg-content-container">
          <h1 className="gg-head gg-head--xs">10 Reasons To Invest</h1>
          <div className="flex-row flex-column-xs">
            <div className="flex-column flex-column--45 order-xs-3">
              <img
                src={reasonsImg}
                alt="10 reasons to invest"
                className="rti-image"
              />
            </div>
            <div className="flex-column flex-column--25 order-xs-1">
              {reasonsList.slice(0, 5).map((d, i) => (
                <div key={d.id} className="reason-list flex-column">
                  <span>{d.id}</span>
                  {d.text}
                </div>
              ))}
            </div>
            <div className="flex-column flex-column--25 order-xs-2">
              {reasonsList.slice(5, 10).map((d, i) => (
                <div key={d.id} className="reason-list flex-column">
                  <span>{d.id}</span>
                  {d.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReasonsToInvest;
