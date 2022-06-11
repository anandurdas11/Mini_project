import React from 'react'
import "./topbar.css"
import { AppBar, Toolbar } from '@material-ui/core';
import { AccountCircleRounded , HomeRounded,InputRounded,PostAddRounded } from '@material-ui/icons';

export default function topbar() {
  return (
    <div className="topbar">
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
                <HomeRounded />
              </ul>
              <ul>
                <InputRounded /></ul>
              <ul><PostAddRounded /></ul>
              
              <ul>
                <AccountCircleRounded />
                </ul>
            </div>
          </Toolbar>
          

          
        </div>

      </AppBar>
    
    </div>
  )
}
