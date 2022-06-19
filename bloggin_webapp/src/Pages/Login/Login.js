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
      <div className="Logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          height={"90px"}
          alt="logo"
        />
      </div>
      <div className="login">
        <div className="Loginbutton">
          <Button color="primary" variant="contained" onClick={signwithgoogle}>
            Sign in with Google
          </Button>
        </div>
      </div>
    </Card>
  ) : (
    <Card className="Logbox">
      <div className="Logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          height={"90px"}
          alt="logo"
        />
      </div>
      <div className="login">
        <div className="Loginoutbutton">
          <Button color="primary" variant="contained" onClick={signUserout}>
            Sign out
          </Button>
        </div>
      </div>
    </Card>
  );
  
}

export default Login