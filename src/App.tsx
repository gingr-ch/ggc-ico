import * as React from 'react';
// import { observer } from 'mobx-react';
import ScrollableAnchor from 'react-scrollable-anchor';

import './App.css';
import Section from './components/section/Section';
import Top from './containers/top/Top';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import PressReports from './containers/pressReports/PressReports';
import StrongSolution from './containers/strongSolution/StrongSolution';
import ReasonsToInvest from './containers/reasonsToInvest/ReasonsToInvest';
import Download from './containers/download/Download';
import WhatIsGingr from './containers/whatIsGingr/WhatIsGingr';
import Beta from './containers/beta/Beta';

class App extends React.Component {
  constructor(props: object) {
    super(props);
    // this.state = { checked: true };
  }

  render() {
    return (
      <div className="App">
        <Header>
          <Nav />
        </Header>
        <ScrollableAnchor id={'section1'}>
          <Section bg="#eaeaea">
            <Top />
          </Section>
        </ScrollableAnchor>
        <Section bg="#812A7B" small={true}>
          <PressReports />
        </Section>
        <ScrollableAnchor id={'section2'}>
          <Section bg="#f39fff">
            <StrongSolution />
          </Section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section3'}>
          <Section bg="#f39fff">
            <ReasonsToInvest />
          </Section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section4'}>
          <Section bg="white" small={true}>
            <Download />
          </Section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section5'}>
          <Section bg="#812a7b">
            <WhatIsGingr />
          </Section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section6'}>
          <Section bg="#de9dff">
            <Beta />
          </Section>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
