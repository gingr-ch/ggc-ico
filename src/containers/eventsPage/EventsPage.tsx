import * as React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
// import GoogleMapReact from 'google-map-react';
import { strings } from '../../components/localization';

import EventsDetails from '../../components/eventsDetails/EventsDetails';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Left = styled.div`
  width: 50vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background: var(--purple-dark);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(-5vw);
  z-index: 2;

  &::after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 100vh 0 0 10vw;
    border-color: transparent transparent transparent var(--purple-dark);
    position: absolute;
    right: -9.95vw;
    top: 0;
    z-index: 3;
  }

  @media (max-width: 599px) {
    width: 100vw;
    height: 50vh;
    transform: translateX(0);
    justify-content: flex-start;
    padding-top: 2em;
    overflow: hidden;

    &::after {
      content: none;
    }
  }
`;

const Right = styled.div`
  width: 60vw;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--purple);
  z-index: 1;

  @media (max-width: 599px) {
    width: 100vw;
    height: 50vh;
    min-height: 344px;
    bottom: 0;
    top: auto;
    z-index: 5;
    align-items: stretch;
    padding-bottom: 24px;
  }
`;

const Header = styled.h2`
  @media (max-height: 600px) {
    display: none;
  }
`;

class EventsPage extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.state = {
      center: {
        lat: 59.95,
        lng: 30.33,
      },
      zoom: 11,
      lang: strings,
      error: false,
    };
  }

  render() {
    return (
      <Container>
        EventsPage
        <Left>
          <Header>{this.state.lang.ggcCoinIcoComingSoon}!</Header>
          <Route
            exact={true}
            path="/meetup"
            component={EventsDetails}
            lang={this.state.lang}
          />
        </Left>
        <Right />
      </Container>
    );
  }
}

export default EventsPage;
