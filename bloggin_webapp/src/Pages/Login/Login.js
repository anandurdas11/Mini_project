import React from 'react'
import { Button ,Card } from "@material-ui/core"
import './Login.css'
import { auth, provider } from '../../firebase';
import { signInWithPopup } from "firebase/auth";
import { Redirect } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useState } from "react";

function Login({ setIsAuth }) {
   const [isAuth, setisAuth] = useState(localStorage.getItem("isAuth"));
   const signUserout = () => {
     signOut(auth).then(() => {
       localStorage.clear();
       setisAuth(false);
       window.location.pathname = "/Login";
     });
  };
  
  const signwithgoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      <Redirect to='/' />
    });

  }
  return !isAuth ? (
    <Card className="Logbox">
      <div className="login">
        <Button color="primary" variant="contained" onClick={signwithgoogle}>
          Sign in with Google
        </Button>
      </div>
    </Card>
  ) : (
    <Card className="Logbox">
      <div className="login">
        <Button color="primary" variant="contained" onClick={signUserout}>
          Sign out
        </Button>
      </div>
    </Card>
  );
  
}

export default Login