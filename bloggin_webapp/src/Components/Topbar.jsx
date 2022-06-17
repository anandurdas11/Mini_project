import React from 'react'
import "./topbar.css"
import { AppBar, Toolbar,Button } from '@material-ui/core';
import { AccountCircleRounded, HomeRounded, PostAddRounded,InputRounded, Refresh } from '@material-ui/icons';
//import { auth } from '../firebase';
//import { signOut } from 'firebase/auth';
//import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Topbar() {
  
  const isAuth = localStorage.getItem("isAuth");
 
  const refreshpage = () => {
    window.location.reload(false);
  }
  return (
    <div className="topbar" position="static">
      <AppBar>
       
        <div className="topbarwrapper">
          <Toolbar>
            <div className="topleft">
              <header>
                <img
                  src="https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-1/512/blog-128.png"
                  className="topavatar"
                  alt="icon"
                />
              </header>
            </div>
            
          </Toolbar>
          <Toolbar>
            <div className="topright">
              <ul className='iconbadge'>
                <Link to="/">
                  <HomeRounded style={{ color: "black" }}></HomeRounded>
                </Link>
              </ul>
              {!isAuth ? (<ul className='iconbadge'>
                <Link to="/Login">
                <InputRounded />
                </Link>

              </ul>) : (
                  <><ul className='iconbadge'>
                    <Link to="/Login">
                      <InputRounded />
                    </Link>
                    
                    

                  </ul><ul className='iconbadge'>
                      <Link to="/Addpost">
                        <PostAddRounded style={{ color: "black" }}></PostAddRounded>
                      </Link>


                    </ul></>
              )}
            
            
              
              <ul className='iconbadge'>
                <Link to="/Addaccount">
                  <AccountCircleRounded style={{ color: "black" }} />
                </Link>
                
              </ul>
              <ul className='iconbadge'>
               
                <Button onClick={refreshpage}><Refresh></Refresh></Button>

              </ul>
            </div>
          </Toolbar>
          

          
        </div>

      </AppBar>
    
    </div>
  )
}
