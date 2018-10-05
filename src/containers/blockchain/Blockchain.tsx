import * as React from 'react';
import OnVisible from 'react-on-visible';
import LazyLoad from 'react-lazyload';

import './Blockchain.css';

import BlockchainChart from '../../components/svgBlockchain/svgBlockchain';

class Blockchain extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--blockchain">
        <div className="gg-content-container">
          <h1 className="app-header">
            <span>{this.props.lang.blockchain}</span> &<br />{' '}
            {this.props.lang.smartContracts}
          </h1>
          <h4>"{this.props.lang.groundBreakingTechnologies}"</h4>

          <div className="spacer" />
          <div className="spacer" />

          <LazyLoad offset={500} height={866.58}>
            <OnVisible percent={50} className="hidden-content">
              <BlockchainChart lang={this.props.lang} />
            </OnVisible>
          </LazyLoad>
        </div>
      </div>
    );
  }
}

export default Blockchain;
