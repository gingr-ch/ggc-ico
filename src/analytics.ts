import PropTypes from 'prop-types';
import * as React from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-134491133-1');

export default class GAListener extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  componentDidMount() {
    this.sendPageView(this.context.router.history.location);
    this.context.router.history.listen(this.sendPageView);
  }

  sendPageView(location: any) {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }

  render() {
    return this.props.children;
  }
}
