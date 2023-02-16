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
    TouchableHighlight
    
    
  } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
// import Dropdown from "./Dropdown";
import { firebase } from '../config';
// import { firebase2 } from '../config2'
// import { useFonts } from 'expo-font';

export default function Language_Design({navigation})
{

  var [ isPress, setIsPress ] = React.useState(false);

  var touchProps = {
    activeOpacity: 1,
    underlayColor: '#346002',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('HELLO'),                 // <-- "onPress" is apparently required
  };


    const onPressHandler_Lang_Design_Eng=()=>{
        navigation.navigate('DesignSearch')
      }

      const onPressHandler_Lang_Design_Hin=()=>{
        navigation.navigate('DesignSearch_Hindi')
      }

      const onPressHandler_Lang_Design_Mar=()=>{
        navigation.navigate('DesignSearch_Marathi')
      }

      const onPressHandler_Lang_Design_Guj=()=>{
        navigation.navigate('DesignSearch_Gujarati')
      }

//         return (    
        
//             <View style={styles.container}>
//                 <View style={styles.headertop}>

//                 </View>
                
                
                
//                 <ScrollView>
//                 <Image style = {styles.logo} source = {require('../assets/logo.png')} />
                
                
//                 <View style={styles.input2}>
//                     <Text style={{fontSize:28,textAlign:'center',marginTop:20}}>Language Selection Design</Text>
//                     <TouchableHighlight
//                     style={styles.button}
//                     onPress={onPressHandler_Lang_Design_Eng}
//                     {...touchProps}
//                     >
//                         <Text style={styles.text}>
//                             English
//                         </Text>
//                     </TouchableHighlight>

//                     <TouchableOpacity
//                     style={styles.button}
//                     onPress={onPressHandler_Lang_Design_Hin}>
//                         <Text style={styles.text}>
//                         हिंदी
//                         </Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                     style={styles.button}
//                     onPress={onPressHandler_Lang_Design_Mar}>
//                         <Text style={styles.text}>
//                         मराठी
//                         </Text>
//                     </TouchableOpacity>
                    
//                     <TouchableOpacity
//                     style={styles.button}
//                     onPress={onPressHandler_Lang_Design_Guj}>
//                         <Text style={styles.text}>
//                         ગુજરાતી
//                         </Text>
//                     </TouchableOpacity>
//                     <TouchableHighlight {...touchProps}>
//                       <Text>Click here</Text>
//                     </TouchableHighlight>

//                 </View>
                

//                 </ScrollView>
//             </View>
           
//         )
//     }
    

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//     btnNormal: {
//       borderColor: '#346002',
//       borderWidth: 1,
//       borderRadius: 10,
//       height: 30,
//       width: 100,
//     },
//     btnPress: {
//       borderColor: '#346002',
//       borderWidth: 1,
//       height: 30,
//       width: 100,
//     },
  
//     text:{
//         color:'#000000',
//         alignSelf:"center",
//         marginTop:10
// ,    },
//     footer:{
//       backgroundColor:'#3A3B3C',
//       height:90,
//       width:"100%",
//       justifyContent:'center',
//       alignContent:'center',
//       alignSelf:'center'
//     },
//     footertxt:{
//       fontSize:15,
//       color:'#ffffff',
//       textAlign:'center',
//     },
//     logo:{
//       height:140,
//       width:155,
//       marginTop:30,
//       alignItems:'center',
//       alignSelf:'center',
//     },
//     headertop:{
//     backgroundColor:'#346002',
//       height:110,
//       width:"100%",
//       justifyContent:'center',
//       alignContent:'center',
//       alignSelf:'center',
//       borderBottomRightRadius:100
//     },
//     headertxt:{
//         fontSize:14,
//         top:7,
//         padding:20,
//     },
//     headermiddle:{
//         backgroundColor:'#346002',
//         marginTop:25,
//         height:50,
//         width:'100%',
//     },
//     headermiddletxt:{
//         fontSize:20,
//         color:'#ffffff',
//         textAlign:'center',
//         padding:10,
//     },
//     input1:{
//         marginTop:10,
//         width:'85%',
//         height:50,
//         borderColor: '#346002',
//         borderWidth: 1,
//         alignSelf:'center',
//         borderRadius:15,
//         paddingLeft:5,
//         paddingRight:5,
//        },
//        input2:{
//         marginTop:70,
//         width:'80%',
//         height:450,
//         borderColor: '#346002',
//         borderWidth: 1,
//         alignSelf:'center',
//         borderRadius:15,
//         textAlign:'left',
//         paddingBottom:200,
//         paddingLeft:5,
//         paddingRight:5,
//        },
//        button:{
//         backgroundColor:'#346002',
//         height:45,
//         width:110,
//         alignSelf:'center',
//         borderRadius:7,
//         marginTop:30,
//        },
//        buttontxt:{
//         fontSize:15,
//         color:'#ffffff',
//         textAlign:'center',
//         padding:10,

//        },
//        logobottom:{
//         // height:'10%'
//         height:150,
//         width:280,
//         alignSelf:'center'
//        },
//        menu:{
//         backgroundColor:'#346002',
//         padding:10,
//         marginTop:114,
//         width:'25%',
//         right:-300,
//         height:"20%",
//        }
   

//   })


return (    
        
  <View style={styles.container}>
      <View style={styles.headertop}>
          <Text style={{fontSize:28,textAlign:'center',marginTop:20, color:'#ffffff'}}>Select Language</Text>
      </View>
      
      
      
      <ScrollView>
      {/* <Image style = {styles.logo} source = {require('../../assets/logo.png')} /> */}
      
      
      <View style={styles.input2}>
          
        <TouchableHighlight {...touchProps}
          onPress={onPressHandler_Lang_Design_Eng}
        >
          <Text style={styles.text}>English</Text>
        </TouchableHighlight>
        <TouchableHighlight {...touchProps}
          onPress={onPressHandler_Lang_Design_Hin}
        >
          <Text style={styles.text}>हिंदी</Text>
        </TouchableHighlight>
        <TouchableHighlight {...touchProps}
          onPress={onPressHandler_Lang_Design_Mar}
          >
          <Text style={styles.text}>मराठी</Text>
        </TouchableHighlight>
        <TouchableHighlight {...touchProps}
          onPress={onPressHandler_Lang_Design_Guj}
        >
          <Text style={styles.text}>ગુજરાતી</Text>
        </TouchableHighlight>
        

      </View>
      <View style={styles.bottom_box}>
        <Text style={styles.text}>These above languages are presented for the prototype</Text>
        <Text style={styles.text}>The main product will contain these additional languages:</Text>
        <View style={{width:'50%',marginTop:20,}}>
          <Text style={styles.text_left}>Punjabi</Text>
          <Text style={styles.text_left}>Tamil</Text>
          <Text style={styles.text_left}>Bengali</Text>
          <Text style={styles.text_left}>Assamese</Text>
          <Text style={styles.text_left}>Dutch</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.text_right}>Kannada</Text>
          <Text style={styles.text_right}>French</Text>
          <Text style={styles.text_right}>Spanish</Text>
          <Text style={styles.text_right}>German</Text>
        </View>
        
      </View>

      </ScrollView>
  </View>
 
)
}


