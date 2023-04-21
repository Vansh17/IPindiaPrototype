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

export default function DesignStatus_Hindi({navigation})
{
    
  
    
  const onPressHandlerBack=()=>{
    navigation.navigate('DesignSearch_Hindi')
    
  }

        return (    
        
            <View style={styles.container}>
                
                <View style={styles.headertop}>
                
                    <Text style={styles.headertxt}>
                                                             
                    </Text>
                    
                </View>
                <ScrollView>
                
                <Image style = {styles.logo} source = {require('../../../assets/logo.png')} />
                <View style={styles.headermiddle}>

                    <Text style={styles.headermiddletxt}>आवेदन</Text>
                    
                </View>
                <View style={{backgroundColor:'#DBDBDB', height:3,marginTop:20}}></View>

                {/* <Text
                    style={{fontSize:18, textAlign:'center',marginTop:10}}
                >Application Number:
                </Text> */}
                <ScrollView>
                    <View style={[styles.card, styles.shadowProp]}>
                        <View style={styles.head}>
                                <Text style={styles.texts}>
                                
                                    डिजाइन आवेदन विवरण
                                </Text>
                        </View>
                        <View>
                            <Text style={styles.text1}>
                            आवेदन क्रमांक
                            </Text>
                            <Text style={styles.text2}>
                                366737-008
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.text1}>
                                CBR क्रमांक
                            </Text>
                            <Text style={styles.text2}>
                            200073
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.text1}>
                                CBR तारीख
                            </Text>
                            <Text style={styles.text2}>
                                24/06/2022 17:23:00
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.text1}>
                            
                                    आवेदक का नाम
                            </Text>
                            <Text style={styles.text2}>
                            मारुति सुजुकी इंडिया लि.
                            </Text>
                        </View>
                        <View style={styles.head}>
                                <Text style={styles.texts}>
                                
                                    डिजाइन आवेदन की स्थिति
                                </Text>
                        </View>
                        <View>
                            <Text style={styles.text1}>
                            आवेदन की स्थिति
                            </Text>
                            <Text style={styles.text3}>
                            डिजाइन स्वीकृत और प्रकाशित, जर्नल संख्या 42/2022 है और जर्नल तिथि 21/10/2022 है
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.button}
                        onPress={onPressHandlerBack}
                        >
                            <Text style={styles.buttontxt}>
                                    पीछे जाए</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                </ScrollView>
                <View style={{backgroundColor:'#DBDBDB', height:3,marginTop:20}}></View>
                <View style={{top:-880,left:100}}>
                        {/* <Dropdown_Status_Design/> */}
                </View>
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
    texts:{
        color:"#ffffff",
        alignSelf:"center",
        marginTop:11,
    },
    text1:{
        color:"#000000",
        marginTop:15,
        fontSize:15,
        marginLeft:40,
    },
    text2:{
        color:"#000000",
        marginTop:-20,
        fontSize:15,
        marginLeft:185,
        width:"35%",
        fontWeight:'bold',
        textAlign:"justify", 
    },
    text3:{
        color:"#000000",
        marginTop:-20,
        fontSize:15,
        marginLeft:185,
        width:"35%",
        fontWeight:'bold',
        textAlign:"justify", 
    },
    head:{
        backgroundColor:'#346002',
        height:45,
        width:"80%",
        alignSelf:'center',
        borderRadius:15,
        marginTop:30,
    },
    footertxt:{
      fontSize:15,
      color:'#ffffff',
      textAlign:'center',
    },
    card: {  
        backgroundColor: '#ffffff',  
        borderRadius: 8,  
        width: '80%',  
        marginVertical: 10, 
        // width:290,
        height:680, 
        marginTop:-10,
      }, 
      shadowProp: {  
        // shadowOffset: {width: -5, height: 4},  
        // shadowColor: '#000000',  
        shadowOpacity: 0.2,  
         shadowRadius: 3,  
        shadowColor: '#000000',  
        elevation: 30, 
        width:"90%", 
        alignSelf:"center",
        marginTop:25,
      }, 
    logo:{
      height:140,
      width:155,
      marginTop:30,
      alignItems:'center',
      alignSelf:'center',
    },
    headertop:{
    backgroundColor:'#346002',
      height:110,
      width:"100%",
      justifyContent:'center',
      alignContent:'center',
      alignSelf:'center',
    },
    headertxt:{
        fontSize:14,
        top:7,
        padding:20,
    },
    headermiddle:{
        backgroundColor:'#346002',
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
        marginTop:20,
        width:'85%',
        height:50,
        borderColor: '#346002',
        borderWidth: 1,
        alignSelf:'center',
        borderRadius:15,
        paddingLeft:5,
        paddingRight:5,
       },
       input2:{
        marginTop:20,
        width:'85%',
        height:250,
        borderColor: '#346002',
        borderWidth: 1,
        alignSelf:'center',
        borderRadius:15,
        textAlign:'left',
        paddingBottom:200,
        paddingLeft:5,
        paddingRight:5,
       },
       button:{
        backgroundColor:'#346002',
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
        backgroundColor:'#346002',
        padding:10,
        marginTop:114,
        width:'25%',
        right:-300,
        height:"20%",
       }
   

  })