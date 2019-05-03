import React, { Component } from 'react';
import Header from './components/Header';
import Info from './components/Info';
import Sponsors from './components/Sponsors';
import Community from './components/Community';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Info />
        <Sponsors />
        <Community />
        <Footer />
      </div>
    );
  }
}

export default App;
