import * as React from 'react';
// import { observer } from 'mobx-react';
import LazyLoad from 'react-lazyload';
import ScrollableAnchor from 'react-scrollable-anchor';

// Import locale strings
import { strings } from './components/localization';

// import global css
import './App.css';

// import components
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

class App extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.handleLangChange = this.handleLangChange.bind(this);
    // this.state = { checked: true };
    this.state = { lang: strings };
  }

  // handle state change when language is changed
  handleLangChange(langCode: any) {
    if (langCode) {
      console.warn(langCode);
      strings.setLanguage(langCode.value);
    }

    this.setState({ lang: strings });
    return strings.getLanguage();
  }

  render() {
    return (
      <div className="App">
        <BackToTop />
        <Header lang={this.state.lang} langSelect={this.handleLangChange}>
          <Nav lang={this.state.lang} />
        </Header>
        <ScrollableAnchor id={'section1'}>
          <Section bg="#eaeaea">
            <Top lang={this.state.lang} />
          </Section>
        </ScrollableAnchor>
        <Section bg="#812A7B" small={true}>
          <PressReports lang={this.state.lang} />
        </Section>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'strong-solution'}>
            <Section bg="#f39fff">
              <StrongSolution lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'reasons-to-invest'}>
            <Section bg="#f39fff">
              <ReasonsToInvest lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'download'}>
            <Section bg="white" small={true}>
              <Download lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'what-is-gingr'}>
            <Section bg="#812a7b">
              <WhatIsGingr lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'beta'}>
            <Section bg="#de9dff">
              <Beta lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'instafuck'}>
            <Section bg="#802e7a">
              <Instafuck lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'hookup'}>
            <Section bg="#de9dff">
              <HookUp lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'blockchain'}>
            <Section bg="#802e7a">
              <Blockchain lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'flow'}>
            <Section bg="#592356">
              <Flow lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'ico-details'}>
            <Section bg="#4d346a">
              <IcoDetails lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'ico-details-2'}>
            <Section bg="#802e7a" small={true}>
              <IcoDetails2 lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'ico-details-3'}>
            <Section bg="#4d346a">
              <IcoDetails3 lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'reasons-why'}>
            <Section bg="#591d55">
              <ReasonsWhy lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'revolutionary-solution'}>
            <Section bg="#802e7a">
              <RevolutionarySolution lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'roadmap'}>
            <Section bg="#f29eff">
              <Roadmap lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'global-leader'}>
            <Section bg="#802e7a" small={true}>
              <GlobalLeader lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'global-leader-2'}>
            <Section bg="#f29eff" small={true}>
              <GlobalLeader2 lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'global-leader-3'}>
            <Section bg="#802e7a">
              <GlobalLeader3 />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'team'}>
            <Section bg="#592356" small={true}>
              <Team lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'team-ceo'}>
            <Section bg="#802e7a" small={true}>
              <TeamCEO />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'team-all'}>
            <Section bg="#592356">
              <TeamAll />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'feedback'}>
            <Section bg="#4d346a" small={true}>
              <Feedback lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'contact-us'}>
            <Section bg="#f29eff">
              <ContactUs lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
        <LazyLoad offset={3000}>
          <ScrollableAnchor id={'footer'}>
            <Section bg="#541252">
              <Footer lang={this.state.lang} />
            </Section>
          </ScrollableAnchor>
        </LazyLoad>
      </div>
    );
  }
}

export default App;
