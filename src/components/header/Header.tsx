import * as React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Img from 'react-image';

import LanguageChanger from '../languageChanger/LanguageChanger';
import Button from '../button/Button';
import Nav from '../nav/Nav';
import './Header.css';

const gingrLogo = require(process.env.REACT_APP_MEDIA_URL + 'logo.png');

const users = {
  friends1: 'L247',
  friends2: 'L229',
  friends3: 'L198',
  friends4: 'L230',
  friends5: 'L224',
  friends6: 'L231',
  friends7: 'L232',
  friends8: 'L234',
  friends9: 'L235',
  friends10: 'L236',
  friends11: 'L237',
  friends12: 'L238',
  friends13: 'L239',
  friends14: 'L240',
  friends15: 'L241',
  friends16: 'L242',
  friends17: 'L243',
  friends18: 'L244',
  friends19: 'L245',
  friends20: 'L246',
};

let adminIco = 'https://admin.ggcico.io/auth/register?refcode=';
let home = '/';
// let whitelist = '/whitelist';
// const whitePaper =
//   'https://docs.wixstatic.com/ugd/2eea42_b23b9045b42246c2ac4f7c6cbf5ee65c.pdf';
const whitepaperPdf = 'https://api.ggcoin.ch/download/pdf/ggc-white-paper.pdf';

class Header extends React.Component<any, any> {
  // state = {
  //   right: false,
  //   user: 'friends',
  // };

  constructor(props: object) {
    super(props);
    this.state = {
      right: false,
    };
  }

  click(url: string, blank: boolean) {
    if (blank) {
      window.open(url, '_blank');
    } else {
      this.props.history.push(url);
    }
  }

  toggleDrawer = (side: string, open: boolean) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    if (this.props.user) {
      adminIco =
        'https://admin.ggcico.io/auth/register?refcode=' +
        users[this.props.user];
    }

    return (
      <header className="gg-header">
        <div className="gg-header-container">
          <Link to={home}>
            <Img
              src={gingrLogo}
              className="App-logo"
              alt="logo"
              style={{ minWidth: '123px', minHeight: '48px' }}
            />
          </Link>

          {this.props.children}

          <div className="gg-header-container__buttons">
            <a
              href={whitepaperPdf}
              style={{
                textTransform: 'uppercase',
                color: 'white',
                border: '2px solid white',
                fontSize: '15px',
                textDecoration: 'none',
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              target="_blank"
            >
              {this.props.lang.whitepaper}
            </a>

            {/*
            {this.props.user && this.props.user.indexOf('friends') !== 0 && (
              <Link
                to={whitelist}
                // click={() => this.click(whitelist, false)}
                // borderColor="#ffffff"
                // className="btn-login"
                style={{
                  textTransform: 'uppercase',
                  color: 'white',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: 'white',
                  fontSize: '15px',
                  textDecoration: 'none',
                  height: 'auto',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                {this.props.lang.whitelist}
              </Link>
            )}
            */}

            <Button
              click={() => this.click(adminIco, true)}
              borderColor="#df9eff"
              className="btn-login"
            >
              {this.props.lang.login}
            </Button>
          </div>

          <LanguageChanger
            lang={this.props.lang}
            langSelect={this.props.langSelect}
          />

          <div className="mobile-nav-button">
            <Button
              click={this.toggleDrawer('right', true)}
              className={this.state.right ? 'gg-button--clicked' : ''}
            >
              <div className="nav-icon-bar1" />
              <div className="nav-icon-bar2" />
              <div className="nav-icon-bar3" />
            </Button>
          </div>

          <Drawer
            anchor="right"
            open={this.state.right}
            onClose={this.toggleDrawer('right', false)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('right', false)}
              onKeyDown={this.toggleDrawer('right', false)}
            >
              <Nav lang={this.props.lang} side={true} />
            </div>
          </Drawer>
        </div>
      </header>
    );
  }
}

export default Header;
