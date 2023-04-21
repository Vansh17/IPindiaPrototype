import { DrawerActions, DrawerRouter, NavigationContainer } from "@react-navigation/native";
import React, { useState,useEffect } from "react";
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
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
    // CustomButton,
  } from 'react-native';
  import { firebase } from '../config';


  export default function Main({navigation})
  {
    const onPressHandler_Gi=()=>{
      navigation.navigate('Language_Gi')
    }
    const onPressHandler_design=()=>{
      navigation.navigate('Language_Design')
    }

    return (
        <View
          style={styles.container}
        >
          
          <ImageBackground
            style={styles.img}
            source={require('../assets/background.png')}
            
          >
            <TouchableOpacity 
              onPress={()=>{firebase.auth().signOut()}}   
                                                          
              style={{ width:"100%",alignSelf:'center', height:"5%",borderRadius:15,top:45,}}>  
              <Text style={{alignSelf:"center",color:'#000000',marginTop:0,fontSize:20,marginLeft:240}}>  
                Sign Out
              </Text>
            </TouchableOpacity>
            <Image style = {styles.logo} source = {require('../assets/logo.png')} />
            
            <View style={styles.boxcont}>
              <View style={styles.inner_cont}>
                <View style={styles.logobox}>
                <Image style = {styles.logos} source = {require('../assets/designs_logo.png')} />
                </View>
                <Pressable style={styles.content}
                onPress={onPressHandler_design}
                >
                  <Text style={{fontSize:25,alignSelf:"center",top:35}}>Designs</Text>
                </Pressable>
              </View>

              <View style={styles.inner_cont}>
                <View style={styles.logobox2}>
                <Image style = {styles.logos} source = {require('../assets/GI_logo.png')} />

                </View>
                <Pressable style={styles.content2}
                onPress={onPressHandler_Gi}
                >
                <Text style={{fontSize:25,alignSelf:"center",top:22}}>Geographical Indication</Text>
                </Pressable>
              </View>
              
            </View>
            
            
        </ImageBackground>
            
       </View>
   
    )
  }

  const styles = StyleSheet.create({

    footer:{
      backgroundColor:'#D9D9D9',
      height:"80%",
      width:"100%",
      top:40,
      justifyContent:'center',
      alignContent:'center',
      alignSelf:'center'
    },
    footertxt:{
      fontSize:15,
      color:'#00000',
      textAlign:'center',
      bottom:300,
    },
    logo:{
      height:230,
      width:250,
      top:90,
      alignItems:'center',
      alignSelf:'center',
    },
    boxcont:{
      top:-200,
    },  
    title:{
        textAlign:"center",
        color:"#0B5635",
        fontSize:48,
        fontFamily:'OleoScriptRegular',
        marginTop:80,
        
    },
    signouts:{
      fontSize:22,
      fontWeight:'bold',
      fontFamily:'JosefinSansSemiBold',
    },
    logobox:{
      backgroundColor:'#346002',
      width:94,
      height:113,
      top:350,
      left:23,
      borderRadius:15,
    },
    logos:{
      justifyContent:"center",
      alignItems:"center",
      alignSelf:"center",
      // flex:1,
      top:15,
      width: 78,
    height: 76,
    },
    logobox2:{
      backgroundColor:'#8B4500',
      width:94,
      height:113,
      top:263,
      left:23,
      borderRadius:15,
    },
    content:{
      backgroundColor:'#ffffff',
      width:220,
      height:113,
      top:237,
      left:135,
      borderRadius:15
    },
    content2:{
      backgroundColor:'#ffffff',
      width:220,
      height:113,
      top:150,
      left:135,
      borderRadius:15
    },
    img:{
      height: '100%',
      width:'100%',
      // top:45,
    },
    container:{
      flex:1,
    },
    goodq:{
      marginLeft:160,
      color:"#0B5635",
        fontSize:20,
        fontFamily:'OleoScriptRegular',
        // fontWeight:"200",
    },
    button:{
      fontFamily:'OleoScriptRegular',
      
    },
    buttons:{
      marginTop:50,
        height:70,
        width:250,
        backgroundColor:'#9BCCA5',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        left:65,
    },
    stylebutton:{
      fontSize:36,
      fontFamily:'OleoScriptRegular',
      alignItems: 'center',
      justifyContent: 'center',
    },
    

    stylebutton1:{
      //flex:1,
      bottom:55,
      color:"#0B5635",
      marginRight:170,
      fontSize:36,
      fontFamily:'OleoScriptRegular',
      marginBottom:10,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    stylebutton2:{
      //flex:1,
      bottom:60,
      color:"#0B5635",
      fontSize:36,
      marginRight:130,
      fontFamily:'OleoScriptRegular',
      textAlign:'left',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    stylebutton3:{
      //flex:1,
      bottom:60,
      color:"#0B5635",
      marginRight:125,
      fontSize:36,
      fontFamily:'OleoScriptRegular',
      textAlign:'left',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    button1: {
      textAlign:'left',
      backgroundColor:"#9bcca5",
      fontSize:36,
      fontFamily:'OleoScriptRegular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:91,
      marginTop:170,
      marginLeft:30,
      marginRight:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius:20,
    },
    button2: {
      backgroundColor:"#9bcca5",
      fontSize:36,
      fontFamily:'OleoScriptRegular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:91,
      //flexDirection: "centr",
      marginTop:25,
      marginLeft:30,
      marginRight:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius:20,
    },
    button3: {
      backgroundColor:"#9bcca5",
      fontSize:36,
      fontFamily:'OleoScriptRegular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:91,
      //flexDirection: "centr",
      marginTop:25,
      marginLeft:30,
      marginRight:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius:20,
    },

    
    login:{
      // backgroundColor:"#ffffff",
      top:50,
    },
    loginbutton:{
      color:"#000000",
      fontFamily:'OleoScriptRegular',
      fontSize:22,
      height:45,
      width:100,
      left:310,
    },
    
  })