const styles = StyleSheet.create({
container: {
flex: 1,
},
text:{
color:'#000000',
alignSelf:"center",
marginTop:10,
fontSize:18,
},
text1:{
  color:'#000000',
  alignSelf:"center",
  marginTop:7,
  fontSize:15,
  },
text_left:{
  fontSize:15,
  textAlign:"left",
  paddingLeft:45,
  paddingBottom:5,
},
text_right:{
  fontSize:15,
  textAlign:"right",
  paddingRight:45,
  paddingBottom:5,
},
right:{
  
  width:"50%",
  position:"absolute",
  right:0,
  marginTop:130,
  
},
bottom_box:{
  backgroundColor:"#ffffff",
  borderRadius:10,
  height: 270,
  width: 270,
  alignSelf:"center",
  // marginTop:100,
  borderColor: '#D3D3D3',
  borderWidth:3,
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
backgroundColor:'#346002',
height:110,
width:"100%",
justifyContent:'center',
alignContent:'center',
alignSelf:'center',
// borderBottomRightRadius:100
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
marginTop:10,
width:'85%',
height:50,
// borderColor: '#346002',
borderWidth: 1,
alignSelf:'center',
borderRadius:15,
paddingLeft:5,
paddingRight:5,
},
input2:{
marginTop:10,
width:'80%',
height:350,
// borderColor: '#346002',
// borderWidth: 1,
alignSelf:'center',
borderRadius:15,
textAlign:'left',
paddingBottom:200,
paddingLeft:5,
paddingRight:5,
},
button:{
backgroundColor:'#ffffff',
height:50,
width:270,
alignSelf:'center',
borderRadius:7,
marginTop:30,
borderColor:'#D3D3D3',
borderWidth:2

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
},
btnNormal: {
borderColor: '#D3D3D3',
backgroundColor:'#ffffff',
borderWidth: 3,
borderRadius: 10,
height: 50,
width: 270,
alignSelf:'center',
marginTop:30,
},
btnPress: {
borderColor: '##D3D3D3',
backgroundColor:'#ffffff',
borderWidth: 3,
height: 50,
width: 270,
alignSelf:'center',
marginTop:30,
}


})