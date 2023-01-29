import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { redirect } from "react-router-dom";


const LoginForm = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
  const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //   // Signed in 
    //   const user = userCredential.user;
    //   <Redirect to="/" />

    //   // if (user) {
    //   //   return redirect("/");
    //   // }
    //   const q = query(collection(db, "users"), where("uid", "==", user.uid));
    //   const docs = getDocs(q);
    //   if (docs.docs.length === 0) {
    //     addDoc(collection(db, "users"), {
    //       uid: user.uid,
    //       authProvider: "email",
    //       email: user.email,
    //   });
    // }
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // ..
    // });

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        if (user) {
          return redirect("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

      redirect("/");
  };
  
  return (
    <form>
      <input
        className="rounded-lg border-2 border-gray-400 p-2 m-1"
        placeholder="email"
        type="text"
        required
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        className="rounded-lg border-2 border-gray-400 p-2 m-1"
        type="password"
        placeholder="password"
        required
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <br></br>
      <button
          id="myButton"
          className="bg-gray-200 rounded-md p-3 m-2 hover:bg-gray-600 hover:text-white duration-200"
          onClick={login}
        >
          Login
        </button>
      </form>
      
  );
};

export default LoginForm;
