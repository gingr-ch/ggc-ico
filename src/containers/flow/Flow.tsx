import * as React from 'react';
// import LocalizedStrings from 'react-localization';
// import { FlowStrings } from '../../components/l18n';

import './Flow.css';

import FlowChart from '../../components/svgFlow/svgFlow';

// export const langEn = require('../../assets/l18n/flow.en.json');
// export const strings: FlowStrings = new LocalizedStrings({
//   en: langEn,
// });
class Flow extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--flow">
        <div className="gg-content-container">
          <h1>
            <span>{this.props.lang.ggCoin}</span> {this.props.lang.flow}
          </h1>
          <h4>{this.props.lang.onOurGingrPlatform}</h4>

          <div className="spacer" />
          <div className="spacer" />

          <FlowChart lang={this.props.lang} />
        </div>
      </div>
    );
  }
}

export default Flow;
