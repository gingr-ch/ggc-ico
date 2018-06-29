import * as React from 'react';
import Dialog from 'rc-dialog';

import 'rc-dialog/assets/index.css';
import './TeamCEO.css';

const image = require('../../assets/img/teamCEO.jpg');

class TeamCEO extends React.Component {
  state = {
    visible: false,
    width: 600,
    destroyOnClose: true,
    center: true,
    mousePosition: { x: 0, y: 0 },
  };

  onClick = (e: any) => {
    this.setState({
      mousePosition: {
        x: e.pageX,
        y: e.pageY,
      },
      visible: true,
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
        <p>basic modal</p>
        <div style={{ height: 200 }} />
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
          <img src={image} alt="" onClick={this.onClick} />
        </div>
        {dialog}
      </div>
    );
  }
}

export default TeamCEO;
