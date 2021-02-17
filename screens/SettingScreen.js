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
import MyHeader from '../Components/MyHeader' ;
import db from '../config' ;
import firebase from 'firebase';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class SettingScreen extends Component{

    constructor(){
        super();
        this.state={
            firstName:'',
            lastName:'',
            emailId:'',
            address:'',
            contact:'',
            docId:'',
        }
    }

    getUserDetails=()=>{
        var email=firebase.auth().currentUser.email;
        db.collections('users').where('email_id','==',email).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var data=doc.data()
                this.setState({
                    emailId:data.email_id,
                    firstName:data.first_name,
                    lastName:data.last_name,
                    address:data.address,
                    contact:data.contact,
                    docId:doc.id
                })
            })
        })
    }
    updateUserDetails=()=>{
        db.collection('users').doc(this.state.docId).update({
            "first_name":this.state.firstName,
            "last_name":this.state.lastName,
            "address":this.state.address,
            "contact":this.state.contact,
            
        })
        Alert.alert("profile updated successfully");
        console.log("profile updated successfully")
    }
componentDidMount()
{
    this.getUserDetails()
}
    render(){
        return(
           
            <SafeAreaView  style={styles.container}>
            <MyHeader  title="Settings" navigation={this.props.navigation} />  
            <View  style ={styles.formContainer} >
            <TextInput
             style={styles.formTextInput}
          placeholder ={"First Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
          value={this.state.firstName}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Last Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
          value={this.state.lastName}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Contact"}
          maxLength ={10}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
          value={this.state.contact}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Address"}
          multiline = {true}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
          value={this.state.address}
        />
        <TouchableOpacity style={styles.button}  onPress={()=>
        {
            this.updateUserDetails()
        }} >
            <Text style= {styles.buttonText}>  save</Text>
        </TouchableOpacity>
            </View>
            
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#F8BE85',
     alignItems: 'center',
     justifyContent: 'center'
   },
     formTextInput:{
     width:"75%",
     height:35,
     alignSelf:'center',
     borderColor:'#ffab91',
     borderRadius:10,
     borderWidth:1,
     marginTop:20,
     padding:10
   },
      button:{
     width:300,
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"#ff9800",
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16,
     padding: 10
   },
   buttonText:{
     color:'#ffff',
     fontWeight:'200',
     fontSize:20
   }
  })