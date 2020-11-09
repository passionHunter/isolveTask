import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';
import Logo from '../Components/Logo';
import Colors from '../Shared/Colors'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            displayName: '',
            phoneNumber: '',
            confirm: '',
        };
    }
    componentDidMount() {
        const user = firebase.auth().currentUser
        this.setState({ user, displayName: user.displayName, email: user.email, phoneNumber: user.phoneNumber, password: user.password })
        console.log("Component did mount", user.email)
    }

    //Delete the profile
    deleteProfile() {
        console.log("234567890", this.state.user)
        firebase.auth().currentUser.delete().then(function () {
            Alert.alert("User Account deleted successfully")
            Actions.login()
        }).catch(function (error) {
            console.error({ error })
        })
    }

    //update the profile
    updateProfile() {
        firebase.auth().currentUser.updateProfile({
            displayName: this.state.displayName,
        }).catch(function (error) {
            console.error({ error })
        })
        // firebase.auth().currentUser.updatePhoneNumber({
        //     phoneNumber: this.state.phoneNumber
        // })
        Alert.alert("Successfully Profile updated")
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.headerContainer}>
                    <Image
                        source={require('../Images/logo.jpg')}
                        style={{ width: 80, height: 80, borderRadius: 10 }}
                        resizeMode="cover"
                    />
                    <Text style={styles.headerText}>Profile Screen</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputBox}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        onChangeText={text => this.setState({ displayName: text })}
                        value={this.state.displayName}
                        placeholder="Username"
                        placeholderTextColor={Colors.blackColor}
                        selectionColor="#fff"
                        onSubmitEditing={() => this.email.focus()}
                    />
                    <TextInput
                        style={styles.inputBox}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        onChangeText={text => this.setState({ email: text })}
                        value={this.state.email}
                        keyboardType={'email-address'}
                        placeholder="Email ID"
                        placeholderTextColor={Colors.blackColor}
                        ref={input => (this.email = input)}
                        onSubmitEditing={() => this.phone.focus()}
                    />
                    <TextInput
                        style={styles.inputBox}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        onChangeText={text => this.setState({ phoneNumber: text })}
                        value={this.state.phoneNumber}
                        keyboardType={'number-pad'}
                        maxLength={10}
                        placeholder="Phone Number"
                        placeholderTextColor={Colors.blackColor}
                        ref={input => (this.phone = input)}
                    />
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} onPress={() => this.deleteProfile()} >
                        <Text style={styles.buttonText}>DELETE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.updateProfile()} >
                        <Text style={styles.buttonText}>UPDATE</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.primaryColor
    },
    headerContainer: {
        flex: .225,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        marginVertical: 5,
        left: 10,
        color: Colors.backgroundColor,
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    inputContainer: {
        flex: .55,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.backgroundColor,
        borderTopStartRadius: 100,
        borderBottomRightRadius: 100,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    inputBox: {
        width: 300,
        backgroundColor: Colors.whiteColor,
        borderRadius: 6,
        paddingHorizontal: 16,
        fontSize: 16,
        color: Colors.blackColor,
        marginVertical: 10,
        elevation: 3,
    },
    buttonView: {
        flex: .225,
        flexDirection: 'row',
        // backgroundColor: 'yellow',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    button: {
        width: 150,
        borderColor: Colors.backgroundColor,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 13,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.backgroundColor,
        textAlign: 'center',
    },
})