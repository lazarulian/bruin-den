import React, { useState, useEffect } from "react";
import { LoginForm, RegisterUser } from "@/components";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import {app, db, auth, provider} from "/src/firebase-config.js";



const login = () => {
  signInWithRedirect(auth, provider)
  .then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
  })
  .catch((error) =>{
    alert("Invalid Login");
  })
  
}


const logout = () => {
  signOut(auth);
};



// export default {login, logout};
