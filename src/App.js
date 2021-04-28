import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';




// Pages
import Login from './views/pages/login/Login';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
            <Switch>
              <Route exact path="/" name="Login Page" render={props => <Login {...props}/>} />
            </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
