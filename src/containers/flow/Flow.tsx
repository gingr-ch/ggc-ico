import * as React from 'react';

import './Flow.css';

import FlowChart from '../../components/svgFlow/svgFlow';

class Flow extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--flow">
        <div className="gg-content-container">
          <h1>
            <span>GG COIN</span> FLOW
          </h1>
          <h4>ON OUR GINGR PLATFORM</h4>

          <div className="spacer" />
          <div className="spacer" />

          <FlowChart />
        </div>
      </div>
    );
  }
}

export default Flow;
