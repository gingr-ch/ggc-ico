import * as React from 'react';
import './ButtonPlay.css';

interface ButtonPlayProps {
  videoToggle(): void;
}

class ButtonPlay extends React.Component<ButtonPlayProps> {

  render() {
    return(
      <button className="gg-button-play" onClick={this.props.videoToggle}>
        {this.props.children}
      </button>
    );
  }
}

export default ButtonPlay;
