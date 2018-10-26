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
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  button {
    margin-top: 2.5em;
  }
`;

const EventsRegConfirmation = props => {
  const goToHome = () => {
    props.history.push('/');
  };

  return (
    <Container>
      <Heading>Thank you for joining</Heading>
      <div>All details will be sent via email</div>
      <Button btnStyle="secondary-fat" click={goToHome}>
        Go to GGC site
      </Button>
    </Container>
  );
};

export default EventsRegConfirmation;
