import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyArYWLWN5MZrCd_iPZH0oTzaXSKcfAH274",
    authDomain: "murugans-db.firebaseapp.com",
    databaseURL: "https://murugans-db.firebaseio.com",
    projectId: "murugans-db",
    storageBucket: "",
    messagingSenderId: "829588260757",
    appId: "1:829588260757:web:76bc96839ab5aa0f59189c"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;