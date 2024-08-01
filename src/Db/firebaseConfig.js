// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsMaU_DLqjmu0uLnegGaKXxZiyeOf2Dlc",
  authDomain: "chatting-app-c0fbe.firebaseapp.com",
  projectId: "chatting-app-c0fbe",
  storageBucket: "chatting-app-c0fbe.appspot.com",
  messagingSenderId: "248316130587",
  appId: "1:248316130587:web:d9f7b9bbaf16112bb14fbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;