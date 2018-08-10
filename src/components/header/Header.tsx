import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';

import LanguageChanger from '../languageChanger/LanguageChanger';
import Button from '../button/Button';
import Nav from '../nav/Nav';
import './Header.css';

const gingrLogo = require(process.env.REACT_APP_MEDIA_URL + 'logo.png');

const adminIco = 'https://admin.ggcico.io/auth/login';
const whitePaper =
  'https://docs.wixstatic.com/ugd/2eea42_b23b9045b42246c2ac4f7c6cbf5ee65c.pdf';

class Header extends React.Component<any, any> {
  state = {
    right: false,
  };

  constructor(props: any) {
    super(props);
    // this.state = { strings: this.props.lang };
  }

  click(url: string) {
    window.open(url, '_blank');
  }

  toggleDrawer = (side: string, open: boolean) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    return (
      <header className="gg-header">
        <div className="gg-header-container">
          <img src={gingrLogo} className="App-logo" alt="logo" />
          {this.props.children}
          <div className="gg-header-container__buttons">
            <Button click={() => this.click(whitePaper)} borderColor="white">
              {this.props.lang.whitepaper}
            </Button>
            <Button click={() => this.click(adminIco)} borderColor="#df9eff">
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
