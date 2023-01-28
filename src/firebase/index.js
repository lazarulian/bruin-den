// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Firebase from 'Firebase/app';
import 'Firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7DJzlSfb1MXxGPIMzY-XZDWN-aNcyCdU",
  authDomain: "bruin-den.firebaseapp.com",
  projectId: "bruin-den",
  storageBucket: "bruin-den.appspot.com",
  messagingSenderId: "178181796892",
  appId: "1:178181796892:web:814d18c1bac457b8efdbd9",
  measurementId: "G-7SEJH6ELPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (!Firebase.apps.length) {
    Firebase.initializeApp(FirebaseCredentials)
  }
  
export default Firebase;
