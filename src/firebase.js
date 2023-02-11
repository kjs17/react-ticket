import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import 'firebase/compat/auth';

const firebaseConfig = {
  // Your web app's Firebase configuration
  apiKey: "AIzaSyC7SnuUcMDNiuTHUhdWODbn8Zj-LbLLpvg",
  authDomain: "react-ticket-website.firebaseapp.com",
  projectId: "react-ticket-website",
  storageBucket: "react-ticket-website.appspot.com",
  messagingSenderId: "740080051850",
  appId: "1:740080051850:web:deef57ba0352281ec12f73"

};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
// const auth = firebase.auth();

export { db };