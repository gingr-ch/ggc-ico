import * as React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';

const Heading = styled.h2`
  font-size: 28px;
  max-width: 227px;
  color: var(--yellow);
  text-transform: uppercase;
  font-family: Asap;
  font-weight: normal;
  margin-bottom: 1.7em;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 19px;
  font-size: normal;
  margin-bottom: 1.9em;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.3em;

  > * {
    &:first-child {
      flex: 1 1 40%;
      color: var(--yellow);
    }
    &:nth-child(2) {
      flex: 1 1 60%;

      & > span {
        color: var(--yellow);
        font-size: 16px;
        display: block;
        margin-top: 8px;
      }
    }
  }
`;

const EventsDetails = props => {
  return (
    <div
      style={{
        width: '50%',
        height: 'auto',
        transform: 'translate3d(10%, 0, 0)',
      }}
    >
      <Heading>Be part of the GG Coin Meetup</Heading>
      <List>
        <ListItem>
          <span>What</span>
          <span>Business Networking Meetup</span>
        </ListItem>
        <ListItem>
          <span>When</span>
          <span>08/11/2018</span>
        </ListItem>
        <ListItem>
          <span>Where</span>
          <span>Hihlstrasse 473, 8048 Zürich</span>
        </ListItem>
      </List>

      <Heading>Timeline</Heading>
      <List>
        <ListItem>
          <span>17:00 - 18:00</span>
          <span>Meetup</span>
        </ListItem>
        <ListItem>
          <span>18:00 - 18:30</span>
          <div>
            GGC Coin Presentation
            <span>with Sergio Rigert / CEO</span>
          </div>
        </ListItem>
        <ListItem>
          <span>18:30 - 22:00</span>
          <div>
            Open Talk
            <span>with Gingr Team</span>
          </div>
        </ListItem>
      </List>

      <Button btnStyle="secondary-fat">Join</Button>
    </div>
  );
};

export default EventsDetails;
