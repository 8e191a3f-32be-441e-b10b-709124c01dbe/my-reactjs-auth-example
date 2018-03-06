import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Register from './Register';
import Login from './Login';

// ToDo: 
// 2. add message label
// 2. Cookie sessions
// 2. Integrate axios with backend


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;