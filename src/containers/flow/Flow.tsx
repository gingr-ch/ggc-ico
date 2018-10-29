import * as React from 'react';
import OnVisible from 'react-on-visible';
import LazyLoad from 'react-lazyload';

import './Flow.css';

import FlowChart from '../../components/svgFlow/svgFlow';

class Flow extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="gg-section-container gg-section-container--flow">
        <div className="gg-content-container">
          <h1 className="app-header">
            {this.props.lang.formatString(
              this.props.lang.ggCoinFlow,
              <span>{this.props.lang.ggCoin}</span>,
              this.props.lang.flow
            )}
          </h1>
          <h4>{this.props.lang.onOurGingrPlatform}</h4>

          <div className="spacer" />
          <div className="spacer" />
          <LazyLoad offset={500} height={826.28}>
            <OnVisible className="hidden-content hidden-content--slide-in--right">
              <FlowChart lang={this.props.lang} />
            </OnVisible>
          </LazyLoad>
        </div>
      </div>
    );
  }
}

export default Flow;
