import * as React from 'react';
// import LocalizedStrings from 'react-localization';
// import { BlockchainStrings } from '../../components/l18n';

import './Blockchain.css';

import BlockchainChart from '../../components/svgBlockchain/svgBlockchain';

// export const langEn = require('../../assets/l18n/blockchain.en.json');
// export const strings: BlockchainStrings = new LocalizedStrings({
//   en: langEn,
// });
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

          <BlockchainChart lang={this.props.lang} />
        </div>
      </div>
    );
  }
}

export default Blockchain;
