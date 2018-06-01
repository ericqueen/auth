import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/index';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA-QSzdjUxIdVSu70PiZ9nfwlcisR9shug',
            authDomain: 'auth-ericq.firebaseapp.com',
            databaseURL: 'https://auth-ericq.firebaseio.com',
            projectId: 'auth-ericq',
            storageBucket: 'auth-ericq.appspot.com',
            messagingSenderId: '499313789984'
        });
    }

    render() {
        return (
            <View>
                <Header headerText={'Authentication'} />
                <LoginForm />
            </View>
        );
    }
}

export default App;