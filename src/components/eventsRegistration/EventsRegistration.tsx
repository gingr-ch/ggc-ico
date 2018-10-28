import * as React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
// import TextField from '@material-ui/core/TextField';
import history from '../../components/BrowserHistory';
import Button from '../../components/button/Button';
import MobileNav from '../../components/mobileNav/MobileNav';
import './EventsRegistration.css';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Heading = styled.h2`
  font-size: 28px;
  color: var(--yellow);
  text-transform: uppercase;
  font-family: Asap;
  font-weight: normal;
  margin-bottom: 0em;
  max-width: 250px;
`;

const Spacer = styled.div`
  @media (max-width: 699px) {
    display: flex;
    flex: 1 1 auto;
  }
`;

// const Container = styled.div`
//   width: 50%;
//   height: auto;
//   transform: translate3d(10%, 0, 0);
//
//   button {
//     margin-top: 1em;
//   }
// `;

class EventsRegistration extends React.Component<any, any> {
  constructor(props: object) {
    super(props);

    this.state = {
      company: '',
      surname: '',
      name: '',
      phone: '',
      email: '',
      sending: false,
      sent: false,
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ sending: true });

    fetch('/meetup/registration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'meetup', ...this.state }),
    })
      .then(() =>
        setTimeout(() => {
          this.setState({ sent: true });
          history.push('/confirmation');
          // tslint:disable-next-line:align
        }, 3000)
      )
      .catch(error => alert(error));
  };

  render() {
    const { company, surname, name, phone, email, sending, sent } = this.state;

    return (
      <div>
        <MobileNav>Back</MobileNav>
        <Heading>Register Gingr GG Coin Meetup</Heading>
        <form
          onSubmit={this.handleSubmit}
          name="meetup"
          className="form flex-column"
          style={{ paddingLeft: 0, alignItems: 'flex-start' }}
        >
          <input type="hidden" name="form-name" value="meetup" />
          <Input
            className="form__input"
            type="text"
            name="company"
            id="company"
            placeholder="Company"
            onChange={this.handleChange}
            value={company}
          />

          <Input
            required={true}
            className="form__input"
            type="text"
            name="surname"
            id="surname"
            placeholder="Surname *"
            onChange={this.handleChange}
            value={surname}
          />
          <Input
            required={true}
            className="form__input"
            type="text"
            name="name"
            id="name"
            placeholder="Name *"
            onChange={this.handleChange}
            value={name}
          />
          <Input
            required={true}
            className="form__input"
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone *"
            onChange={this.handleChange}
            value={phone}
          />
          <Input
            required={true}
            className="form__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email *"
            onChange={this.handleChange}
            value={email}
          />
          <Spacer />
          <Button
            btnStyle="secondary-fat"
            btnType="submit"
            className={sent && 'btn-sent'}
          >
            {sending &&
              !sent && (
                <svg
                  width="55"
                  height="17"
                  viewBox="0 0 120 30"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                >
                  <circle cx="15" cy="15" r="15">
                    <animate
                      attributeName="r"
                      from="15"
                      to="15"
                      begin="0s"
                      dur="0.8s"
                      values="15;9;15"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="fill-opacity"
                      from="1"
                      to="1"
                      begin="0s"
                      dur="0.8s"
                      values="1;.5;1"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                    <animate
                      attributeName="r"
                      from="9"
                      to="9"
                      begin="0s"
                      dur="0.8s"
                      values="9;15;9"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="fill-opacity"
                      from="0.5"
                      to="0.5"
                      begin="0s"
                      dur="0.8s"
                      values=".5;1;.5"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="105" cy="15" r="15">
                    <animate
                      attributeName="r"
                      from="15"
                      to="15"
                      begin="0s"
                      dur="0.8s"
                      values="15;9;15"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="fill-opacity"
                      from="1"
                      to="1"
                      begin="0s"
                      dur="0.8s"
                      values="1;.5;1"
                      calcMode="linear"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              )}
            {sending && sent && 'Sent'}
            {!sent && !sending && 'Send'}
          </Button>
        </form>
      </div>
    );
  }
}

export default EventsRegistration;
