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
    ScrollView} from 'react-native';
import MyHeader from '../Components/MyHeader';
import db from '../config';
import firebase from 'firebase';

    export default class BookRequestScreen extends React.Component{

        constructor(){
           super() ;

           this.state={
               userId: firebase.auth().currentUser.email,
               bookName:'',
               reasonToRequest:'',

           }
        }
        render(){
            return(
              <View  style={{flex:1}}>
                  <MyHeader 
                  title="Request Book"
                  />
            <KeyboardAvoidingView  style={styles.keyBoardStyle}>
             <TextInput
                style  ={styles.formTextInput} 
                placeholder=" Enter Book Name"
                onChangeText={(text)=>{
                    this.setState({
                    bookName:text
            })
            }}
            value={this.state.bookName} />

            <TextInput
                style  ={styles.formTextInput} 
                placeholder=" Reason To Request The Book"
                onChangeText={(text)=>{
                    this.setState({
                    bookName:text
            })
            }}
            value={this.state.bookName} />
            </KeyboardAvoidingView>

              </View>
            )
            
        }
    }