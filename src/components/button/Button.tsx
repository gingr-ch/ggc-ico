import * as React from 'react';
import './Button.css';

interface ButtonProps {
  borderColor?: string;
  shape?: string;
  click?: string;
}

class Button extends React.Component<ButtonProps> {

  render() {
    let shape = '';
    if (this.props.shape === 'round') {
      shape += 'gg-button--round';
    }

    return (
      <button
        className={'gg-button ' + (shape)}
        style={{ borderColor: this.props.borderColor ? this.props.borderColor : 'transparent' }}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
