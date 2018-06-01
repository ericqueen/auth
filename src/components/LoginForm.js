import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput style={{ width: 100 }} />
                </CardSection>

                <CardSection />

                <CardSection>
                    <Button>
                        LOGIN
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;