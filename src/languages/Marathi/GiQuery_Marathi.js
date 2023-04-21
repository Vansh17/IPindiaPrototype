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

import { getDatabase, ref, onValue,set } from 'firebase/database';
export default function GiQuery_Marathi({navigation})
{
    
    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')

    const AddData=()=>{
        const db =getDatabase();

        set(ref(db, 'users/'+text1),{
            Application_Number:text1,
            Query:text2,
        });
        setText1('')
        setText2('')
    }
    
//   const onPressHandlerScan=()=>{
//     navigation.navigate('SelectFruit')
    
//   }


        return (    
        
            <View style={styles.container}>
                
                <View style={styles.headertop}>
                
                    <Text style={styles.headertxt}>
                        Home | About Us | Who's Who | Policy & Programs | 
                        Achievements | RTI | Sitemap | Contact Us | Help Line                                        
                    </Text>
                    
                </View>
                <ScrollView>
                
                <Image style = {styles.logo} source = {require('../../../assets/logo.png')} />
                <View style={styles.headermiddle}>

                    <Text style={styles.headermiddletxt}>GI विचारा</Text>
                    
                </View>
                <View style={{backgroundColor:'#DBDBDB', height:3,marginTop:20}}></View>
                <Text
                    style={{fontSize:18, textAlign:'center',marginTop:10}}
                >अर्ज क्रमांक
                </Text>
                <TextInput
                    style={styles.input1}
                    placeholder=" Application Number "
                    autoCapitalize="none"
                    autoCorrect={false}  
                    value={text1}
                    onChangeText={(text1) => {
                        setText1(text1)
                      }}  
                    multiline
                />
                <Text
                    style={{fontSize:18, textAlign:'center',marginTop:10}}
                >प्रश्न विचार
                </Text>
                <TextInput
                    style={styles.input2}
                    placeholder=" Type your query"
                    value={text2}

                    onChangeText={(text2) => {
                        setText2(text2)
                      }}
                    multiline
                />
                <TouchableOpacity style={styles.button}
                onPress={()=>{
                    AddData(''), 
                    navigation.navigate('GiQuerySent_Marathi')
                }}
                >
                    <Text style={styles.buttontxt}>प्रश्न विचारा</Text>
                </TouchableOpacity>
                <View style={{backgroundColor:'#DBDBDB', height:3,marginTop:20}}></View>
                <Image style = {styles.logobottom} source = {require('../../../assets/logo_bottom.png')} />
                
                <View style={styles.footer}>
                    <Text style={styles.footertxt}>
                    Terms & conditions | Privacy Policy | Copyright | 
                    Hyperlinking Policy | Accessibility | Archive
                    </Text>
                </View>
                </ScrollView>
                <View style={{top:-910,left:100}}>
                        {/* <Dropdown_DesignQuery_Marathi/> */}
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
        marginTop:20,
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
        marginTop:20,
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
        backgroundColor:'#8B4500',
        padding:10,
        marginTop:114,
        width:'25%',
        right:-300,
        height:"20%",
       }
   

  })