import * as React from 'react';
import './ButtonPlay.css';

class ButtonPlay extends React.Component {
  render() {
    return(
      <button className="gg-button-play">
        {this.props.children}
      </button>
    );
  }
}

export default ButtonPlay;
