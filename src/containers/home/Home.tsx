import * as React from 'react';
// import Dialog from 'rc-dialog';
// import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

// Load firebase service
// import Base from '../../Base';

import ReactCSSTransitionReplace from 'react-css-transition-replace';

// import LazyLoad from 'react-lazyload';
// import ScrollableAnchor from 'react-scrollable-anchor';

// Import locale strings
// import { strings } from '../../components/localization';

import LoaderPage from '../../components/loaderPage/LoaderPage';

// import components
import Section from '../../components/section/Section';
// import Header from '../../components/header/Header';
// import Nav from '../../components/nav/Nav';
import Top from '../top/Top';
// import Button from '../../components/button/Button';
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

// import EventBanner from '../../components/eventBanner/EventBanner';

class Home extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    // this.handleLangChange = this.handleLangChange.bind(this);
    // this.state = { checked: true };
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

  // handle state change when language is changed
  // handleLangChange(langCode: any) {
  //   if (langCode) {
  //     strings.setLanguage(langCode.value);
  //   }
  //
  //   this.setState({ lang: strings });
  //   return strings.getLanguage();
  // }

  // getUser = async () => {
  //   let user;
  //
  //   try {
  //     user = Base.auth().currentUser;
  //     let name = user.email.substring(0, user.email.lastIndexOf('@'));
  //
  //     this.setState({ user: name });
  //   } catch (error) {
  //     throw error;
  //   }
  // };

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

    // const style = {
    //   width: this.state.width,
    //   height: this.state.height,
    // };

    // let wrapClassName = '';
    // if (this.state.center) {
    //   wrapClassName = 'event-dialog center';
    // }

    // const isMobile = !isWidthUp('sm', this.props.width);

    // const dialog = (
    //   <Dialog
    //     visible={this.state.visible}
    //     wrapClassName={wrapClassName}
    //     animation="zoom"
    //     maskAnimation="fade"
    //     onClose={this.onClose}
    //     style={style}
    //     mousePosition={this.state.mousePosition}
    //     destroyOnClose={this.state.destroyOnClose}
    //   >
    //     <div className="rc-dialog-body__content flex-row">
    //       <div className="rc-dialog-body__text flex-column">
    //         <h2>{lang.bePartOfTheGgCoinMeetup}</h2>
    //         <span>08/11/2018 {lang.zurich}</span>
    //         <Button btnStyle="secondary-fat" click={this.goToMeetup}>
    //           Join now
    //         </Button>
    //       </div>
    //     </div>
    //   </Dialog>
    // );

    const { lang /*langSelect*/ } = this.props;

    // const items = [
    //   { id: 1, name: lang.download, anchor: '#download' },
    //   { id: 2, name: lang.platform, anchor: '#what-is-gingr' },
    //   { id: 3, name: lang.ggCoin, anchor: '#blockchain' },
    //   { id: 4, name: lang.icoDetails, anchor: '#ico-details' },
    //   { id: 5, name: lang.roadmap, anchor: '#roadmap' },
    //   { id: 6, name: lang.team, anchor: '#team' },
    //   { id: 7, name: lang.contact, anchor: '#contact' },
    // ];

    return (
      <ReactCSSTransitionReplace
        transitionName="cross-fade"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <div className="App">
          <BackToTop />
          {/*<Header lang={lang} langSelect={langSelect} user={this.state.user}>
            <Nav items={items} />
          </Header>*/}
          {/*<EventBanner lang={lang} />*/}
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
          {/*isMobile && dialog*/}
        </div>
      </ReactCSSTransitionReplace>
    );
  }
}

// export default withWidth()(Home);
export default Home;
