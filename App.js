// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// **************************************************************


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState, useEffect} from 'react';
//  import type  from 'react';
 import {
   Button,
   FlatList,
   Linking,
   RefreshControl,
   SafeAreaView,
   ScrollView,
   SectionList,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TextInput,
   TouchableOpacity,
   Pressable,
   Alert,
   ToastAndroid,
   Modal,
   Image,
   ImageBackground,
  // Button
 } from 'react-native';
// import ScreenA  from './src/screens/ScreenA';
// import ScreenB from './src/screens/ScreenB';


//  import {
//    Colors,
//    DebugInstructions,
//    Header,
//    LearnMoreLinks,
//    ReloadInstructions,
//  } from 'react-native/Libraries/NewAppScreen';

// import { firebase } from './config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './src/Main';


import 'react-native-gesture-handler';
// import DesignSearch from './src/DesignSearch';
import DesignSearch from './src/DesignSearch';
import Dropdown from './src/Dropdown';
import GiSearch from './src/GiSearch';
import Dropdown_Gi from './src/Dropdown_Gi';
import DesignStatus from './src/DesignStatus';
import Dropdown_Status_Design from './src/Dropdown_Status_Design';
import Dropdown_Status_Gi from './src/Dropdown_Status_Gi';
import DesignLogin from './src/DesignLogin';
import GiLogin from './src/GiLogin';
import DesignQuery from './src/DesignQuery';
import DesignQuerySent from './src/DesignQuerySent';
import GiQuery from './src/GiQuery';
import GiQuerySent from './src/GiQuerySent';
import GiStatus from './src/GiStatus';
import { firebase } from './config';
import { firebase2 } from './config2';

const Stack=createStackNavigator();


