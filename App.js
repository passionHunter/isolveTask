import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Routes from './src/Routes';
import Colors from './src/Shared/Colors';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.primaryColor} />
        <Routes />
      </View>
    )
  }
}