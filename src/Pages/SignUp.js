import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Form from '../Components/Form';
import Logo from '../Components/Logo';

export default class SignUp extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <Logo />
                <Form type="Register" />
                <View style={styles.poweredContainer}>
                    <Text style={styles.company}>Powered By </Text>
                    <Image
                        source={require('../Images/isolve.png')}
                        style={{
                            width: 70,
                            height: 70,
                        }}
                        resizeMode="contain"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    poweredContainer: {
        justifyContent: 'flex-start',
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 30,
    },
    company: {
        letterSpacing: 2,
        color: '#a9a491',
        fontWeight: 'bold',
        fontSize: 17,
    },
})