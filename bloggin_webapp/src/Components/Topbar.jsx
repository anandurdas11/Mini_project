import React from 'react'
import "./topbar.css"
import { AppBar, Toolbar, Tooltip, IconButton } from '@material-ui/core';
import { AccountCircleRounded, HomeRounded, PostAddRounded, InputRounded, Refresh } from '@material-ui/icons';
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
              <ul>
                <Tooltip title="Home">
                  <Link to="/">
                    <IconButton>
                      <HomeRounded style={{ color: "black" }}></HomeRounded>
                    </IconButton>
                    
                  </Link>
                </Tooltip>
               
              </ul>
              {!isAuth ? (<ul>
                <Tooltip title="Login">
                  <Link to="/Login">
                    <IconButton>
                      <InputRounded style={{ color: "black" }} />
                    </IconButton>
                   
                  </Link>
                </Tooltip>
               

              </ul>) : (
                  <><ul >
                    <Tooltip title="Login">
                      <Link to="/Login">
                        <IconButton>
                          <InputRounded style={{ color: "black" }} />
                        </IconButton>

                      </Link>
                    </Tooltip>
                    
                    

                  </ul><ul className='iconbadge'>
                      <Tooltip title="Add article">
                        <Link to="/Addpost">
                          <IconButton>
                            <PostAddRounded style={{ color: "black" }}></PostAddRounded>
                          </IconButton>
                        
                        </Link>
                      </Tooltip>
                      


                    </ul></>
              )}
            
            
              
              <ul >
                <Tooltip title="Account">
                  <Link to="/Addaccount">
                    <IconButton>
                        <AccountCircleRounded style={{ color: "black" }} />
                    </IconButton>
                  
                  </Link>
                </Tooltip>
               
                
              </ul>
              <ul >
                <Tooltip title="refresh" >
                  <IconButton onClick={refreshpage}><Refresh style={{ color: "black" }}></Refresh></IconButton>
                  
                </Tooltip>
               

              </ul>
            </div>
          </Toolbar>
          

          
        </div>

      </AppBar>
    
    </div>
  )
}
