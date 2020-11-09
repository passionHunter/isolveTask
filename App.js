import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Routes from './src/Routes';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <Routes />
      </View>
    )
  }
}