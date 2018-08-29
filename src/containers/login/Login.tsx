import * as React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import Img from 'react-image';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import Base from '../../Base';

import LoginView from '../../components/loginView/LoginView';
import { strings } from '../../components/localization';

// Require images
const reasonsImg = require(process.env.REACT_APP_MEDIA_URL +
  'reason_to_invest_316.png');
const reasonsImgThumb = require(process.env.REACT_APP_MEDIA_URL +
  'thumbs/reason_to_invest.png');

// styled components
const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const LoginLeft = styled.div`
  width: 50vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background: var(--pink);
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
    border-color: transparent transparent transparent var(--pink);
    position: absolute;
    right: -9.99vw;
    top: 0;
    z-index: 3;
  }

  @media (max-width: 599px) {
    width: 100vw;
    height: 50vh;
    transform: translateX(0);
    justify-content: flex-start;
    padding-top: 2em;

    &::after {
      content: none;
    }
  }
`;

const LoginRight = styled.div`
  width: 60vw;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #78006f;
  z-index: 1;

  @media (max-width: 599px) {
    width: 100vw;
    height: 50vh;
    bottom: 0;
    top: auto;
    z-index: 5;
    align-items: stretch;
    padding-bottom: 24px;
  }
`;

class Login extends React.Component<any, any> {
  constructor(props: object) {
    super(props);

    this.state = { lang: strings };
  }

  signIn = async (email: string, password: string) => {
    await Base.auth().signInWithEmailAndPassword(email, password);
    this.props.history.push('/');
  };

  handleSignUp = async event => {
    event.preventDefault();
    const { password } = event.target.elements;
    const email: string = 'login@ggcico.io';
    try {
      this.signIn(email, password.value);
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <LoginContainer>
        <LoginLeft>
          <h2>{this.state.lang.ggcCoinIcoComingSoon}!</h2>
          <Img
            src={reasonsImg}
            style={{
              width: 'auto',
              height: '100%',
              maxWidth: '316px',
              maxHeight: '600px',
              transform: 'translateX(-20px)',
            }}
            alt="GGC ICO logo in a cloud"
            className="rti-image"
            loader={
              <Img
                src={reasonsImgThumb}
                style={{
                  width: 'auto',
                  height: '100%',
                  maxWidth: '316px',
                  maxHeight: '600px',
                  transform: 'translateX(-20px)',
                  filter: 'blur(10px)',
                }}
              />
            }
            container={children => {
              return (
                <ReactCSSTransitionReplace
                  transitionName="fade-wait"
                  changeWidth={false}
                >
                  {children}
                </ReactCSSTransitionReplace>
              );
            }}
          />
        </LoginLeft>
        <LoginRight>
          <LoginView onSubmit={this.handleSignUp} />
        </LoginRight>
      </LoginContainer>
    );
  }
}

export default withRouter(Login);
