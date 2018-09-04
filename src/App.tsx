import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
// Import locale strings
import { strings } from './components/localization';

// import global css
import './App.css';

import Base from './Base';

import PrivateRoute from './PrivateRoute';
import Login from './containers/login/Login';

const Home = Loadable({
  loader: () => import('./containers/home/Home'),
  loading: () => <div>Loading...</div>,
});

// import Home from './containers/home/Home';

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

  componentWillMount() {
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
  }

  render() {
    const { authenticated, loading, lang } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }

    return (
      <Router>
        <div>
          <PrivateRoute
            exact={true}
            path="/"
            component={Home}
            authenticated={authenticated}
          />
          <Route exact={true} path="/login" component={Login} lang={lang} />
        </div>
      </Router>
    );
  }
}

export default App;