function App()
{

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user)
  {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(()=>{
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;
// ***************************************************************************

// const [initializing2, setInitializing2] = useState(true);
  // const [user2, setUser2] = useState();

  // function onAuthStateChanged(user2)
  // {
  //   setUser2(user2);
  //   if (initializing2) setInitializing2(false);
  // }

  // useEffect(()=>{
  //   const subscriber2 = firebase2.auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber2;
  // }, []);

  // if (initializing2) return null;


// *********************************************************************
  if(!user)
  {
    return(

      <NavigationContainer >
        <Stack.Navigator
  
          initialRouteName='DesignLogin'
  
          screenOptions={{
            headerShown:true,
            swipeEnabled:true,
            gestureEnabled:true,
            headerTitleAlign:'center',
            headerStyle:{
              backgroundColor:'#0080ff'
            },
            headerTintColor:'#ffffff',
            headerTitleStyle:{
              fontSize:25,
              fontWeight:'bold',
            }
          }}
        >
        
          <Stack.Screen
            name="Main"
            component ={Main}
            options={{
              headerShown:false
            }}
          />
 
         <Stack.Screen
            name="DesignSearch"
            component ={DesignSearch}
            options={{
              headerShown:false
            }}
          />
 
         <Stack.Screen
            name="GiSearch"
            component ={GiSearch}
            options={{
              headerShown:false
            }}
          />
 
         <Stack.Screen
            name="Dropdown"
            component ={Dropdown}
            options={{
              headerShown:false
            }}
            
          />
 
         <Stack.Screen
            name="Dropdown_Gi"
            component ={Dropdown_Gi}
            options={{
              headerShown:false
            }}
          />
 
         <Stack.Screen
            name="Dropdown_Status_Design"
            component ={Dropdown_Status_Design}
            options={{
              headerShown:false
            }}
            
          />
          
 
           <Stack.Screen
            name="DesignStatus"
            component ={DesignStatus}
            options={{
              headerShown:false
            }}
          />
 
           <Stack.Screen
            name="DesignLogin"
            component ={DesignLogin}
            options={{
              headerShown:false
            }}
          />
 
           <Stack.Screen
            name="GiLogin"
            component ={GiLogin}
            options={{
              headerShown:false
            }}
          />
 
         <Stack.Screen
            name="DesignQuery"
            component ={DesignQuery}
            options={{
              headerShown:false
            }}
          />
 
         <Stack.Screen
            name="Dropdown_Status_Gi"
            component ={Dropdown_Status_Gi}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen
            name="DesignQuerySent"
            component ={DesignQuerySent}
            options={{
              headerShown:false
            }}
          />
 
         <Stack.Screen
            name="GiQuery"
            component ={GiQuery}
            options={{
              headerShown:false
            }}
          />
 
         <Stack.Screen
            name="GiQuerySent"
            component ={GiQuerySent}
            options={{
              headerShown:false
            }}
          />
 
         <Stack.Screen
            name="GiStatuss"
            component ={GiStatus}
            options={{
              headerShown:false
            }}
          />
         
  
  
        </Stack.Navigator>
      </NavigationContainer>
  
  );
  }
   

  return(
    <NavigationContainer >
        <Stack.Navigator
        >

        <Stack.Screen
            name="Main"
            component ={Main}
            options={{
              headerShown:false
            }}
          />

        <Stack.Screen
            name="DesignStatus"
            component ={DesignStatus}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen
            name="DesignSearch"
            component ={DesignSearch}
            options={{
              headerShown:false
            }}
          />
          
          <Stack.Screen
            name="GiSearch"
            component ={GiSearch}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen
            name="DesignQuery"
            component ={DesignQuery}
            options={{
              headerShown:false
            }}
          />

        <Stack.Screen
            name="GiStatus"
            component ={GiStatus}
            options={{
              headerShown:false
            }}
          />

         <Stack.Screen
            name="GiQuery"
            component ={GiQuery}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen
            name="Dropdown"
            component ={Dropdown}
            options={{
              headerShown:false
            }}
          />

        
          <Stack.Screen
            name="Dropdown_Gi"
            component ={Dropdown_Gi}
            options={{
              headerShown:false
            }}
            
          />
 

        </Stack.Navigator>
      </NavigationContainer>
  );

  




 }
//  return(
//    <NavigationContainer>
//      <Stack.Navigator>
//      <Stack.Screen
//             name="Main"
//             component ={Main}
//             options={{
//             headerShown:false
//            }}
//      />
//      <Stack.Screen
//             name="ForgetPassword"
//             component ={ForgetPassword}
//             options={{
//             headerShown:false
//            }}
//      />
//      <Stack.Screen
//             name="Support"
//             component ={Support}
//             options={{
//             headerShown:false
//            }}
//      />
//      <Stack.Screen
//             name="SelectFruit"
//             component ={SelectFruit}
//             options={{
//             headerShown:false
//            }}
//      />
//      <Stack.Screen
//             name="Recorder"
//             component ={Recorder}
//             options={{
//             headerShown:false
//            }}
//      />

//     <Stack.Screen
//             name="Question"
//             component ={Question}
//             options={{
//             headerShown:false
//            }}
//      />
//      <Stack.Screen
//             name="BananaQuestion1"
//             component ={BananaQuestion1}
//             options={{
//             headerShown:false
//            }}
//      />
//      <Stack.Screen
//             name="ReportBanana"
//             component ={ReportBanana}
//             options={{
//             headerShown:false
//            }}
//      />
//      <Stack.Screen
//             name="ReportApple"
//             component ={ReportApple}
//             options={{
//             headerShown:false
//            }}
//      />
//      <Stack.Screen
//             name="BananaQuestion2"
//             component ={BananaQuestion2}
//             options={{
//             headerShown:false
//            }}
//      />
//      <Stack.Screen
//             name="BananaQuestion3"
//             component ={BananaQuestion3}
//             options={{
//             headerShown:false
//            }}
//      />
//      <Stack.Screen
//             name="AppleQuestion2"
//             component ={AppleQuestion2}
//             options={{
//             headerShown:false
//            }}
//      />
//      <Stack.Screen
//             name="AppleQuestion3"
//             component ={AppleQuestion3}
//             options={{
//             headerShown:false
//            }}
//      />
//      <Stack.Screen
//             name="AppleQuestion4"
//             component ={AppleQuestion4}
//             options={{
//             headerShown:false
//            }}
//      />
//      </Stack.Navigator>
//    </NavigationContainer>
//  )
 







export default App;