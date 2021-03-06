import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar/Navbar';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Alegreya');

html {
    font-size: 62.5%;
}

body {
    box-sizing: border-box;
    font-family: 'Alegreya', serif;
}

* {
    margin: 0;
    padding: 0;
}

`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Navbar />
      </React.Fragment>
    );
  }
}

export default App;
