import * as React from 'react';
import Dialog from 'rc-dialog';
// import * as _ from 'lodash';

import 'rc-dialog/assets/index.css';
import TeamItem from '../teamItem/TeamItem';
import './TeamList.css';

const vlad = require('../../assets/img/team/vlad.jpg');
const flo = require('../../assets/img/team/flo.jpg');
const yurii = require('../../assets/img/team/yurii.jpg');
const nyhl = require('../../assets/img/team/nyhl.jpg');
const olha = require('../../assets/img/team/olha.jpg');
const jeff = require('../../assets/img/team/jeff.jpg');
const taras = require('../../assets/img/team/taras.jpg');
const sergiy = require('../../assets/img/team/sergiy.jpg');

const swiss = require('../../assets/img/flags/switzerland.png');
const southAfrica = require('../../assets/img/flags/south-africa.png');
const ukraine = require('../../assets/img/flags/ukraine.png');

const list = [
  {
    id: 1,
    img: vlad,
    flag: swiss,
    name: 'Vladimir Vuckovic',
    role: 'SALES MANAGER',
    description:
      'Vladimir has a proven track record of high sale levels with an extensive network of contacts in many industries, particularly insurance.',
  },
  {
    id: 2,
    img: flo,
    flag: swiss,
    name: 'Florian Fröhlich',
    role: 'ART DIRECTOR / BRANDING',
    description:
      'Responsible for making everything look beautiful and easy to use. With 10 years experience in graphic design working for major advertising companies and having been awarded prizes. When it comes to Florian there are no limits to the graphics, creativity, and vision he envisages. He has a true gift when it comes to branding, design, and marketing.',
  },
  {
    id: 3,
    img: yurii,
    flag: ukraine,
    name: 'Yurii Firs',
    role: 'CTO',
    description:
      'I’m a web whiz trying to facilitate the modern life by letting more magic (technology) to the world. For the purpose of making this come true, I live and breathe the frontend (JS, Angular, ReactJS, etc.) and backend (PHP, Node.js, etc.) tasks having devoted the quarter of my life to creating top-notch solutions for Gingr.',
  },
  {
    id: 4,
    img: nyhl,
    flag: southAfrica,
    name: 'Nyhl Rawlings',
    role: 'BLOCKCHAIN DEVELOPER',
    description:
      'Having learnt to program as a child, has over the years mastered neat and efficient code in more than a dozen programming languages. Nyhl is also proficient in circuit design, repair and retro fitting and is currently studying integrated circuit design. His IT skills include c/c++, Qt, java, php, javacript, ruby, python, c#, assembly x86, assembly arm, Objective C, Swift digital circuit design, 3d modelling.',
  },
  {
    id: 5,
    img: olha,
    flag: ukraine,
    name: 'Olha Koshchuk',
    role: 'PROJECT MANAGER',
    description:
      'Hi, I’m Olha. I’m a Project Manager. I’m a problem-solving maniac. My super powers in organisation, communication and leading a team of developers skills are merged to assist the Gingr’ needs.',
  },
  {
    id: 6,
    img: jeff,
    flag: swiss,
    name: 'Jeff Stählin',
    role: 'SENIOR FRONTEND DEVELOPER',
    description:
      'With over 9 years of experience in IT and specializing in front-end development Jefferson is truly passionate about coding. One of his main focuses is ensuring that the user experience on Gingr is of the highest level providing optimal interaction. His skill set includes HTML, CSS, SCSS, Less, Responsive Design, Javascript, ES2015, jQuery, Wordpress with a lot of experience with the AngularJS & Angular 2+ frameworks. Well versed in using NodeJS. Adept with modern build tools such as Webpack, Grunt & Gulp. Comfortable on the command line for everyday use. Average experience in MYSQL and general server setups with NGINX and Apache. Some experience in PHP from creating Wordpress plugins and themes.',
  },
  {
    id: 7,
    img: taras,
    flag: ukraine,
    name: 'Taras Kohanets',
    role: 'SENIOR DEVELOPER',
    description:
      'I’m Terry, a web developer with totally fresh approach to web and mobile development. I’m keen on dealing with modern technologies like JavaScript, Angular, Sails.js, Express.js, Node.js.',
  },
  {
    id: 8,
    img: sergiy,
    flag: ukraine,
    name: 'Sergiy Voitovych',
    role: 'TECH LEAD - WEB LOGIC',
    description:
      'I’m Serhii. I’m just a web developer who strives to create the awesome stuff. Whether it’s managing a remote team or delivering challenging projects from start to launch, I’m ready to take it up. The tools I’ve got the most passion for are JavaScript, PHP, Node.js, Sails.js, Express.js, YII1/2, Angular.',
  },
];

class TeamList extends React.Component {
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

  onClick = (item: object, e: any) => {
    // const currProfile = _.find(list, { id: id });
    const currProfile = item;
    console.warn(currProfile);
    this.setState({
      mousePosition: {
        x: e.pageX,
        y: e.pageY,
      },
      visible: true,
      profile: item,
    });
    console.warn(this.state);
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
            flag={item.flag}
            name={item.name}
            role={item.role}
            description={item.description}
            onClick={e => this.onClick(item, e)}
          />
        ))}
        {dialog}
      </div>
    );
  }
}

export default TeamList;
