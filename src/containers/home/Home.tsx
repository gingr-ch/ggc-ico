import * as React from 'react';
import Loadable from 'react-loadable';
// import { observer } from 'mobx-react';
import LazyLoad from 'react-lazyload';
import ScrollableAnchor from 'react-scrollable-anchor';

// Import locale strings
import { strings } from '../../components/localization';

// import global css
// import './App.css';

// import components
import Section from '../../components/section/Section';
import Top from '../top/Top';
import Header from '../../components/header/Header';
import Nav from '../../components/nav/Nav';
import PressReports from '../pressReports/PressReports';

const StrongSolution = Loadable({
  loader: () => import('../strongSolution/StrongSolution'),
  loading: () => <div>Loading...</div>,
});

const ReasonsToInvest = Loadable({
  loader: () => import('../reasonsToInvest/ReasonsToInvest'),
  loading: () => <div>Loading...</div>,
});

import Download from '../download/Download';

const WhatIsGingr = Loadable({
  loader: () => import('../whatIsGingr/WhatIsGingr'),
  loading: () => <div>Loading...</div>,
});

const Beta = Loadable({
  loader: () => import('../beta/Beta'),
  loading: () => <div>Loading...</div>,
});
// import StrongSolution from '../strongSolution/StrongSolution';
// import ReasonsToInvest from '../reasonsToInvest/ReasonsToInvest';
// import WhatIsGingr from '../whatIsGingr/WhatIsGingr';
// import Beta from '../beta/Beta';
import Instafuck from '../instafuck/Instafuck';
import HookUp from '../hookUp/HookUp';
import Blockchain from '../blockchain/Blockchain';
import Flow from '../flow/Flow';
import IcoDetails from '../icoDetails/IcoDetails';
import IcoDetails2 from '../icoDetails2/IcoDetails2';
import IcoDetails3 from '../icoDetails3/IcoDetails3';
import ReasonsWhy from '../reasonsWhy/ReasonsWhy';
import RevolutionarySolution from '../revolutionarySolution/RevolutionarySolution';
import Roadmap from '../roadmap/Roadmap';
import GlobalLeader from '../globalLeader/GlobalLeader';
import GlobalLeader2 from '../globalLeader2/GlobalLeader2';
import GlobalLeader3 from '../globalLeader3/GlobalLeader3';
import Team from '../team/Team';
import TeamCEO from '../teamCEO/TeamCEO';
// import TeamAll from '../teamAll/TeamAll';

const TeamAll = Loadable({
  loader: () => import('../teamAll/TeamAll'),
  loading: () => <div>Loading...</div>,
});

import Feedback from '../feedback/Feedback';
import ContactUs from '../contactUs/ContactUs';
import Footer from '../footer/Footer';
import BackToTop from '../../components/backToTop/BackToTop';

