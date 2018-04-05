import * as React from 'react';
import './Section.css';

// const logo = require('./logo.svg');
interface SectionProps {
  bg: string;
  small?: boolean;
}

class Section extends React.Component<SectionProps> {
  render() {
    return (
      <div
        className="gg-section"
        style={{
          height: this.props.small ? 'auto' : '100%',
          minHeight: !this.props.small ? '100vh' : '0px'
        }}
      >
        <div
          style={{
            backgroundColor: this.props.bg,
            height: '100%',
            minHeight: !this.props.small ? '100vh' : '0px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Section;
