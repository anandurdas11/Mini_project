import React from 'react'
import "./topbar.css"
import { AppBar, Toolbar } from '@material-ui/core';

export default function topbar() {
  return (
    <div className="topbar">
      <AppBar>
       
        <div className="topbarwrapper">
          <Toolbar>
            <div className="topleft">
              top left
            </div>
            
          </Toolbar>
          <Toolbar>
            <div className="topright">
              top right
            </div>
          </Toolbar>
          

          
        </div>

      </AppBar>
    
    </div>
  )
}
