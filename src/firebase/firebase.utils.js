import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyByJ_7PGShg8XlYD1Lm6D_6xlHeiqz6UG0",
    authDomain: "crwn-db-edgewise.firebaseapp.com",
    projectId: "crwn-db-edgewise",
    storageBucket: "crwn-db-edgewise.appspot.com",
    messagingSenderId: "419171827545",
    appId: "1:419171827545:web:5b462757138c192411d648",
    measurementId: "G-SFY9XYWNRP"
  };
  firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
