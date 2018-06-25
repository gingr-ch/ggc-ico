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

/*
import * as React from 'react';
import styled from 'styled-components';

// const logo = require('./logo.svg');
interface SectionProps {
  bg: string;
  small?: boolean;
}

class Section extends React.Component<SectionProps> {
  render() {

    const Wrapper = styled.section`
      height: ${this.props.small ? 'auto' : '100%'};
      min-height: ${!this.props.small ? '100vh' : '0px'};
      width: 100%;
    `;

    const Container = styled.div`
      background-color: ${this.props.bg};
      height: 100%;
      min-height: ${!this.props.small ? '100vh' : '0px'};
      display: flex;
      flex-direction: column;
    `;

    return (
      <Wrapper>
        <Container>
          {this.props.children}
        </Container>
      </Wrapper>
    );
  }
}

export default Section;
*/
