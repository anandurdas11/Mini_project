import React from 'react'
import "./topbar.css"
import { AppBar, Toolbar } from '@material-ui/core';
import { AccountCircleRounded, HomeRounded, InputRounded, PostAddRounded } from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function topbar() {
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
              <ul className='iconbadge'>
                <Link to="/Login">
                  <InputRounded style={{ color: "black" }}></InputRounded>
                </Link>
                
                </ul>
              <ul className='iconbadge'>
                <Link to="/Addpost">
                  <PostAddRounded style={{ color: "black" }}></PostAddRounded>
                </Link>
                
                
              </ul>
              
              <ul className='iconbadge'>
                <Link to="/Addaccount">
                  <AccountCircleRounded style={{ color: "black" }} />
                </Link>
                
                </ul>
            </div>
          </Toolbar>
          

          
        </div>

      </AppBar>
    
    </div>
  )
}
