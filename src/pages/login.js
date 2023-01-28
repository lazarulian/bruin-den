import React from "react";
import { LoginForm, RegisterUser } from "@/components";

const login = () => {
  return (
    <div>
      <h1>Login form</h1>
      <LoginForm />
      <RegisterUser />
    </div>
  );
};

export default login;
