import React from 'react';
import Auth from './pages/Auth'
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'


const store = createStore(reducer);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Auth />
      </Provider>
    );
  }
}