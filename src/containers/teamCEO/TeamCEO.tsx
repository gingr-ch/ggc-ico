import * as React from 'react';
import Dialog from 'rc-dialog';
import Img from 'react-image';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import 'rc-dialog/assets/index.css';
import './TeamCEO.css';

const image = require(process.env.REACT_APP_MEDIA_URL + 'teamCEO.jpg');
const thumb = require(process.env.REACT_APP_MEDIA_URL + 'thumbs/teamCEO.jpg');
const ceoFlag = require(process.env.REACT_APP_MEDIA_URL +
  'flags/switzerland.png');
const linkedin = require(process.env.REACT_APP_MEDIA_URL +
  'icons/linkedin_tiny.png');

const list = [
  {
    id: 1,
    img: image,
    flag: ceoFlag,
    name: 'Sergio Rigert',
    role: 'CEO & FOUNDER',
    description:
      'Sergio’s dream is to make the world a better place. With a natural ability to lead his team and emulate his passion for the future, his infectious, funny, honest, and straight forward personality attracts top level people who delight in working with him. Sergio has always given 100 per cent to the project. He is not afraid to push the boundaries both of himself, his team, and in fact the views of the entire world. He constantly questions the status quo and is not afraid to challenge it.',
  },
];

class TeamCEO extends React.Component<any, any> {
  state = {
    visible: false,
    width: 860,
    destroyOnClose: true,
    center: true,
    mousePosition: { x: 0, y: 0 },
    profile: {
      id: 0,
      img: '',
      flag: '',
      name: '',
      role: '',
      description: '',
    },
  };

  constructor(props: object) {
    super(props);

    this.social = this.social.bind(this);
  }

  onClick = (item: object, e: any) => {
    this.setState({
      mousePosition: {
        x: e.pageX,
        y: e.pageY,
      },
      visible: true,
      profile: item,
    });
  };

  onClose = () => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  onDestroyOnCloseChange = (e: any) => {
    this.setState({
      destroyOnClose: e.target.checked,
    });
  };

  center = (e: any) => {
    this.setState({
      center: e.target.checked,
    });
  };

  social() {
    window.open(
      'https://www.linkedin.com/comm/in/sergio-rigert-b25063137?trk=eml-email_second_guest_reminder_02-hero-2-prof~photo&trkEmail=eml-email_second_guest_reminder_02-hero-2-prof~photo-null-v0wfmr~jkcbzkw5~m7-null-neptune%2Fprofile~vanity%2Eview&lipi=urn%3Ali%3Apage%3Aemail_email_second_guest_reminder_02%3Bgq%2FJuvdCR%2F6JeguqEAZ%2FWA%3D%3D',
      '_blank'
    );
  }

  render() {
    const style = {
      width: this.state.width,
    };
    let wrapClassName = '';
    if (this.state.center) {
      wrapClassName = 'center';
    }

    const dialog = (
      <Dialog
        visible={this.state.visible}
        wrapClassName={wrapClassName}
        animation="zoom"
        maskAnimation="fade"
        onClose={this.onClose}
        style={style}
        mousePosition={this.state.mousePosition}
        destroyOnClose={this.state.destroyOnClose}
      >
        <div className="rc-dialog-body__content flex-row">
          <div
            style={{
              background: '#802e7a',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '205px',
                height: '205px',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundImage: 'url(' + this.state.profile.img + ')',
              }}
            >
              <img
                src={this.state.profile.flag}
                alt=""
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  right: '-10px',
                }}
              />
            </div>
            <div className="ceo-details__social">
              <img src={linkedin} alt="linkedin logo" onClick={this.social} />
            </div>
          </div>
          <div className="rc-dialog-body__text flex-column">
            <h2
              style={{
                fontSize: '38px',
                color: '#F39FFF',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '0',
              }}
            >
              {this.state.profile.name}
            </h2>
            <h4
              style={{
                fontSize: '19px',
                color: '#812A7B',
                letterSpacing: '0.05em',
                marginTop: '10px',
              }}
            >
              {this.state.profile.role}
            </h4>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.5em',
                color: '#000000',
                fontWeight: 400,
              }}
            >
              {this.state.profile.description}
            </p>
          </div>
        </div>
      </Dialog>
    );

    return (
      <div className="gg-section-container gg-section-container--teamCEO">
        <div className="gg-content-container">
          <style>
            {`
            .center {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            `}
          </style>

          <Img
            src={image}
            alt="Sergio Rigert CEO of Gingr"
            onClick={e => this.onClick(list[0], e)}
            style={{
              width: '638px',
              height: '426px',
            }}
            loader={
              <Img
                src={thumb}
                style={{
                  width: '638px',
                  height: '426px',
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
                  <div
                    className="ceo-details__image"
                    data-about={this.props.lang.aboutMe}
                  >
                    {children}
                  </div>
                </ReactCSSTransitionReplace>
              );
            }}
          />

          <div
            className="ceo-details"
            style={{
              marginTop: '30px',
              marginBottom: '150px',
              textAlign: 'left',
              width: '100%',
              maxWidth: '638px',
            }}
            onClick={e => this.onClick(list[0], e)}
          >
            <div className="flex-row" style={{ justifyContent: 'flex-start' }}>
              <a
                href="#team-ceo"
                style={{
                  fontSize: '29px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  marginRight: '18px',
                }}
              >
                SERGIO RIGERT
              </a>
              <img src={ceoFlag} alt="" />
            </div>
            <h4
              style={{
                fontWeight: 'normal',
                fontSize: '18px',
                letterSpacing: '0.1em',
                marginTop: '5px',
              }}
            >
              {this.props.lang.ceo} & {this.props.lang.founder}
            </h4>
            <p style={{ lineHeight: '1.4em', fontSize: '15px' }}>
              {this.props.lang.sergiosDream}
            </p>
            <p style={{ lineHeight: '1.4em', fontSize: '15px' }}>
              {this.props.lang.sergioHasAlways}
            </p>
          </div>
        </div>
        {dialog}
      </div>
    );
  }
}

export default TeamCEO;
