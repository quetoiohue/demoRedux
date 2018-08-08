import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src2/redux/store';
import Main1 from './src2/Main1';

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Main1 />
      </Provider>
    );
  }
}


//defaultState
