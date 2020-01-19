import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Button, Input } from 'react-native-elements'


export default class RegisterForm extends React.Component {

    render() {
        return (
            <Card title="Uneté a la comunidad de cerveceros"
                titleStyle={styles.cardTitle}
                containerStyle={styles.cardContainer}
            >
                <Input
                    containerStyle={styles.textInput}
                    placeholder='Usuario'
                    leftIcon={
                        <Icon
                            style={styles.icon}
                            name='user'
                            size={20}
                            color='black'
                        />
                    }
                />
                <Input
                    containerStyle={styles.textInput}
                    placeholder='E-mail'
                    leftIcon={
                        <Icon
                            style={styles.icon}
                            name='envelope'
                            size={20}
                            color='black'
                        />
                    }
                />
                <Input
                    containerStyle={styles.textInput}
                    placeholder='Contraseña'
                    leftIcon={
                        <Icon
                            style={styles.icon}
                            name='lock'
                            size={20}
                            color='black'
                        />
                    }
                />
                <Button
                    title="Registrate"
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonText}
                />
                <Text style={styles.register}>¿Ya tienes cuenta?
                <Text style={styles.link}>Inicia Sesión</Text>
                </Text>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    link: {
        color: '#ef6c00'
    },
    register: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 15,
        textAlign: 'center'
    },
    cardContainer: {
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
    },
    cardTitle: {
        fontSize: 30,
    },
    textInput: {
        marginTop: 15,
    },
    icon: {
        marginRight: 10,
    },
    button: {
        backgroundColor: '#ef6c00',
        marginTop: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#ef6c00',
        justifyContent: 'center',
    },
});