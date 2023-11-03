import  firebase  from "firebase/app";
import  "firebase/firestore";
import  "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9L7lLEeuj-vwLw73T0mRwy_bSTVBmdXg",
  authDomain: "chat-firebase-react-7614c.firebaseapp.com",
  projectId: "chat-firebase-react-7614c",
  storageBucket: "chat-firebase-react-7614c.appspot.com",
  messagingSenderId: "962473533611",
  appId: "1:962473533611:web:8e9a0980a79cbda783d7ee"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar base de datos
const db = firebase.firestore();


// Provider
const provider = new firebase.auth.GoogleAuthProvider();

//AUTH
const auth = firebase.auth();

export {db, provider, auth}