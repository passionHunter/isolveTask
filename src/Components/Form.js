import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Colors from '../Shared/Colors';
import firebase from 'react-native-firebase';
import Icon from '../Components/IconSet'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            displayName: '',
            email: '',
            phoneNumber: '',
            confirm: '',
            errorMsg: ''
        };
    }
    //Login 
    loginAuth = () => {
        if (this.state.email.trim() == '' || this.state.password.trim() == '') {
            Alert.alert("Please enter the missing field")
        }
        else {
            console.log("Email ID and password from Login", "Email ID", this.state.email, "password :", this.state.password)
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => {
                    console.log("Login response", res.user)
                    Alert.alert("Login successful")
                    Actions.profile()
                })
                .catch(error => {
                    console.error(error)
                    Alert.alert(error.message);
                })
        }
    }

    //Sign Up 
    signUpAuth = () => {
        if (this.state.email.trim() == '' || this.state.displayName.trim() == '' || this.state.phoneNumber.trim() == '' || this.state.password.trim() == '') {
            Alert.alert("Please Enter All the field");
        }
        else {
            console.log("User Credentials")
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => {
                    res.user.updateProfile({
                        displayName: this.state.displayName,
                    })
                    console.log("Response", res)
                    Alert.alert("Successfully Registered")
                    Actions.profile()
                }
                )
                .catch(error => this.setState({ errorMsg: error.message }))
        }
    }


    render() {
        if (this.props.type == 'Login') {
            return (
                <View style={styles.container}>
                    <View style={styles.inputView}>
                        <Icon.MaterialCommunityIcons name="email" size={25} style={styles.iconStyle} />
                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            onChangeText={text => this.setState({ email: text })}
                            value={this.state.email}
                            keyboardType={'email-address'}
                            placeholder="Email ID"
                            placeholderTextColor={Colors.blackColor}
                            onSubmitEditing={() => this.password.focus()}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Icon.FontAwesome name="lock" size={25} style={styles.iconStyle} />
                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            onChangeText={text => this.setState({ password: text })}
                            value={this.state.password}
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor={Colors.blackColor}
                            ref={input => (this.password = input)}
                        />
                    </View>
                    <TouchableOpacity style={{ paddingVertical: 8 }} onPress={() => Actions.signup()}>
                        <Text style={styles.account}>Don't Have Account ? SIGN UP here</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { marginTop: 20 }]} onPress={this.loginAuth} >
                        <Text style={styles.buttonText}>{this.props.type}</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (this.props.type == 'Register') {
            return (
                <View style={styles.container}>
                    <View style={styles.inputView}>
                        <Icon.FontAwesome name="user-circle-o" size={25} style={styles.iconStyle} />
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
                    </View>
                    <View style={styles.inputView}>
                        <Icon.MaterialCommunityIcons name="email" size={25} style={styles.iconStyle} />
                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            onChangeText={text => this.setState({ email: text })}
                            value={this.state.email}
                            keyboardType={'email-address'}
                            placeholder="Email ID"
                            placeholderTextColor={Colors.blackColor}
                            ref={input => (this.email = input)}
                            onSubmitEditing={() => this.phoneNumber.focus()}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Icon.FontAwesome name="phone" size={25} style={styles.iconStyle} />
                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            onChangeText={text => this.setState({ phoneNumber: text })}
                            value={this.state.phoneNumber}
                            keyboardType={'number-pad'}
                            maxLength={10}
                            placeholder="Phone Number"
                            placeholderTextColor={Colors.blackColor}
                            ref={input => (this.phoneNumber = input)}
                            onSubmitEditing={() => this.password.focus()}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Icon.FontAwesome name="lock" size={25} style={styles.iconStyle} />
                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            onChangeText={text => this.setState({ password: text })}
                            value={this.state.password}
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor={Colors.blackColor}
                            ref={input => (this.password = input)}
                            onSubmitEditing={() => this.confirm.focus()}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Icon.MaterialCommunityIcons name="lock-check" size={25} style={styles.iconStyle} />
                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            onChangeText={text => this.setState({ confirm: text })}
                            value={this.state.confirm}
                            placeholder="Confirm Password"
                            secureTextEntry={true}
                            placeholderTextColor={Colors.blackColor}
                            ref={input => (this.confirm = input)}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.button} onPress={this.signUpAuth}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingVertical: 8 }} onPress={() => Actions.login()}>
                        <Text style={styles.account}>ALREADY HAVE ACCOUNT ?</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        elevation: 3,
        marginVertical: 10,
    },
    iconStyle: {
        color: Colors.primaryColor,
        paddingLeft: 16,
        paddingRight: 5,
    },
    inputBox: {
        width: 300,
        backgroundColor: Colors.whiteColor,
        fontSize: 16,
        color: Colors.blackColor,
    },
    account: {
        top: 5,
        fontSize: 14,
        fontWeight: '800',
        color: Colors.primaryColor,
    },
    button: {
        width: 300,
        backgroundColor: Colors.primaryColor,
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 13,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: Colors.backgroundColor,
        textAlign: 'center',
    },
});