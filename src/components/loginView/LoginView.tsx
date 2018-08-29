import * as React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
// import { withStyles } from '@material-ui/core/styles';

// import Button from '../button/Button';
import './LoginView.css';

const LoginTitle = styled.h1`
  text-transform: uppercase;
  color: var(--yellow);
  font-family: Asap;
  font-size: 28px;
  font-weight: 500;
`;

const Button = styled.button`
  background: var(--yellow);
  color: var(--purple);
  margin-top: 2em;
  padding: 12px 44px;
  text-transform: uppercase;
  border: none;
  border-radius: 3px;

  @media (max-width: 420px) {
    width: 100%;
    font-size: 20px;
    padding: 24px 44px;
  }
`;

// const styles = theme => ({
//   input: {
//     color: 'white',
//     width: '100%',
//     maxWidth: '311px',
//     marginTop: '3em',
//     '&:before': {
//       borderBottom: '1px solid rgba(255, 255, 255, 0.42)',
//     },
//     '&:after': {
//       borderBottom: '2px solid var(--yellow)',
//     },
//     '&:hover:before': {
//       borderBottom: '2px solid rgba(255, 255, 255, 0.87) !important',
//     },
//   },
// });

const LoginView = ({ onSubmit }) => {
  // const { classes } = props;
  return (
    <div className="login-view">
      <LoginTitle>Password Protected</LoginTitle>
      <form
        onSubmit={onSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Input
          name="password"
          type="password"
          placeholder="Password"
          className="login-input"
        />
        <Button type="submit">ENTER</Button>
      </form>
    </div>
  );
};

export default LoginView;
