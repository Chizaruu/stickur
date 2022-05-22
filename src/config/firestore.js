import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyBDI9ti0nTnPgD46G2sqenIBI2bH8Tahoc",

    authDomain: "stickur-371ea.firebaseapp.com",

    projectId: "stickur-371ea",

    storageBucket: "stickur-371ea.appspot.com",

    messagingSenderId: "433149896911",

    appId: "1:433149896911:web:b238a376674620de88efba",

    measurementId: "G-8X84T8Q8YV",
};

firebase.initializeApp(firebaseConfig); // Initialize Firebase
const firestore = firebase.firestore();
export default firestore; // exporting a firebase.firestore.Firestore object
