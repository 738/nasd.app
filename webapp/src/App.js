import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NasDappMainComponent from './component/NasDappMainComponent';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <NasDappMainComponent />
      </MuiThemeProvider>
    );
  }
}

export default App;
