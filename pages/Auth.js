import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

export default class Auth extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>BEERS APP</Text>
                <LoginForm />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        marginBottom: 50,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#ef6c00',
        justifyContent: 'center',
    },
});