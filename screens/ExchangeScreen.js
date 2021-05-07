import { StyleSheet, Text, TextInput, View ,TouchableOpacity,Modal,KeyboardAvoidingView,ScrollView, Alert} from 'react-native';
import React, { Component } from 'react';
import db from '../config';
import firebase from 'firebase';
import HomeScreen from '../screens/HomeScreen';

export default class ExchangeScreen extends Component {
    constructor(){
        super();
        this.state = {
            item_name : '',
            item_descrition : '',
            userName: ''

        }
    }
    addItem = (item_name , item_descrition)=>{
        var userName= this.state.userName
        db.collection("exchange_requests").add ({
            "username" : userName,
            "item_name" : item_name,
            "item_descrition" : item_descrition
        })
        this.setState({
            item_name: '',
            item_descrition : ''
        })
        return Alert.alert(
            'Item ready to exchange',
            '',
            [
                {text: 'OK',onPress: ()=> {
                    this.props.navigation.navigate('HomeScreen')
                }}
            ]
        );
    }

    render(){
        return(                            
                <View>
                    <TextInput
                        style ={styles.formTextInput}
                        placeholder={"Item Name"}
                        onChangeText={(text)=>{
                            this.setState({
                                item_name:text
                            })
                        }}
                    />
                    <TextInput
                        style ={styles.formTextInput}
                        placeholder={"Item Description"}
                        onChangeText={(text)=>{
                            this.setState({
                                item_descrition:text
                            })
                        }}
                    />
                    <TouchableOpacity style ={styles.button} onPress = {()=>{this.addItem(this.state.item_name, this.state.item_descrition)}} >
                        <Text style ={styles.text}>Add Item</Text>
                    </TouchableOpacity>
                </View>

            );
        }
    }
const styles = StyleSheet.create({
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
    },
    button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        marginLeft : 150,
        marginTop : 10,
        shadowOffset: {
            width: 0,
            height: 8,
        }
    },
    text:{
        color:'#53FFBD',
        fontSize :18,
        fontWeight : 'bold'
    }
})
