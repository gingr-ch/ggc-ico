import * as React from 'react';
import Dialog from 'rc-dialog';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

// Load firebase service
import Base from '../../Base';

// import LazyLoad from 'react-lazyload';
import ScrollableAnchor from 'react-scrollable-anchor';

// Import locale strings
import { strings } from '../../components/localization';

// import components
import Section from '../../components/section/Section';
import Top from '../top/Top';
import Header from '../../components/header/Header';
import Nav from '../../components/nav/Nav';
import Button from '../../components/button/Button';
import PressReports from '../pressReports/PressReports';
import Download from '../download/Download';
import StrongSolution from '../strongSolution/StrongSolution';
import ReasonsToInvest from '../reasonsToInvest/ReasonsToInvest';
import WhatIsGingr from '../whatIsGingr/WhatIsGingr';
import Beta from '../beta/Beta';
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
import TeamAll from '../teamAll/TeamAll';
import Feedback from '../feedback/Feedback';
import ContactUs from '../contactUs/ContactUs';
import Footer from '../footer/Footer';
import BackToTop from '../../components/backToTop/BackToTop';
import SocialSidebar from '../../components/socialSidebar/SocialSidebar';
import DotNav from '../../components/dotNav/DotNav';

import EventBanner from '../../components/eventBanner/EventBanner';

class Home extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.handleLangChange = this.handleLangChange.bind(this);
    // this.state = { checked: true };
    this.state = {
      lang: strings,
      user: null,
      center: true,
      visible: true,
      width: '80%',
      height: '80%',
      mousePosition: { x: '50%', y: '135px' },
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

  // handle state change when language is changed
  handleLangChange(langCode: any) {
    if (langCode) {
      strings.setLanguage(langCode.value);
    }

    this.setState({ lang: strings });
    return strings.getLanguage();
  }

  getUser = async () => {
    let user;

    try {
      user = Base.auth().currentUser;
      let name = user.email.substring(0, user.email.lastIndexOf('@'));

      this.setState({ user: name });
    } catch (error) {
      throw error;
    }
  };

  componentDidMount() {
    this.getUser();
  }

  goToMeetup = () => {
    this.props.history.push('/meetup');
  };

  render() {
    const style = {
      width: this.state.width,
      height: this.state.height,
    };

    let wrapClassName = '';
    if (this.state.center) {
      wrapClassName = 'event-dialog center';
    }

    const isMobile = !isWidthUp('sm', this.props.width);

    const dialog = (
      <Dialog
        visible={this.state.visible}
        wrapClassName={wrapClassName}
        animation="zoom"
        maskAnimation="fade"
        onClose={this.onClose}
        style={style}
        mousePosition={this.state.mousePosition}
        destroyOnClose={this.state.destroyOnClose}
      >
        <div className="rc-dialog-body__content flex-row">
          <div className="rc-dialog-body__text flex-column">
            <h2>{this.state.lang.bePartOfTheGgCoinMeetup}</h2>
            <span>08/11/2018 {this.state.lang.zurich}</span>
            <Button btnStyle="secondary-fat" click={this.goToMeetup}>
              Join now
            </Button>
          </div>
        </div>
      </Dialog>
    );

    return (
      <div className="App">
        <BackToTop />
        <Header
          lang={this.state.lang}
          langSelect={this.handleLangChange}
          user={this.state.user}
        >
          <Nav lang={this.state.lang} />
        </Header>
        <EventBanner lang={this.state.lang} />
        <Section bg="#eaeaea" top={true} small={true}>
          <Top lang={this.state.lang} />
        </Section>
        <Section bg="#4c306a" small={true}>
          <PressReports lang={this.state.lang} user={this.state.user} />
        </Section>
        <Section bg="#f39fff">
          <StrongSolution lang={this.state.lang} />
        </Section>
        <Section bg="#f39fff">
          <ReasonsToInvest lang={this.state.lang} />
        </Section>
        <ScrollableAnchor id={'download'}>
          <Section bg="white" small={true}>
            <Download lang={this.state.lang} />
          </Section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'what-is-gingr'}>
          <Section bg="#812a7b">
            <WhatIsGingr lang={this.state.lang} />
          </Section>
        </ScrollableAnchor>
        <Section bg="#de9dff">
          <Beta lang={this.state.lang} />
        </Section>
        <Section bg="#802e7a">
          <Instafuck lang={this.state.lang} />
        </Section>
        <Section bg="#de9dff">
          <HookUp lang={this.state.lang} />
        </Section>
        <ScrollableAnchor id={'blockchain'}>
          <Section bg="#802e7a">
            <Blockchain lang={this.state.lang} />
          </Section>
        </ScrollableAnchor>
        <Section bg="#592356">
          <Flow lang={this.state.lang} />
        </Section>
        <ScrollableAnchor id={'ico-details'}>
          <Section bg="#4d346a">
            <IcoDetails lang={this.state.lang} user={this.state.user} />
          </Section>
        </ScrollableAnchor>
        <Section bg="#802e7a" small={true}>
          <IcoDetails2 lang={this.state.lang} />
        </Section>
        <Section bg="#4d346a" small={true}>
          <IcoDetails3 lang={this.state.lang} />
        </Section>
        <Section bg="#591d55">
          <ReasonsWhy lang={this.state.lang} />
        </Section>
        <ScrollableAnchor id={'revolutionary-solution'}>
          <Section bg="#802e7a">
            <RevolutionarySolution lang={this.state.lang} />
          </Section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'roadmap'}>
          <Section bg="#f29eff">
            <Roadmap lang={this.state.lang} />
          </Section>
        </ScrollableAnchor>
        <Section bg="#802e7a" small={true}>
          <GlobalLeader lang={this.state.lang} />
        </Section>
        <Section bg="#f29eff" small={true}>
          <GlobalLeader2 lang={this.state.lang} />
        </Section>
        <Section bg="#802e7a">
          <GlobalLeader3 lang={this.state.lang} />
        </Section>
        <ScrollableAnchor id={'team'}>
          <Section bg="#592356" small={true}>
            <Team lang={this.state.lang} />
          </Section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'team-ceo'}>
          <Section bg="#802e7a" small={true} maxHeight={'350px'}>
            <TeamCEO lang={this.state.lang} />
          </Section>
        </ScrollableAnchor>
        <ScrollableAnchor id={'team-all'}>
          <Section bg="#592356">
            <TeamAll lang={this.state.lang} />
          </Section>
        </ScrollableAnchor>
        <Section bg="#4d346a" small={true}>
          <Feedback lang={this.state.lang} />
        </Section>
        <ScrollableAnchor id={'contact'}>
          <Section bg="#f29eff">
            <ContactUs lang={this.state.lang} />
          </Section>
        </ScrollableAnchor>
        <Section bg="#541252">
          <Footer lang={this.state.lang} />
        </Section>
        <SocialSidebar />
        <DotNav lang={this.state.lang} />
        {isMobile && dialog}
      </div>
    );
  }
}

export default withWidth()(Home);
