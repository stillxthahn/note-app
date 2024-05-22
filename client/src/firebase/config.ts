// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCA6YwTHaj6P9gWWWliMoFfuzGaMK5qcA",
  authDomain: "note-app-c7650.firebaseapp.com",
  projectId: "note-app-c7650",
  storageBucket: "note-app-c7650.appspot.com",
  messagingSenderId: "377734166710",
  appId: "1:377734166710:web:6e4fb393866f8438fb4e17",
  measurementId: "G-MYBL8VPEEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);