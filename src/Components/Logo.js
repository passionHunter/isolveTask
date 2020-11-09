import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../Shared/Colors';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../Images/logo.jpg')}
            style={{ width: 150, height: 150, borderRadius: 10 }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.logoText}>E-Commerce</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: 50,
  },
  textContainer: {
    top: -10,
  },
  logoText: {
    marginVertical: 5,
    color: Colors.primaryColor,
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});