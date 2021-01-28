import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAmivpAEQfxWoPhyjN8HIcVrhUlPsvdRzc",
    authDomain: "twitter-4ed39.firebaseapp.com",
    projectId: "twitter-4ed39",
    storageBucket: "twitter-4ed39.appspot.com",
    messagingSenderId: "805302867568",
    appId: "1:805302867568:web:1721ac551ce0f0e0e446b5",
    measurementId: "G-LE2KD28XLR"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;