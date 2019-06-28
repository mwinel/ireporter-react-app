import React, { Component } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/App.css';
import store from '../redux/store';
import Home from '../components/Home';
import SignUp from '../components/SignUp';
import Login from '../components/Login';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
