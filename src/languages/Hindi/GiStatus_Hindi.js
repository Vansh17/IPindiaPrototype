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
// import Dropdown from "./Dropdown";
// import Dropdown_Status_Design from "./Dropdown_Status_Gi";
// import { firebase } from '../../config';
// import { useFonts } from 'expo-font';
export default function GiStatus_Hindi({navigation})
{
    const onPressHandlerBack=()=>{
        navigation.navigate('GiSearch_Hindi')
        
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
                    <Text style={styles.headermiddletxt}>अर्ज</Text>
                </View>
                <View style={{backgroundColor:'#DBDBDB', height:3,marginTop:20}}></View>

                {/* <Text
                    style={{fontSize:18, textAlign:'center',marginTop:10}}
                >Application Number:
                </Text> */}
                <ScrollView>
                    <View style={[styles.card, styles.shadowProp]}>
                        <View style={styles.head}>
                                <Text style={styles.statustxt}>
                                    GI आवेदन विवरण
                                </Text>
                        </View>
                        <View>
                            <Text style={styles.text1}>
                            
                                आवेदन क्रमांक
                            </Text>
                            <Text style={styles.text2}>
                                1
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.text1}>
                                Geographical Indications:
                            </Text>
                            <Text style={styles.text2}>
                            
                                दार्जिलिंग चाय(Word)
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.text1}>
                            आवेदक का नाम
                            </Text>
                            <Text style={styles.text2}>
                            
                                चाय विभाग
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.text1}>
                            आवेदक का पता
                            </Text>
                            <Text style={styles.text2}>
                            
                                टी बोर्ड 14, बी.टी.एम. सारणी (ब्रेबॉर्न रोड), पी.ओ.बॉक्स नंबर 2172, कोलकाता-700001, भारत
                            </Text>
                        </View>
                        <View >
                                <Text style={styles.text1}>
                                दाखिल करने की तिथि
                                </Text>
                                <Text style={styles.text2}>
                                27/10/2003
                                </Text>
                        </View>
                        <View >
                                <Text style={styles.text1}>
                                
                                    दरजा
                                </Text>
                                <Text style={styles.text2}>
                                30
                                </Text>
                        </View>
                        <View >
                                <Text style={styles.text1}>
                                वस्तू
                                </Text>
                                <Text style={styles.text2}>
                                
                                    कृषि
                                </Text>
                        </View>
                        <View>
                                <Text style={styles.text1}>
                                
                                    भौगोलिक क्षेत्र
                                </Text>
                                <Text style={styles.text2}>
                                
                                    दार्जिलिंग (पश्चिम बंगाल)
                                </Text>
                        </View>
                        <View>
                                <Text style={styles.text1}>
                                प्राथमिकता वाला देश
                                </Text>
                                <Text style={styles.text2}>
                                भारत
                                </Text>
                        </View>
                        <View>
                                <Text style={styles.text1}>
                                जर्नल क्रमांक
                                </Text>
                                <Text style={styles.text2}>
                                1
                                </Text>
                        </View>
                        <View>
                                <Text style={styles.text1}>
                                उपलब्धता तारीख
                                </Text>
                                <Text style={styles.text2}>
                                01/07/2004
                                </Text>
                        </View>
                        <View >
                                <Text style={styles.text1}>
                                प्रमाणपत्र क्रमांक
                                </Text>
                                <Text style={styles.text2}>
                                1
                                </Text>
                        </View>
                        <View >
                                <Text style={styles.text1}>
                                प्रमाणपत्र तारीख
                                </Text>
                                <Text style={styles.text2}>
                                29/10/2004
                                </Text>
                        </View>
                        <View>
                                <Text style={styles.text1}>
                                
                                    तक वैध पंजीकरण
                                </Text>
                                <Text style={styles.text2}>
                                26/10/2023
                                </Text>
                        </View>
                        <View style={styles.head}>
                                <Text style={styles.statustxt}>
                                    GI आवेदन की स्थिति
                                </Text>
                        </View>
                        <View>
                                <Text style={styles.text1}>
                                स्थिती
                                </Text>
                                <Text style={styles.text2}>
                                दर्ज
                                </Text>
                        </View>
                    <TouchableOpacity style={styles.button}
                        onPress={onPressHandlerBack}
                    >
                        <Text style={styles.buttontxt}>पीछे जाए</Text>
                    </TouchableOpacity>
                
                    </View>
                </ScrollView>
                

                
                
                </ScrollView>
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
    head:{
        backgroundColor:'#8B4500',
        height:45,
        width:"70%",
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
        height:950, 
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
    backgroundColor:'#8B4500',
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
        backgroundColor:'#8B4500',
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
        top:20,
        width:'85%',
        height:50,
        borderColor: '#8B4500',
        borderWidth: 1,
        alignSelf:'center',
        borderRadius:15,
        paddingLeft:5,
        paddingRight:5,
       },
       input2:{
        marginTop:10,
        width:'85%',
        height:250,
        borderColor: '#8B4500',
        borderWidth: 1,
        alignSelf:'center',
        borderRadius:15,
        textAlign:'left',
        paddingBottom:200,
        paddingLeft:5,
        paddingRight:5,
       },
       button:{
        backgroundColor:'#8B4500',
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
        backgroundColor:'##8B4500',
        padding:10,
        marginTop:114,
        width:'25%',
        right:-300,
        height:"20%",
       },
       statustxt:{
        fontSize:15,
        color:'#ffffff',
        textAlign:'center',
        padding:10
       },
       text1:{
        color:"#000000",
        marginTop:15,
        fontSize:15,
        marginLeft:30,
        width:"40%",
    },
    text2:{
        color:"#000000",
        marginTop:-22,
        fontSize:15,
        marginLeft:200,
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
   

  })