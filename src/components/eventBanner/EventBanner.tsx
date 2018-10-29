import * as React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import Button from '../button/Button';

const Banner = styled.div`
  background: var(--purple-dark);
  color: white;
  text-transform: uppercase;
  font-size: 22px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  padding: 5px 0;

  .banner-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 980px;
    margin: 0 auto;

    @media (max-width: 524px) {
      flex-direction: column;
      align-items: center;

      & > *:not(:last-child) {
        margin-bottom: 5px;
      }
    }
  }

  span {
    display: flex;
    align-items: center;
  }

  @media (max-width: 967px) {
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (max-width: 700px) {
    font-size: 18px;
  }

  @media (max-width: 599px) {
    font-size: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const BannerTitle = styled.span`
  color: var(--yellow);
  margin-right: 1em;
`;

const Spacer = styled.span`
  display: flex;
  flex: 1 1 auto;
`;

const EventBanner = props => {
  const date = '08/11/2018';
  const goToMeetup = () => {
    props.history.push('/meetup');
  };

  return (
    <Banner>
      <div className="banner-container">
        <BannerTitle>{props.lang.bePartOfTheGgCoinMeetup}</BannerTitle>
        <span>{date} {props.lang.zurich}</span>
        <Spacer />
        <Button btnStyle="secondary" click={goToMeetup}>
          {props.lang.joinNow}
        </Button>
      </div>
    </Banner>
  );
};

export default withRouter(EventBanner);
