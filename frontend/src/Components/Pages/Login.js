import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../Pages/firebase";
import '../Pages/Login.css';
import med from '../../Products/med.jpg'; 
import Idex from "./Idex";
import Navbar from "./Navbar";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
      <>
      <Navbar />
    <div className="login">
      <div className="login__logo">
        <img
          src={med}
          alt="img"
        />
        <h1>PoltavaHealth</h1>
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
          <Idex />
  </>
  );
}

export default Login;
