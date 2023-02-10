//firebase config key setup
import firebase2 from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//Your web app's Firebase configuration

const firebaseConfig={
    apiKey: "AIzaSyD33epnZRGuxWa8olkIueOYkUXtMyeHpDA",
  authDomain: "ipindia2.firebaseapp.com",
  projectId: "ipindia2",
  storageBucket: "ipindia2.appspot.com",
  messagingSenderId: "1048511553387",
  appId: "1:1048511553387:web:f68ec412786adf225ef62e",
  measurementId: "G-9VGGR85GMY"
}

if(!firebase2.apps.length)
{
    firebase2.initializeApp(firebaseConfig);
}

export { firebase2 };