import * as React from 'react';
import './App.css';
import Section from './components/section/Section';
import Top from './containers/top/Top';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Nav/>
        </Header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Section bg="#eaeaea">
          This is a section
          <Top/>
        </Section>
        <Section bg="yellow">
          This is another section
        </Section>
      </div>
    );
  }
}

export default App;
