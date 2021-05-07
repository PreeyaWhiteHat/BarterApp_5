import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  } from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase'

export default class SettingsScreen extends Component{
    constructor(){
        super();
        this.state = {
            emailId   : '',
            firstName : '',
            lastName  : '',
            address   : '',
            contact   : '',
            docId     : ''
        }
    }
    getUserDetails = ()=>{
        var user = firebase.auth().currentUser
        var email = user.email
        alert(email)
        db.collection('users').where('email_id','==',email).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
      var data = doc.data()
        this.setState({
          emailId   : data.email_id,
          firstName : data.first_name,
          lastName  : data.last_name,
          address   : data.address,
          contact   : data.contact,
          docId     : doc.id
        })
      });
    })
  }
updateUserDetails=()=>{
    db.collection('users')
    .doc(this.state.docId)
    .update({
        "first_name" : this.state.firstName,
        "last_name" : this.state.lastName,
        "address" : this.state.address,
        "contact" : this.state.contact,
        "email_id" : this.state.emailId
    })
}
 componentDidMount(){
    this.getUserDetails()
  }    
    render(){
        return(
          <View style={{ flex: 1 }}>
          <View style={{ flex: 0.12 }}>
            <MyHeader title="Settings" navigation={this.props.navigation} />
          </View>
  
  
          <View style={styles.formContainer}>
              <View
                style={{
                  flex: 0.66,
                  padding: 10,
                }}
              >
              <Text style={styles.label}>First Name </Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder={"First Name"}
                  maxLength={12}
                  onChangeText={(text) => {
                    this.setState({
                      firstName: text,
                    });
                  }}
                  value={this.state.firstName}
                />
  
              <Text style={styles.label}>Last Name </Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder={"Last Name"}
                  maxLength={12}
                  onChangeText={(text) => {
                    this.setState({
                      lastName: text,
                    });
                  }}
                  value={this.state.lastName}
                />
  
                  <Text style={styles.label}>Contact </Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder={"Contact"}
                  maxLength={10}
                  keyboardType={"numeric"}
                  onChangeText={(text) => {
                    this.setState({
                      contact: text,
                    });
                  }}
                  value={this.state.contact}
                />
  
                  <Text style={styles.label}>Address </Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder={"Address"}
                  multiline={true}
                  onChangeText={(text) => {
                    this.setState({
                      address: text,
                    });
                  }}
                  value={this.state.address}
                />
              </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      this.updateUserDetails();
                    }}
                  >
                    <Text style={styles.buttonText}>Save</Text>
                  </TouchableOpacity>
              </View>
            </View>
        </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#6fc0b8"
  },
  formContainer:{
    flex: 0.88,
    justifyContent:'center'
  },
  label:{
    fontSize:18,
    color:"#717D7E",
    fontWeight:'bold',
    padding:10,
    marginLeft:20
  },
  formTextInput: {
    width: "90%",
    height: 50,
    padding: 10,
    borderWidth:1,
    borderRadius:2,
    borderColor:"grey",
    marginBottom:20,
    marginLeft:20
  },
  button: {
    width: "75%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 20,
  },
  buttonView:{
    flex: 0.22,
    alignItems: "center",
    marginTop:100
},
  buttonText: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#fff",
  },
});