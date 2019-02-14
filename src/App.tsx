// import global css
import './App.css';

import * as React from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import ReactGA from 'react-ga';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Cookies from 'universal-cookie';

import Base from './Base';
import Header from './components/header/Header';
import LoaderPage from './components/loaderPage/LoaderPage';
import { strings } from './components/localization';
import Nav from './components/nav/Nav';

ReactGA.initialize('UA-134491133-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const Home = Loadable({
  loader: () => import('./containers/home/Home'),
  loading: () => <LoaderPage />,
  delay: 200,
});

// const EventsPage = Loadable({
//   loader: () => import('./containers/eventsPage/EventsPage'),
//   loading: () => <LoaderPage />,
//   delay: 500,
// });

// const WhitelistPage = Loadable({
//   loader: () => import('./containers/whitelist/Whitelist'),
//   loading: () => <LoaderPage />,
//   delay: 200,
// });

const cookies = new Cookies();

const theme = {
  main: 'mediumseagreen',
};
// import Home from './containers/home/Home';
// const Login = React.lazy(() => import('./containers/login/Login'));

class App extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.handleLangChange = this.handleLangChange.bind(this);
    // this.state = { checked: true };
    this.state = {
      lang: strings,
      loading: true,
      authenticated: false,
      user: null,
      currentUser: null,
    };
  }

  // handle state change when language is changed
  handleLangChange(langCode: any) {
    if (langCode) {
      strings.setLanguage(langCode.value);
    }

    this.setState({ lang: strings });
    return strings.getLanguage();
  }

  checkLanguageCookie() {
    if (cookies.get('vr-lang')) {
      const cookie = cookies.get('vr-lang');
      this.handleLangChange(cookie);
    }
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
    Base.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false,
        });
        this.getUser();
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false,
        });
      }
    });

    this.checkLanguageCookie();
  }

  // componentDidMount() {
  // setTimeout(() => {
  //   this.setState({ loading: false });
  //   // tslint:disable-next-line:align
  // }, 200);
  // }

  render() {
    const { /*authenticated,*/ loading, lang, user } = this.state;

    console.warn(lang);
    // const items = [{ id: 1, name: lang.home, anchor: '/' }];

    const items = [
      { id: 1, name: lang.download, anchor: 'download' },
      { id: 2, name: lang.platform, anchor: 'what-is-gingr' },
      { id: 3, name: lang.ggCoin, anchor: 'blockchain' },
      { id: 4, name: lang.icoDetails, anchor: 'ico-details' },
      { id: 5, name: lang.roadmap, anchor: 'roadmap' },
      { id: 6, name: lang.team, anchor: 'team' },
      { id: 7, name: lang.contact, anchor: 'contact' },
    ];

    if (loading) {
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

    return (
      <ReactCSSTransitionReplace
        transitionName="cross-fade"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <Router>
          <ThemeProvider theme={theme}>
            <div style={{ height: '100%', width: '100%' }}>
              <Header
                lang={lang}
                langSelect={this.handleLangChange}
                user={user}
              >
                <Nav items={items} />
              </Header>

              {/*<Route exact={true} path="/login" component={Login} lang={lang} />*/}
              <Route
                exact={true}
                path="/"
                lang={lang}
                user={user}
                render={props => <Home {...props} lang={lang} user={user} />}
                // langSelect={this.handleLangChange}
                // authenticated={authenticated}
              />
              {/*
              <Route
                exact={true}
                path={this.props.match.path}
                render={props => (
                  <EventsDetails {...props} lang={this.state.lang} />
                )}
              />
              */}
              {/*
              <PrivateRoute
                path="/whitelist"
                component={WhitelistPage}
                lang={lang}
                // langSelect={this.handleLangChange}
                authenticated={authenticated}
              />
              */}
              {/*<Route path="/meetup" component={EventsPage} lang={lang} />*/}
            </div>
          </ThemeProvider>
        </Router>
      </ReactCSSTransitionReplace>
    );
  }
}

export default App;
