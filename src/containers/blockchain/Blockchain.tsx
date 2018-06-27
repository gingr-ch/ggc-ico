import * as React from 'react';

import './Blockchain.css';

import BlockchainChart from '../../components/svgBlockchain/svgBlockchain';

class Blockchain extends React.Component {
  render() {
    return (
      <div className="gg-section-container gg-section-container--blockchain">
        <div className="gg-content-container">
          <h1>
            <span>BLOCKCHAIN</span> &<br /> SMART CONTRACTS
          </h1>
          <h4>"GROUND BREAKING TECHNOLOGY WITH LIMITLESS SOLUTIONS!"</h4>

          <div className="spacer" />
          <div className="spacer" />

          <BlockchainChart />
        </div>
      </div>
    );
  }
}

export default Blockchain;
