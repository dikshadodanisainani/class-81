import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from './Components/AppTabNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AppDrawerNavigator} from './Components/AppDrawerNavigator';

export default class App  extends Component
{
 render() {
  return (
    <AppContainer/>
  );
}
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen:AppDrawerNavigator},

})

const AppContainer = createAppContainer(switchNavigator)