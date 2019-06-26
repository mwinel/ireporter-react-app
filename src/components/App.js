import React, { Component } from "react";
import { Provider } from 'react-redux';
import '../styles/App.css';
import store from '../redux/store';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <h1>Welcome to iReporter!</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
