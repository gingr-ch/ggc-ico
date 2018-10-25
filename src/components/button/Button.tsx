import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import './Button.css';

interface ButtonProps {
  borderColor?: string;
  btnStyle?: string;
  shape?: string;
  className?: string;
  btnType?: string;
  click?(): any;
}

const Btn = styled.button`
  background-color: transparent;
  border-width: 2px;
  border-style: solid;
  font-size: 15px;
  color: white;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  padding: 3px;
`;

class Button extends React.Component<ButtonProps> {
  render() {
    let classes = classNames({
      'gg-button--round': this.props.shape === 'round',
      'gg-button--rounded-edges': this.props.shape === 'rounded-edges',
      'gg-button--secondary': this.props.btnStyle === 'secondary',
      'gg-button--secondary gg-button--fat':
        this.props.btnStyle === 'secondary-fat',
    });

    return (
      <Btn
        className={(this.props.className ? this.props.className : '') + classes}
        style={{
          borderColor: this.props.borderColor
            ? this.props.borderColor
            : 'transparent',
        }}
        type={this.props.btnType}
        onClick={this.props.click}
      >
        {this.props.children}
      </Btn>
    );
  }
}

export default Button;
