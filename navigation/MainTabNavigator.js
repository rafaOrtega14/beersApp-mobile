import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    }
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Equipo',
    tabBarOptions: {
        activeTintColor: '#D76D34',
        inactiveTintColor: '#000',
    },
    tabBarIcon: ({ tintColor }) => <Icon
        type='font-awesome'
        name='users'
        color={tintColor} />
}

HomeStack.path = '';

const LinksStack = createStackNavigator(
    {
        Links: LinksScreen,
    }

);

LinksStack.navigationOptions = {
    tabBarLabel: 'Calendario',
    tabBarOptions: {
        activeTintColor: '#D76D34',
        inactiveTintColor: '#000',
    },
    tabBarIcon: ({ tintColor }) => <Icon
        type='font-awesome'
        name='calendar'
        color={tintColor} />
}, {
        headerMode: 'none',  // should work here
    };

LinksStack.path = '';



const tabNavigator = createBottomTabNavigator({
    HomeStack,
    LinksStack
});

tabNavigator.path = '';

export default tabNavigator;
