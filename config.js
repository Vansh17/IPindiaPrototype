//firebase config key setup
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//Your web app's Firebase configuration

const firebaseConfig={
    apiKey: "AIzaSyAH-b8mf3T84fzX9QInJgU4jDcjYz2BcPE",
  authDomain: "ipindia-a30d5.firebaseapp.com",
  projectId: "ipindia-a30d5",
  storageBucket: "ipindia-a30d5.appspot.com",
  messagingSenderId: "615522436122",
  appId: "1:615522436122:web:e715eb717deb4ced0dbda3",
  measurementId: "G-Z99HMVJNRJ"
}

if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig);
}

export { firebase };