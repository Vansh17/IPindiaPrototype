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
import { Component } from "react/cjs/react.development";
// import Dropdown from "./Dropdown";
// import Dropdown_Gi from "./Dropdown_Gi"
// import { firebase } from '../../config';
// import { useFonts } from 'expo-font';
export default class GiSearch_Hindi extends Component
{
  // const [isOpen,setIsOpen]=useState(false);
  
  constructor() {
    super()
    this.state = {
      textInputHolder: 0,
      captchaHolder: 0,
      randomNumberOne: 0,      
    }
  }

  componentDidMount() {
    this.generateCaptcha();
  }

  generateCaptcha = () => {
    var numberOne = Math.floor(Math.random() * 1000000) + 1;   
    var captchaCode = numberOne ;
    this.setState({ randomNumberOne: numberOne });
    this.setState({ captchaHolder: captchaCode });
  }


  validateCaptchaCode = () => {
    var temp = this.state.randomNumberOne ;
    if (this.state.textInputHolder == temp) {
      //Captcha match
      // Alert.alert("Captcha Matched");
      this.props.navigation.navigate('GiStatus_Hindi')
    }
    else {
      //Captcha not match
      Alert.alert("Captcha NOT Matched");
    }
    // Calling captcha function, to generate captcha code
    this.generateCaptcha();
  }

  RaiseQueryGi=()=>{
    this.props.navigation.navigate('GiQuery_Hindi')

  }
//   const onPressHandlerScan=()=>{
//     navigation.navigate('SelectFruit')
    
//   }
//   const onPressHandlerSupport=()=>{
//     navigation.navigate('Support')
    
//   }

render()
{
  return (    
        
    <View style={styles.container}>
      
        <View style={styles.headertop}>
          <View style={styles.inner}>
          <Text style={styles.headertxt}>
                Home | About Us | Who's Who | Policy & Programs | 
                Achievements | RTI | Sitemap | Contact Us | Help Line                                        
            </Text>
          </View>
            
        </View>
        <ScrollView>
            <Image style = {styles.logo} source = {require('../../../assets/logo.png')} />
            <View style={styles.headermiddle}>
                <Text style={styles.headermiddletxt}>GI खोज</Text>
            </View>
            <View style={{backgroundColor:'#DBDBDB', height:3,marginTop:20}}>
            </View>

            <View>
                <TouchableOpacity style={styles.buttons}
                onPress={this.RaiseQueryGi}
                >
                    <Text style={styles.text}>
                    प्रश्न उठाने के लिए यहां क्लिक करें
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{backgroundColor:'#DBDBDB', height:3,marginTop:20}}>
            </View>
            <Text style={{fontSize:18,alignSelf:"center",marginTop:10}}>
            आवेदन  क्रमांक
            </Text>
            <TextInput
            style={{
              marginTop:20,
              width:'85%',
              height:50,
              borderColor: '#8B4500',
              borderWidth: 1,
              alignSelf:'center',
              borderRadius:15,
              padding:10,
             }}
             placeholder="Application number: "
            />
          <Text style={{fontSize:15,alignSelf:"center",marginTop:10,color:'grey'}}>
              (Put Application Number: 1)
            </Text>

            
        <View style={styles.captchaContainerView}>

          <View style={ styles.captchaChildContainer}>
            <Image
              style={{ width: 150, height: 30}}
              source={{ uri: 'https://dummyimage.com/150x40/0091ea/fafafa.png&text=' + this.state.randomNumberOne }}
            />
            <TouchableOpacity onPress={this.generateCaptcha} style={styles.button_refresh}>
              {/* <Image source={{ uri: "asset:/images/refresh.png" }}
                style={{ width: 40, height: 35, resizeMode: 'contain', margin: 20 }} /> */}
            <Image style = {{width: 40, height: 35}} source = {require('../../../assets/refresh_button.png')} />

            </TouchableOpacity>
          </View>

        </View>




            <Text style={{fontSize:18,alignSelf:"center"}}>
            कोड दर्ज करें<Text style={{color:'red'}}>*</Text>
            </Text>
            <TextInput
            style={{
              marginTop:20,
              width:'85%',
              height:50,
              borderColor: '#8B4500',
              borderWidth: 1,
              alignSelf:'center',
              borderRadius:15,
              padding:10,
             }}
             placeholder="Enter code: "
             onChangeText={data => this.setState({ textInputHolder: data })}
            />

        <TouchableOpacity style={styles.button} onPress={this.validateCaptchaCode} >
          <Text style={styles.text}>कोड दर्ज करें</Text>
        </TouchableOpacity>
          
          <Image style = {styles.logobottom} source = {require('../../../assets/logo_bottom.png')} />
          <View style={styles.footer}>
          <Text style={styles.footertxt}>
          Terms & conditions | Privacy Policy | Copyright | 
          Hyperlinking Policy | Accessibility | Archive
          </Text>
          </View>
        </ScrollView>
        <View style={{top:-845,left:100}}>
          {/* <Dropdown_Gi/> */}
        </View> 
    </View>
   
)
}
    
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
    button:{
      backgroundColor:'#8B4500',
      width: 114,
      height: 40,
      marginTop:20,
      alignSelf:"center",
      borderRadius:15,
    },
    buttons:{
        backgroundColor:'#8B4500',
        width: 250,
        height: 40,
        marginTop:20,
        alignSelf:"center",
        borderRadius:15,
      },
    inner:{
      width:'100%',
    },
    button_refresh:{
      marginLeft:250,
      // marginBottom:55,
      top:-30,
    },
    footertxt:{
      fontSize:15,
      color:'#ffffff',
      textAlign:'center',
    },
    text:{
      marginTop:10,
      alignSelf:"center",
      color:"#ffffff",
    },
    logo:{
      height:140,
      width:155,
      marginTop:30,
    //   top:10,
    //   top:90,
      alignItems:'center',
      alignSelf:'center',
    },
    logobottom:{
      height:140,
      width:180,
      marginTop:30,
    //   top:10,
    //   top:90,
      alignItems:'center',
      alignSelf:'center',
    },
    headertop:{
      backgroundColor:'#8B4500',
      height:115,
      width:"100%",
      justifyContent:'center',
      alignContent:'center',
      alignSelf:'center',
    // top:10,
    },
    captchaChildContainer:{
      alignSelf:"center",
      marginTop:20,
    },
    headertxt:{
        fontSize:14,
        top:10,
        padding:20,
        // widht:'40%',
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

    }
   

  })