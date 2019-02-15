import * as React from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import BackToTop from '../../components/backToTop/BackToTop';
import DotNav from '../../components/dotNav/DotNav';
import LoaderPage from '../../components/loaderPage/LoaderPage';
import Section from '../../components/section/Section';
import SocialSidebar from '../../components/socialSidebar/SocialSidebar';
import Beta from '../beta/Beta';
import Blockchain from '../blockchain/Blockchain';
import ContactUs from '../contactUs/ContactUs';
import Download from '../download/Download';
import Feedback from '../feedback/Feedback';
import Flow from '../flow/Flow';
import Footer from '../footer/Footer';
import GlobalLeader from '../globalLeader/GlobalLeader';
import GlobalLeader2 from '../globalLeader2/GlobalLeader2';
import GlobalLeader3 from '../globalLeader3/GlobalLeader3';
import HookUp from '../hookUp/HookUp';
import IcoDetails from '../icoDetails/IcoDetails';
import IcoDetails2 from '../icoDetails2/IcoDetails2';
import IcoDetails3 from '../icoDetails3/IcoDetails3';
import Instafuck from '../instafuck/Instafuck';
import PressReports from '../pressReports/PressReports';
import ReasonsToInvest from '../reasonsToInvest/ReasonsToInvest';
import ReasonsWhy from '../reasonsWhy/ReasonsWhy';
import RevolutionarySolution from '../revolutionarySolution/RevolutionarySolution';
import Roadmap from '../roadmap/Roadmap';
import StrongSolution from '../strongSolution/StrongSolution';
import Team from '../team/Team';
import TeamAll from '../teamAll/TeamAll';
import TeamCEO from '../teamCEO/TeamCEO';
import Top from '../top/Top';
import WhatIsGingr from '../whatIsGingr/WhatIsGingr';

class Home extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.state = {
      lang: this.props.lang,
      user: null,
      center: true,
      visible: true,
      width: '80%',
      height: '80%',
      mousePosition: { x: '50%', y: '135px' },
      loading: true,
    };
  }

  onClick = (e: any) => {
    this.setState({
      mousePosition: {
        x: e.pageX,
        y: e.pageY,
      },
      visible: true,
    });
  };

  onClose = () => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  componentDidMount() {
    // this.getUser();
    this.setState({ loading: false });
  }

  goToMeetup = () => {
    this.props.history.push('/meetup');
  };

  render() {
    if (this.state.loading) {
      return (
        <ReactCSSTransitionReplace
          transitionName="cross-fade"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={3000}
        >
          <LoaderPage key="loaderKey" />
        </ReactCSSTransitionReplace>
      );
    }

    const { lang } = this.props;

    return (
      <ReactCSSTransitionReplace
        transitionName="cross-fade"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <div className="App">
          <BackToTop />
          <Section bg="#eaeaea" top={true} small={true}>
            <Top lang={lang} />
          </Section>
          <Section bg="#4c306a" small={true}>
            <PressReports lang={lang} user={this.props.user} />
          </Section>
          <Section bg="#f39fff">
            <StrongSolution lang={lang} />
          </Section>
          <Section bg="#f39fff">
            <ReasonsToInvest lang={lang} />
          </Section>
          <Section bg="white" small={true} id="download">
            <Download lang={lang} />
          </Section>
          <Section bg="#812a7b" id="what-is-gingr">
            <WhatIsGingr lang={lang} />
          </Section>
          <Section bg="#de9dff">
            <Beta lang={lang} />
          </Section>
          <Section bg="#802e7a">
            <Instafuck lang={lang} />
          </Section>
          <Section bg="#de9dff">
            <HookUp lang={lang} />
          </Section>
          <Section bg="#802e7a" id="blockchain">
            <Blockchain lang={lang} />
          </Section>
          <Section bg="#592356">
            <Flow lang={lang} />
          </Section>
          <Section bg="#4d346a" id="ico-details">
            <IcoDetails lang={lang} user={this.state.user} />
          </Section>
          <Section bg="#802e7a" small={true}>
            <IcoDetails2 lang={lang} />
          </Section>
          <Section bg="#4d346a" small={true}>
            <IcoDetails3 lang={lang} />
          </Section>
          <Section bg="#591d55">
            <ReasonsWhy lang={lang} />
          </Section>
          <Section bg="#802e7a" id="revolutionary-solution">
            <RevolutionarySolution lang={lang} />
          </Section>
          <Section bg="#f29eff" id="roadmap">
            <Roadmap lang={lang} />
          </Section>
          <Section bg="#802e7a" small={true}>
            <GlobalLeader lang={lang} />
          </Section>
          <Section bg="#f29eff" small={true}>
            <GlobalLeader2 lang={lang} />
          </Section>
          <Section bg="#802e7a">
            <GlobalLeader3 lang={lang} />
          </Section>
          <Section bg="#592356" small={true} id="team">
            <Team lang={lang} />
          </Section>
          <Section bg="#802e7a" small={true} maxHeight={'350px'} id="team-ceo">
            <TeamCEO lang={lang} />
          </Section>
          <Section bg="#592356" id="team-all">
            <TeamAll lang={lang} />
          </Section>
          <Section bg="#4d346a" small={true}>
            <Feedback lang={lang} />
          </Section>
          <Section bg="#f29eff" id="contact">
            <ContactUs lang={lang} />
          </Section>
          <Section bg="#541252">
            <Footer lang={lang} />
          </Section>
          <SocialSidebar />
          <DotNav lang={lang} />
        </div>
      </ReactCSSTransitionReplace>
    );
  }
}

export default Home;
