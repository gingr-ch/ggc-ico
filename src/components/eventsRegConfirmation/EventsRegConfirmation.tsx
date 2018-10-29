import * as React from 'react';
import styled from 'styled-components';
import Button from '../../components/button/Button';

const Heading = styled.h2`
  font-size: 28px;
  color: var(--yellow);
  text-transform: uppercase;
  font-family: Asap;
  font-weight: normal;
  margin-bottom: 0em;

  & + div {
    text-align: center;
  }

  @media (max-width: 699px) {
    margin-bottom: 1em;

    & + div {
      font-size: 21px;
      max-width: 235px;
      text-align: left;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;

  button {
    margin-top: 2.5em;
  }

  @media (max-width: 699px) {
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const EventsRegConfirmation = props => {
  const goToHome = () => {
    props.history.push('/');
  };

  return (
    <Container>
      <div className="heading-container">
        <Heading>{props.lang.thankYouForJoining}</Heading>
        <div>{props.lang.allDetailsWillBeSentViaEmail}</div>
      </div>
      <Button btnStyle="secondary-fat" click={goToHome}>
        {props.lang.goToGgcSite}
      </Button>
    </Container>
  );
};

export default EventsRegConfirmation;
