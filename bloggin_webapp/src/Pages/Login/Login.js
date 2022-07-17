import React from 'react'
import { Button  } from "@material-ui/core"

import './Login3.css'
import { auth, provider } from '../../firebase';
import { signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useState } from "react";

function Login({ setIsAuth }) {
   const [isAuth, setisAuth] = useState(localStorage.getItem("isAuth"));
   const signUserout = () => {
     signOut(auth).then(() => {
       localStorage.clear();
       setisAuth(false);
       window.location.href = "/";
     });
  };
  
  const signwithgoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      
    });

  }
  return !isAuth ? (
    <div className="login">
      <div className="login__container">
        <img
          className="Logo"
          src="https://webstockreview.net/images/google-logo-png-2015-10.png"
          alt=""
        />
        <br></br>
        <br></br>
        <br></br>
        <Button color="primary" variant="contained" onClick={signwithgoogle}>
          Sign in with Google
        </Button>
      </div>
    </div>
  ) : (
    <div className="login">
      <div className="login__container">
        <img
          className="Logo"
          src="https://webstockreview.net/images/google-logo-png-2015-10.png"
          alt=""
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Button color="primary" variant="contained" onClick={signUserout}>
          Sign out
        </Button>
      </div>
    </div>
  );
  
}

export default Login