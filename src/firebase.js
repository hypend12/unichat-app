import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBL3HDU0lzJ5kK3oDYFmxmKcVPabxKI2DI",
    authDomain: "unichat-58409.firebaseapp.com",
    projectId: "unichat-58409",
    storageBucket: "unichat-58409.appspot.com",
    messagingSenderId: "699562206149",
    appId: "1:699562206149:web:6dedf6049f2522b600a1ac"
  }).auth();