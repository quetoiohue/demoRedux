import React, { Component } from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import Main from './components/Main';

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Main />
      </Provider>
    );
  }
}


//defaultState
