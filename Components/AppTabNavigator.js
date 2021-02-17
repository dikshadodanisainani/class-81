 import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
    Image} from 'react-native';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import db from '../config';
import firebase from 'firebase';
import BookDonateScreen from '../screens/BookDonateScreen';
import BookRequestScreen from '../screens/BookRequestScreen';

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks:
    {
        screen:BookDonateScreen,
        navigationOptions:{
            tabBarIcon:
            <Image
            source = {require ("../assets/request-list.png")}
            style={{width:20,height:20}}
            />,

            tabBarLabel:"Donate Books"

        }
    },

    RequestBooks:
    {
        screen:BookRequestScreen,
        navigationOptions:{
            tabBarIcon:
            <Image
            source = {require ("../assets/request-book.png")}
            style={{width:20,height:20}}
            />,

            tabBarLabel:"Request Books"
            
        }
    }
})
