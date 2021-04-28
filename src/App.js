import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home'
class App extends Component {

  render() {
    return (
      <BrowserRouter>
            <Switch>
              <Route exact path="/" name="Login Page" render={(props) => <Home {...props}/>} />
            </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
