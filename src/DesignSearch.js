import React, { useState,useEffect ,Component } from "react";
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
// import { Component } from "react/cjs/react.development";
// import Dropdown from "./Dropdown";
// import { firebase } from '../../config';
// import { useFonts } from 'expo-font';
export default class DesignSearch extends Component
{
  // const [isOpen,setIsOpen]=useState(false);
  
  constructor(props) {
    super(props)
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
      this.props.navigation.navigate('DesignStatus')
    }
    else {
      //Captcha not match
      Alert.alert("Captcha NOT Matched");
    }
    // Calling captcha function, to generate captcha code
    this.generateCaptcha();
  }


  RaiseDesignQuery=()=>{
    this.props.navigation.navigate('DesignQuery')

  }

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
            <Image style = {styles.logo} source = {require('../assets/logo.png')} />
            <View style={styles.headermiddle}>
                <Text style={styles.headermiddletxt}>Designs Search</Text>
            </View>
            <View style={{backgroundColor:'#DBDBDB', height:3,marginTop:20}}>
            </View>
            <View>
                <TouchableOpacity style={styles.buttons}
                onPress={this.RaiseDesignQuery}
                >
                    <Text style={styles.text} >
                        Click here to raise a query
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{backgroundColor:'#DBDBDB', height:3,marginTop:20}}>
            </View>
            <Text style={{fontSize:18,alignSelf:"center",marginTop:10}}>
              Application Number:
            </Text>
            <TextInput
            style={{
              marginTop:20,
              width:'85%',
              height:50,
              borderColor: '#346002',
              borderWidth: 1,
              alignSelf:'center',
              borderRadius:15,
              padding:10,
             }}
             placeholder="Application number: "
            />
            <Text style={{fontSize:15,alignSelf:"center",marginTop:10,color:'grey'}}>
              (Put Application Number: 366737-008)
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
            <Image style = {{width: 40, height: 35}} source = {require('../assets/refresh_button.png')} />

            </TouchableOpacity>
          </View>

        </View>




            <Text style={{fontSize:18,alignSelf:"center"}}>
              Enter Code:<Text style={{color:'red'}}>*</Text>
            </Text>
            <TextInput
            style={{
              marginTop:20,
              width:'85%',
              height:50,
              borderColor: '#346002',
              borderWidth: 1,
              alignSelf:'center',
              borderRadius:15,
              padding:10,
             }}
             placeholder="Enter code: "
             onChangeText={data => this.setState({ textInputHolder: data })}
            />

        <TouchableOpacity style={styles.button} onPress={this.validateCaptchaCode} >
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
          
          <Image style = {styles.logobottom} source = {require('../assets/logo_bottom.png')} />
          <View style={styles.footer}>
          <Text style={styles.footertxt}>
          Terms & conditions | Privacy Policy | Copyright | 
          Hyperlinking Policy | Accessibility | Archive
          </Text>
          </View>
        </ScrollView>
        <View style={{top:-845,left:100}}>
          {/* <Dropdown/> */}
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
      backgroundColor:'#346002',
      width: 114,
      height: 40,
      marginTop:20,
      alignSelf:"center",
      borderRadius:15,
    },
    buttons:{
      backgroundColor:'#346002',
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
      backgroundColor:'#346002',
      height:110,
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

    }
   

  })