class Home extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.handleLangChange = this.handleLangChange.bind(this);
    // this.state = { checked: true };
    this.state = { lang: strings };
  }

  // handle state change when language is changed
  handleLangChange(langCode: any) {
    if (langCode) {
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
        <Section bg="#eaeaea">
          <Top lang={this.state.lang} />
        </Section>
        <Section bg="#4c306a" small={true}>
          <PressReports lang={this.state.lang} />
        </Section>
        <Section bg="#f39fff">
          <LazyLoad offset={1000} height={'100%'} once={true}>
            <StrongSolution lang={this.state.lang} />
          </LazyLoad>
        </Section>
        <Section bg="#f39fff">
          <LazyLoad offset={1000} height={'100%'} once={true}>
            <ReasonsToInvest lang={this.state.lang} />
          </LazyLoad>
        </Section>
        <ScrollableAnchor id={'download'}>
          <Section bg="white" small={true}>
            <LazyLoad offset={1000} height={'366.86px'} once={true}>
              <Download lang={this.state.lang} />
            </LazyLoad>
          </Section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'what-is-gingr'}>
          <Section bg="#812a7b">
            <LazyLoad offset={1000} height={'100%'} once={true}>
              <WhatIsGingr lang={this.state.lang} />
            </LazyLoad>
          </Section>
        </ScrollableAnchor>
        <Section bg="#de9dff">
          <LazyLoad offset={1000} height={'100%'} once={true}>
            <Beta lang={this.state.lang} />
          </LazyLoad>
        </Section>
        <Section bg="#802e7a">
          <LazyLoad offset={1000} height={'100%'} once={true}>
            <Instafuck lang={this.state.lang} />
          </LazyLoad>
        </Section>
        <Section bg="#de9dff">
          <LazyLoad offset={1000} height={'100%'} once={true}>
            <HookUp lang={this.state.lang} />
          </LazyLoad>
        </Section>
        <ScrollableAnchor id={'blockchain'}>
          <Section bg="#802e7a">
            <LazyLoad offset={1000} height={'100%'} once={true}>
              <Blockchain lang={this.state.lang} />
            </LazyLoad>
          </Section>
        </ScrollableAnchor>
        <Section bg="#592356">
          <LazyLoad offset={1000} height={'100%'} once={true}>
            <Flow lang={this.state.lang} />
          </LazyLoad>
        </Section>
        <ScrollableAnchor id={'ico-details'}>
          <Section bg="#4d346a">
            <LazyLoad offset={1000} height={'100%'} once={true}>
              <IcoDetails lang={this.state.lang} />
            </LazyLoad>
          </Section>
        </ScrollableAnchor>
        <Section bg="#802e7a" small={true}>
          <LazyLoad offset={1000} height={'100%'} once={true}>
            <IcoDetails2 lang={this.state.lang} />
          </LazyLoad>
        </Section>
        <Section bg="#4d346a">
          <LazyLoad offset={1000} height={'100%'} once={true}>
            <IcoDetails3 lang={this.state.lang} />
          </LazyLoad>
        </Section>
        <Section bg="#591d55">
          <LazyLoad offset={1000} height={'100%'} once={true}>
            <ReasonsWhy lang={this.state.lang} />
          </LazyLoad>
        </Section>
        <ScrollableAnchor id={'revolutionary-solution'}>
          <Section bg="#802e7a">
            <LazyLoad offset={1000} height={'100%'} once={true}>
              <RevolutionarySolution lang={this.state.lang} />
            </LazyLoad>
          </Section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'roadmap'}>
          <Section bg="#f29eff">
            <LazyLoad offset={1000} height={'100%'} once={true}>
              <Roadmap lang={this.state.lang} />
            </LazyLoad>
          </Section>
        </ScrollableAnchor>
        <Section bg="#802e7a" small={true}>
          <LazyLoad offset={1000} height={'100%'} once={true}>
            <GlobalLeader lang={this.state.lang} />
          </LazyLoad>
        </Section>
        <Section bg="#f29eff" small={true}>
          <LazyLoad offset={1000} height={'100%'} once={true}>
            <GlobalLeader2 lang={this.state.lang} />
          </LazyLoad>
        </Section>
        <Section bg="#802e7a">
          <LazyLoad offset={1000} height={'100%'} once={true}>
            <GlobalLeader3 />
          </LazyLoad>
        </Section>
        <ScrollableAnchor id={'team'}>
          <Section bg="#592356" small={true}>
            <LazyLoad offset={1000} height={'100%'} once={true}>
              <Team lang={this.state.lang} />
            </LazyLoad>
          </Section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'team-ceo'}>
          <Section bg="#802e7a" small={true} maxHeight={'350px'}>
            <LazyLoad offset={1000} height={'100%'} once={true}>
              <TeamCEO lang={this.state.lang} />
            </LazyLoad>
          </Section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'team-all'}>
          <Section bg="#592356">
            <LazyLoad offset={1000} height={'100%'} once={true}>
              <TeamAll lang={this.state.lang} />
            </LazyLoad>
          </Section>
        </ScrollableAnchor>
        <Section bg="#4d346a" small={true}>
          <LazyLoad offset={1000} height={'100%'} once={true}>
            <Feedback lang={this.state.lang} />
          </LazyLoad>
        </Section>
        <ScrollableAnchor id={'contact'}>
          <Section bg="#f29eff">
            <LazyLoad offset={1000} height={'100%'} once={true}>
              <ContactUs lang={this.state.lang} />
            </LazyLoad>
          </Section>
        </ScrollableAnchor>
        <Section bg="#541252">
          <LazyLoad offset={1000} height={'100%'} once={true}>
            <Footer lang={this.state.lang} />
          </LazyLoad>
        </Section>
      </div>
    );
  }
}

export default Home;