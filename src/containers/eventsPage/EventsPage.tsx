import * as React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { strings } from '../../components/localization';

import EventsDetails from '../../components/eventsDetails/EventsDetails';
import EventsRegistration from '../../components/eventsRegistration/EventsRegistration';
import EventsRegConfirmation from '../../components/eventsRegConfirmation/EventsRegConfirmation';
import MapPin from '../../components/mapPin/MapPin';

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

  @media (max-width: 699px) {
    width: 100vw;
    height: 100vh;
    transform: translateX(0);
    justify-content: flex-start;
    padding-top: 2em;
    overflow: hidden;

    &::after {
      content: none;
    }

    @media (max-width: 699px) {
      padding-top: 0;
    }
  }
`;

const LeftContainer = styled.div`
  width: 50%;
  height: auto;
  transform: translate3d(10%, 0, 0);

  button {
    margin-top: 1em;
  }

  @media (max-width: 699px) {
    width: 80%;
    transform: translate3d(0, 0, 0);

    button {
      width: 100%;
    }
  }
`;

// const Right = styled.div`
//   width: 60vw;
//   height: 100vh;
//   position: absolute;
//   right: 0;
//   top: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: var(--purple);
//   z-index: 1;
//
//   @media (max-width: 599px) {
//     width: 100vw;
//     height: 50vh;
//     min-height: 344px;
//     bottom: 0;
//     top: auto;
//     z-index: 5;
//     align-items: stretch;
//     padding-bottom: 24px;
//   }
// `;

class EventsPage extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.state = {
      center: {
        lat: 47.3882067,
        lng: 8.4946743,
      },
      zoom: 15,
      lang: strings,
      error: false,
    };
  }

  render() {
    return (
      <Container>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyBnTvJK4x80mH7WfOs-HpCJ9uwuguyiMGc',
            }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
            <MapPin lat={this.state.center.lat} lng={this.state.center.lng} />
          </GoogleMapReact>
        </div>
        <Left>
          <LeftContainer>
            <Route
              exact={true}
              path={this.props.match.path}
              component={EventsDetails}
              lang={this.state.lang}
            />
            <Route
              path={`${this.props.match.path}/registration`}
              component={EventsRegistration}
              lang={this.state.lang}
            />
            <Route
              path={`${this.props.match.path}/confirmation`}
              component={EventsRegConfirmation}
              lang={this.state.lang}
            />
          </LeftContainer>
        </Left>
      </Container>
    );
  }
}

export default EventsPage;
