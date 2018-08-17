import * as React from 'react';
import './Button.css';

interface ButtonProps {
  borderColor?: string;
  shape?: string;
  className?: string;
  click(): any;
}

class Button extends React.Component<ButtonProps> {
  render() {
    let shape = '';
    if (this.props.shape === 'round') {
      shape += 'gg-button--round';
    } else if (this.props.shape === 'rounded-edges') {
      shape += 'gg-button--rounded-edges';
    }

    return (
      <button
        className={'gg-button ' + shape + ' ' + this.props.className}
        style={{
          borderColor: this.props.borderColor
            ? this.props.borderColor
            : 'transparent',
        }}
        onClick={this.props.click}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
