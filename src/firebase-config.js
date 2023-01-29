import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { LoginForm, RegisterUser } from "@/components";



// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7DJzlSfb1MXxGPIMzY-XZDWN-aNcyCdU",
  authDomain: "bruin-den.firebaseapp.com",
  projectId: "bruin-den",
  storageBucket: "bruin-den.appspot.com",
  messagingSenderId: "178181796892",
  appId: "1:178181796892:web:814d18c1bac457b8efdbd9",
  measurementId: "G-7SEJH6ELPK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {app, db, auth, provider};
