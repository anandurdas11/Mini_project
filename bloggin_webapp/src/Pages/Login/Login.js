import React from 'react'
import { Button } from "@material-ui/core"
import './Login.css'
import { auth, provider } from '../../firebase';
import { signInWithPopup } from "firebase/auth";
import { Redirect } from "react-router-dom";

function Login({setIsAuth}) {
  const signwithgoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      <Redirect to='/' />
    });

  }
  return (
    <div className='login'>
      <Button color='primary' variant='contained' onClick={signwithgoogle}>Sign in with Google</Button>
    </div>
  )
}

export default Login