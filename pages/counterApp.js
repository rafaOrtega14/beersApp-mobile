import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'
import counterActions from '../actions/contActions'
import contMapper from '../mappers/contMapper'
class counterApp extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Esta es una aplicación para contar</Text>
                <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
                <Button
                    title='Incrementar'
                    onPress={() => this.props.increaseCounter()}
                />
                <Button
                    title='Decrementar'
                    onPress={() => this.props.decreaseCounter()}
                />
            </View >

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default connect(contMapper, counterActions)(counterApp)
