import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Skills />
        {/* <Portfolio /> */}
        <Contact />
      </div>
    );
  }
}

export default App;
