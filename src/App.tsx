import * as React from 'react';
import './App.css';
import Section from './components/section/Section';
import Top from './containers/Top';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Section bg="#eaeaea">
          This is a section
          <Top />
        </Section>
        <Section bg="yellow">
          This is another section
        </Section>
      </div>
    );
  }
}

export default App;
