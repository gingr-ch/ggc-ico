import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Cookies from 'universal-cookie';
import { ThemeProvider } from 'styled-components';
// Import locale strings
import { strings } from './components/localization';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

// import global css
import './App.css';

import Base from './Base';

import PrivateRoute from './PrivateRoute';
import Login from './containers/login/Login';
// import EventsPage from './containers/eventsPage/EventsPage';
import LoaderPage from './components/loaderPage/LoaderPage';

const Home = Loadable({
  loader: () => import('./containers/home/Home'),
  loading: () => <LoaderPage />,
  delay: 500,
});

const EventsPage = Loadable({
  loader: () => import('./containers/eventsPage/EventsPage'),
  loading: () => <LoaderPage />,
  delay: 500,
});

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

  componentDidMount() {
    Base.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false,
        });
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
    const { authenticated, loading, lang } = this.state;

    if (loading) {
      return (
        <ReactCSSTransitionReplace
          transitionName="cross-fade"
          transitionLeaveTimeout={2000}
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
              <PrivateRoute
                exact={true}
                path="/"
                component={Home}
                authenticated={authenticated}
              />
              <Route exact={true} path="/login" component={Login} lang={lang} />
              <Route path="/meetup" component={EventsPage} lang={lang} />
            </div>
          </ThemeProvider>
        </Router>
      </ReactCSSTransitionReplace>
    );
  }
}

export default App;
