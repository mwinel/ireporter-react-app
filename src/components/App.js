import React, { Component } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/App.css';
import store from '../redux/store';
import Home from '../components/Home';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Route exact path="/" component={Home} />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
