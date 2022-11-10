// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7Dyk0dt-4GF3LnESa71UOzIPO-1LV8iM",
  authDomain: "aula01pam.firebaseapp.com",
  databaseURL: "https://aula01pam-default-rtdb.firebaseio.com",
  projectId: "aula01pam",
  storageBucket: "aula01pam.appspot.com",
  messagingSenderId: "621724878392",
  appId: "1:621724878392:web:0147251bd5ebef3536c8cd",
  measurementId: "G-2CQ5H2PLR0"
};

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase;