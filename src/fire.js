import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyANhNpi3cpogS2DxJO_6tnZVHhs01cyZqU",
    authDomain: "ifollow-6ae69.firebaseapp.com",
    projectId: "ifollow-6ae69",
    storageBucket: "ifollow-6ae69.appspot.com",
    messagingSenderId: "856617636721",
    appId: "1:856617636721:web:017a267018a4fc22b55cd0"
  };

  const fire = firebase.initializeApp(firebaseConfig);


export default fire;