import * as React from 'react';
import Dialog from 'rc-dialog';
// import * as _ from 'lodash';
import Img from 'react-image';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import 'rc-dialog/assets/index.css';
import TeamItem from '../teamItem/TeamItem';
import './TeamList.css';

// require images
const vlad = require(process.env.REACT_APP_MEDIA_URL + 'team/vlad.jpg');
const flo = require(process.env.REACT_APP_MEDIA_URL + 'team/flo.jpg');
const yurii = require(process.env.REACT_APP_MEDIA_URL + 'team/yurii.jpg');
const nyhl = require(process.env.REACT_APP_MEDIA_URL + 'team/nyhl.jpg');
const olha = require(process.env.REACT_APP_MEDIA_URL + 'team/olha.jpg');
const jeff = require(process.env.REACT_APP_MEDIA_URL + 'team/jeff.jpg');
const taras = require(process.env.REACT_APP_MEDIA_URL + 'team/taras.jpg');
const sergiy = require(process.env.REACT_APP_MEDIA_URL + 'team/sergiy.jpg');
const linkedin = require(process.env.REACT_APP_MEDIA_URL +
  'icons/linkedin_tiny.png');

// require thumbnails
const vladThumb = require(process.env.REACT_APP_MEDIA_URL +
  'team/thumbs/vlad.jpg');
const floThumb = require(process.env.REACT_APP_MEDIA_URL +
  'team/thumbs/flo.jpg');
const yuriiThumb = require(process.env.REACT_APP_MEDIA_URL +
  'team/thumbs/yurii.jpg');
const nyhlThumb = require(process.env.REACT_APP_MEDIA_URL +
  'team/thumbs/nyhl.jpg');
const olhaThumb = require(process.env.REACT_APP_MEDIA_URL +
  'team/thumbs/olha.jpg');
const jeffThumb = require(process.env.REACT_APP_MEDIA_URL +
  'team/thumbs/jeff.jpg');
const tarasThumb = require(process.env.REACT_APP_MEDIA_URL +
  'team/thumbs/taras.jpg');
const sergiyThumb = require(process.env.REACT_APP_MEDIA_URL +
  'team/thumbs/sergiy.jpg');

// require flags
const swiss = require(process.env.REACT_APP_MEDIA_URL +
  'flags/switzerland.svg');
const southAfrica = require(process.env.REACT_APP_MEDIA_URL +
  'flags/south-africa.svg');
const ukraine = require(process.env.REACT_APP_MEDIA_URL + 'flags/ukraine.svg');

const social = (url: string) => {
  window.open(url, '_blank');
};
class TeamList extends React.Component<any, any> {
  state = {
    visible: false,
    width: 860,
    destroyOnClose: true,
    center: true,
    mousePosition: { x: 0, y: 0 },
    profile: {
      id: 0,
      img: '',
      thumb: '',
      flag: '',
      name: '',
      role: '',
      description: '',
      linkedin: '',
    },
  };

  constructor(props: any) {
    super(props);
  }

  onClick = (item: object, e: any) => {
    // const currProfile = _.find(list, { id: id });
    // const currProfile = item;
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

  render() {
    const style = {
      width: this.state.width,
    };

    let wrapClassName = '';
    if (this.state.center) {
      wrapClassName = 'center';
    }

    const list = [
      {
        id: 1,
        img: vlad,
        thumb: vladThumb,
        flag: swiss,
        name: 'Vladimir Vuckovic',
        role: this.props.lang.salesManager,
        description: this.props.lang.vladimirHasAProven,
      },
      {
        id: 2,
        img: flo,
        thumb: floThumb,
        flag: swiss,
        name: 'Florian Fröhlich',
        role: this.props.lang.artDirector + ' / ' + this.props.lang.branding,
        description: this.props.lang.responsibleForMaking,
      },
      {
        id: 3,
        img: yurii,
        thumb: yuriiThumb,
        flag: ukraine,
        name: 'Yurii Firs',
        role: this.props.lang.cto,
        description: this.props.lang.imAWebWhiz,
        linkedin: 'https://www.linkedin.com/in/yuriyfirs/',
      },
      {
        id: 4,
        img: nyhl,
        thumb: nyhlThumb,
        flag: southAfrica,
        name: 'Nyhl Rawlings',
        role: this.props.lang.blockchainDeveloper,
        description: this.props.lang.havingLearntToProgram,
      },
      {
        id: 5,
        img: olha,
        thumb: olhaThumb,
        flag: ukraine,
        name: 'Olha Koshchuk',
        role: this.props.lang.projectManager,
        description: this.props.lang.hiImOlha,
        linkedin: 'https://www.linkedin.com/in/olha-koshchuk/',
      },
      {
        id: 6,
        img: jeff,
        thumb: jeffThumb,
        flag: swiss,
        name: 'Jeff Stählin',
        role: this.props.lang.seniorFrontendDeveloper,
        description: this.props.lang.withOver9Years,
      },
      {
        id: 7,
        img: taras,
        thumb: tarasThumb,
        flag: ukraine,
        name: 'Taras Kohanets',
        role: this.props.lang.seniorDeveloper,
        description: this.props.lang.imTerry,
        linkedin: 'https://www.linkedin.com/in/terry-kohanets-280b52159/',
      },
      {
        id: 8,
        img: sergiy,
        thumb: sergiyThumb,
        flag: ukraine,
        name: 'Sergiy Voitovych',
        role: this.props.lang.techLead + ' - ' + this.props.lang.webLogic,
        description: this.props.lang.imSerhii,
        linkedin: 'https://www.linkedin.com/in/sergiyvoytovych/',
      },
    ];

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
          <div style={{ background: '#802e7a', padding: '40px' }}>
            <div
              style={{
                position: 'relative',
                width: '205px',
                height: '205px',
              }}
            >
              <Img
                src={this.state.profile.img}
                style={{
                  position: 'absolute',
                  width: '205px',
                  height: '205px',
                  top: 0,
                  left: 0,
                }}
                loader={
                  <Img
                    src={this.state.profile.thumb}
                    style={{
                      position: 'absolute',
                      width: '205px',
                      height: '205px',
                      top: 0,
                      left: 0,
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
            {this.state.profile.linkedin && (
              <div className="ceo-details__social">
                <img
                  src={linkedin}
                  alt="linkedin logo"
                  onClick={() => social(this.state.profile.linkedin)}
                />
              </div>
            )}
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
      <div className="team-list">
        {list.map(item => (
          <TeamItem
            key={item.id}
            id={item.id}
            img={item.img}
            thumb={item.thumb}
            flag={item.flag}
            name={item.name}
            role={item.role}
            description={item.description}
            onClick={e => this.onClick(item, e)}
            lang={this.props.lang}
          />
        ))}
        {dialog}
      </div>
    );
  }
}

export default TeamList;
