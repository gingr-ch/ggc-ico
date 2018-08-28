import * as React from 'react';
import { withRouter } from 'react-router';
import Base from '../../Base';

import LoginView from '../../components/loginView/LoginView';

class Login extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
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
    return <LoginView onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(Login);
