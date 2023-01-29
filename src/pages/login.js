import React, { useState, useEffect } from "react";
import { LoginForm, RegisterUser } from "@/components";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import { db, auth, provider } from "/src/firebase-config.js";
import "/src/firebase-config.js";

const process = async () => {
  signInWithPopup(auth, provider);

  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (error) {
    // error handling
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email; // The email of the user's account used.
    const credential = GoogleAuthProvider.credentialFromError(error); // The AuthCredential type that was used.
  
  }
};

const login = () => {

  return (
    <div className="p-8 m-8 justify-center">
      <h1 className="text-3xl font-semibold">Login Here</h1>
      <button className="LoginButton" onClick={process}>
        {" "}
        Login with Google!{" "}
      </button>
    </div>
  );
};

export default login;

// export default {login, logout};
