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
// import Dropdown from './src/Dropdown';
import GiSearch from './src/GiSearch';
// import Dropdown_Gi from './src/Dropdown_Gi';
import DesignStatus from './src/DesignStatus';
// import Dropdown_Status_Design from './src/Dropdown_Status_Design';
// import Dropdown_Status_Gi from './src/Dropdown_Status_Gi';
import DesignLogin from './src/DesignLogin';
import GiLogin from './src/GiLogin';
import DesignQuery from './src/DesignQuery';
import DesignQuerySent from './src/DesignQuerySent';
import GiQuery from './src/GiQuery';
import GiQuerySent from './src/GiQuerySent';
import GiStatus from './src/GiStatus';
import { firebase } from './config';
import { firebase2 } from './config2';
import DesignSearch_Marathi from './src/languages/Marathi/DesignSearch_Marathi';
import Language_Design from './src/Language_Design';
import DesignQuery_Marathi from './src/languages/Marathi/DesignQuery_Marathi';
import DesignStatus_Marathi from './src/languages/Marathi/DesignStatus_Marathi';
import DesignSearch_Gujarati from './src/languages/Gujarati/DesignSearch_Gujarati';
import DesignQuery_Gujarati from './src/languages/Gujarati/DesignQuery_Gujarati';
import DesignStatus_Gujarati from './src/languages/Gujarati/DesignStatus_Gujarati';
import Language_Gi from './src/Language_Gi';
import GiSearch_Marathi from './src/languages/Marathi/GiSearch_Marathi';
import GiStatus_Marathi from './src/languages/Marathi/GiStatus_Marathi';
import GiQuery_Marathi from './src/languages/Marathi/GiQuery_Marathi';
import GiSearch_Gujarati from './src/languages/Gujarati/GiSearch_Gujarati';
import GiQuery_Gujarati from './src/languages/Gujarati/GiQuery_Gujarati';
import GiStatus_Gujarati from './src/languages/Gujarati/GiStatus_Gujarati';
import DesignQuery_Hindi from './src/languages/Hindi/DesignQuery_Hindi';
import DesignSearch_Hindi from './src/languages/Hindi/DesignSearch_Hindi';
import DesignStatus_Hindi from './src/languages/Hindi/DesignStatus_Hindi';
import GiStatus_Hindi from './src/languages/Hindi/GiStatus_Hindi';
import GiSearch_Hindi from './src/languages/Hindi/GiSearch_Hindi';
import GiQuery_Hindi from './src/languages/Hindi/GiQuery_Hindi';
import DesignQuerySent_Hindi from './src/languages/Hindi/DesignQuerySent_Hindi';
import DesignQuerySent_Gujarati from './src/languages/Gujarati/DesignQuerySent_Gujarati';
import DesignQuerySent_Marathi from './src/languages/Marathi/DesignQuerySent_Marathi';
import GiQuerySent_Hindi from './src/languages/Hindi/GiQuerySent_Hindi';
import GiQuerySent_Gujarati from './src/languages/Gujarati/GiQuerySent_Gujarati';
import GiQuerySent_Marathi from './src/languages/Marathi/GiQuerySent_Marathi';

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
            headerShown:false,
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
            name="DesignLogin"
            component ={DesignLogin}
            options={{
              headerShown:false
            }}
          />
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
 
         {/* <Stack.Screen
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
           */}
 
           <Stack.Screen
            name="DesignStatus"
            component ={DesignStatus}
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
 
         {/* <Stack.Screen
            name="Dropdown_Status_Gi"
            component ={Dropdown_Status_Gi}
            options={{
              headerShown:false
            }}
          /> */}
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
            name="DesignSearch_Marathi"
            component ={DesignSearch_Marathi}
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
        screenOptions={{
          headerShown: false,
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
            name="Language_Design"
            component ={Language_Design}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen
            name="Language_Gi"
            component ={Language_Gi}
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
          
{/* ************************************************************************* */}
          <Stack.Screen
            name="DesignSearch_Marathi"
            component ={DesignSearch_Marathi}
            options={{
              headerShown:false
            }}
            
          />
          <Stack.Screen
            name="DesignQuerySent_Marathi"
            component ={DesignQuerySent_Marathi}
            options={{
              headerShown:false
            }}
            
          />
          <Stack.Screen
            name="GiQuerySent_Marathi"
            component ={GiQuerySent_Marathi}
            options={{
              headerShown:false
            }}
            
          />
          <Stack.Screen
            name="DesignQuery_Marathi"
            component ={DesignQuery_Marathi}
            options={{
              headerShown:false
            }}
            
          />
          <Stack.Screen
            name="DesignStatus_Marathi"
            component ={DesignStatus_Marathi}
            options={{
              headerShown:false
            }}
            
          />
          <Stack.Screen
            name="GiSearch_Marathi"
            component ={GiSearch_Marathi}
            options={{
              headerShown:false
            }}
            
          />
          <Stack.Screen
            name="GiQuery_Marathi"
            component ={GiQuery_Marathi}
            options={{
              headerShown:false
            }}
            
          />
          <Stack.Screen
            name="GiStatus_Marathi"
            component ={GiStatus_Marathi}
            options={{
              headerShown:false
            }}
            
          />



{/* ************************************************************* */}
          <Stack.Screen
            name="DesignSearch_Gujarati"
            component ={DesignSearch_Gujarati}
            options={{
              headerShown:false
            }}
            
          />
          <Stack.Screen
            name="DesignQuerySent_Gujarati"
            component ={DesignQuerySent_Gujarati}
            options={{
              headerShown:false
            }}
            
          />
          <Stack.Screen
            name="GiQuerySent_Gujarati"
            component ={GiQuerySent_Gujarati}
            options={{
              headerShown:false
            }}
            
          />
          <Stack.Screen
            name="DesignQuery_Gujarati"
            component ={DesignQuery_Gujarati}
            options={{
              headerShown:false
            }}
            
          />
          <Stack.Screen
            name="DesignStatus_Gujarati"
            component ={DesignStatus_Gujarati}
            options={{
              headerShown:false
            }}
            
          />

        <Stack.Screen
            name="GiSearch_Gujarati"
            component ={GiSearch_Gujarati}
            options={{
              headerShown:false
            }}
            
          />

          
          <Stack.Screen
            name="GiQuery_Gujarati"
            component ={GiQuery_Gujarati}
            options={{
              headerShown:false
            }}
            
          />
          <Stack.Screen
            name="GiStatus_Gujarati"
            component ={GiStatus_Gujarati}
            options={{
              headerShown:false
            }}
            
          />
 {/* ********************************************************************** */}
          <Stack.Screen
            name="GiStatus_Hindi"
            component ={GiStatus_Hindi}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen
            name="GiSearch_Hindi"
            component ={GiSearch_Hindi}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen
            name="GiQuery_Hindi"
            component ={GiQuery_Hindi}
            options={{
              headerShown:false
            }}
          />

          <Stack.Screen
            name="DesignQuery_Hindi"
            component ={DesignQuery_Hindi}
            options={{
              headerShown:false
            }}
          />

        <Stack.Screen
            name="DesignQuerySent_Hindi"
            component ={DesignQuerySent_Hindi}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen
            name="GiQuerySent_Hindi"
            component ={GiQuerySent_Hindi}
            options={{
              headerShown:false
            }}
          />

          <Stack.Screen
            name="DesignStatus_Hindi"
            component ={DesignStatus_Hindi}
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen
            name="DesignSearch_Hindi"
            component ={DesignSearch_Hindi}
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

{/* ********************************************************************************* */}
          
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