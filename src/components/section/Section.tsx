import * as React from 'react';
import './Section.css';

// const logo = require('./logo.svg');
interface SectionProps {
  bg: string;
}

class Section extends React.Component<SectionProps> {
  render() {
    return (
      <div className="gg-section">
        <div style={{ backgroundColor: this.props.bg, height: '100%' }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Section;
