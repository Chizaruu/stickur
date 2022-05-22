import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyBY4zy6Vc9na9F2oDkYiytNZhbHGxKvf_Q",

    authDomain: "latvia-firestore-e8a03.firebaseapp.com",

    projectId: "latvia-firestore-e8a03",

    storageBucket: "latvia-firestore-e8a03.appspot.com",

    messagingSenderId: "375336370943",

    appId: "1:375336370943:web:267eb037548329e69782ca",

    measurementId: "G-SZJDG1HMH1",
};

firebase.initializeApp(firebaseConfig); // Initialize Firebase
const firestore = firebase.firestore();
export default firestore; // exporting a firebase.firestore.Firestore object
