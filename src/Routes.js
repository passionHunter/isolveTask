import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Login from './Pages/Login'
import Profile from './Pages/Profile';
import SignUp from './Pages/SignUp';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} hideNavBar={true} />
                    <Scene key="signup" component={SignUp} hideNavBar={true} />
                    <Scene key="profile" component={Profile} hideNavBar={true} />
                </Stack>
            </Router>
        )
    }
}