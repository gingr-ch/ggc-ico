import * as React from 'react';
// import { observer } from 'mobx-react';
import LazyLoad from 'react-lazyload';
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
import Instafuck from './containers/instafuck/Instafuck';
import HookUp from './containers/hookUp/HookUp';
import Blockchain from './containers/blockchain/Blockchain';
import Flow from './containers/flow/Flow';
import IcoDetails from './containers/icoDetails/IcoDetails';
import IcoDetails2 from './containers/icoDetails2/IcoDetails2';
import IcoDetails3 from './containers/icoDetails3/IcoDetails3';
import ReasonsWhy from './containers/reasonsWhy/ReasonsWhy';
import RevolutionarySolution from './containers/revolutionarySolution/RevolutionarySolution';
import Roadmap from './containers/roadmap/Roadmap';
import GlobalLeader from './containers/globalLeader/GlobalLeader';
import GlobalLeader2 from './containers/globalLeader2/GlobalLeader2';
import GlobalLeader3 from './containers/globalLeader3/GlobalLeader3';
import Team from './containers/team/Team';
import TeamCEO from './containers/teamCEO/TeamCEO';
import TeamAll from './containers/teamAll/TeamAll';
import Feedback from './containers/feedback/Feedback';
import ContactUs from './containers/contactUs/ContactUs';
import Footer from './containers/footer/Footer';
import BackToTop from './components/backToTop/BackToTop';

class App extends React.Component {
  constructor(props: object) {
    super(props);
    // this.state = { checked: true };
  }

  render() {
    return (
      <div className="App">
        <BackToTop />
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
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section2'}>
            <Section bg="#f39fff">
              <StrongSolution />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section3'}>
            <Section bg="#f39fff">
              <ReasonsToInvest />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section4'}>
            <Section bg="white" small={true}>
              <Download />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section5'}>
            <Section bg="#812a7b">
              <WhatIsGingr />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section6'}>
            <Section bg="#de9dff">
              <Beta />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section7'}>
            <Section bg="#802e7a">
              <Instafuck />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section8'}>
            <Section bg="#de9dff">
              <HookUp />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section9'}>
            <Section bg="#802e7a">
              <Blockchain />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section10'}>
            <Section bg="#592356">
              <Flow />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section11'}>
            <Section bg="#4d346a">
              <IcoDetails />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section12'}>
            <Section bg="#802e7a" small={true}>
              <IcoDetails2 />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section13'}>
            <Section bg="#4d346a">
              <IcoDetails3 />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section14'}>
            <Section bg="#591d55">
              <ReasonsWhy />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section15'}>
            <Section bg="#802e7a">
              <RevolutionarySolution />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section16'}>
            <Section bg="#f29eff">
              <Roadmap />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section17'}>
            <Section bg="#802e7a" small={true}>
              <GlobalLeader />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section18'}>
            <Section bg="#f29eff" small={true}>
              <GlobalLeader2 />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section19'}>
            <Section bg="#802e7a">
              <GlobalLeader3 />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section20'}>
            <Section bg="#592356" small={true}>
              <Team />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section21'}>
            <Section bg="#802e7a" small={true}>
              <TeamCEO />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section22'}>
            <Section bg="#592356">
              <TeamAll />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section23'}>
            <Section bg="#4d346a" small={true}>
              <Feedback />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section24'}>
            <Section bg="#f29eff">
              <ContactUs />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'section25'}>
            <Section bg="#541252">
              <Footer />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
      </div>
    );
  }
}

export default App;
