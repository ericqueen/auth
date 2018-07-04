import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, CardSection, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA-QSzdjUxIdVSu70PiZ9nfwlcisR9shug',
            authDomain: 'auth-ericq.firebaseapp.com',
            databaseURL: 'https://auth-ericq.firebaseio.com',
            projectId: 'auth-ericq',
            storageBucket: 'auth-ericq.appspot.com',
            messagingSenderId: '499313789984'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection><Button onPress={() => firebase.auth().signOut()}>
                        LOG OUT
                    </Button></CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return <CardSection><Spinner /></CardSection>;
        }
    }

    render() {
        return (
            <View>
                <Header headerText={'Auth'} />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;