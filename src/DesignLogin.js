import React, { useState,useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TextInput,
    ImageBackground,
    Button,
    Pressable,
    TouchableOpacity,
    ScrollView,
    
    
    
  } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Dropdown from "./Dropdown";
import { firebase } from '../config';
// import { firebase2 } from '../config2'
// import { useFonts } from 'expo-font';

export default function DesignLogin({navigation})
{

    const [email,setEmail] = useState('');
      const[password,setPassword]=useState('');

      const loginUser= async (email,password)=>{
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password)
            
        } catch(error){
            alert(error.message)
        }
      
    }

        return (    
        
            <View style={styles.container}>
                <View style={styles.headertop}>

                </View>
                
                
                {/* <View style={styles.headertop}>
                
                    <Text style={styles.headertxt}>
                        Home | About Us | Who's Who | Policy & Programs | 
                        Achievements | RTI | Sitemap | Contact Us | Help Line                                        
                    </Text>
                </View> */}
                <ScrollView>
                <Image style = {styles.logo} source = {require('../assets/logo.png')} />
                {/* <Image style = {styles.logo} source = {require('../../assets/logo.png')} /> */}
                {/* <View style={styles.headermiddle}>

                    <Text style={styles.headermiddletxt}>Designs Query</Text>
                    
                </View> */}
                {/* <View style={{backgroundColor:'#DBDBDB', height:3,marginTop:20}}></View> */}
                
                <View style={styles.input2}>
                    <Text style={{fontSize:28,textAlign:'center',marginTop:20}}>Login</Text>
                    <Text
                        style={{fontSize:18,marginTop:30,left:25}}
                    >Email:
                    </Text>
                    <TextInput
                    style={styles.input1}
                    placeholder=" Email"
                    autoCapitalize="none"
                    onChangeText={(email)=> setEmail(email)}
                    autoCorrect={false}   
                    multiline
                />
                <Text
                    style={{fontSize:18,marginTop:10,left:25,marginTop:30}}
                >Password:
                </Text>
                <TextInput
                    style={styles.input1}
                    placeholder=" Password"
                    onChangeText={(password)=> setPassword(password)}
                    secureTextEntry={true}
                    multiline
                />

                <TouchableOpacity style={styles.button}
                onPress={()=> loginUser(email,password)}
                >
                    <Text style={styles.buttontxt}>Login</Text>
                </TouchableOpacity>
                </View>
                
                
                
                {/* <View style={{backgroundColor:'#DBDBDB', height:3,marginTop:20}}></View> */}
                <Image style = {styles.logobottom} source = {require('../assets/logo_bottom.png')} />
                
                <View style={styles.footer}>
                    <Text style={styles.footertxt}>
                    Terms & conditions | Privacy Policy | Copyright | 
                    Hyperlinking Policy | Accessibility | Archive
                    </Text>
                </View>
                </ScrollView>
            </View>
           
        )
    }
    

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    footer:{
      backgroundColor:'#3A3B3C',
      height:90,
      width:"100%",
      justifyContent:'center',
      alignContent:'center',
      alignSelf:'center'
    },
    footertxt:{
      fontSize:15,
      color:'#ffffff',
      textAlign:'center',
    },
    logo:{
      height:140,
      width:155,
      marginTop:30,
      alignItems:'center',
      alignSelf:'center',
    },
    headertop:{
    backgroundColor:'#1b4d5b',
      height:110,
      width:"100%",
      justifyContent:'center',
      alignContent:'center',
      alignSelf:'center',
      borderBottomRightRadius:100
    },
    headertxt:{
        fontSize:14,
        top:7,
        padding:20,
    },
    headermiddle:{
        backgroundColor:'#1b4d5b',
        marginTop:25,
        height:50,
        width:'100%',
    },
    headermiddletxt:{
        fontSize:20,
        color:'#ffffff',
        textAlign:'center',
        padding:10,
    },
    input1:{
        marginTop:10,
        width:'85%',
        height:50,
        borderColor: '#1b4d5b',
        borderWidth: 1,
        alignSelf:'center',
        borderRadius:15,
        paddingLeft:5,
        paddingRight:5,
       },
       input2:{
        marginTop:70,
        width:'80%',
        height:450,
        borderColor: '#1b4d5b',
        borderWidth: 1,
        alignSelf:'center',
        borderRadius:15,
        textAlign:'left',
        paddingBottom:200,
        paddingLeft:5,
        paddingRight:5,
       },
       button:{
        backgroundColor:'#1b4d5b',
        height:45,
        width:110,
        alignSelf:'center',
        borderRadius:7,
        marginTop:30,
       },
       buttontxt:{
        fontSize:15,
        color:'#ffffff',
        textAlign:'center',
        padding:10,

       },
       logobottom:{
        // height:'10%'
        height:150,
        width:280,
        alignSelf:'center'
       },
       menu:{
        backgroundColor:'#1b4d5b',
        padding:10,
        marginTop:114,
        width:'25%',
        right:-300,
        height:"20%",
       }
   

  })