import React from 'react';
import { AppBar, Toolbar} from '@material-ui/core';
import { HomeRounded,CloudUpload,Person,Add,NotificationsNone,Language,Settings} from '@material-ui/icons';
import "./Header.css"
const Header = () => {
    return (
      <div>
        <AppBar className="Appbar" position='inherit'>
          <Toolbar>
            <header>
              
              <img
                src="https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-1/512/blog-128.png"
                className="topAvatar"
                alt="icon"
              />
            </header>
            <div className="topRight">
              <div className="topbarIconContainer">
                <NotificationsNone />
                <span className="topIconBadge">2</span>
              </div>

              <div className="topbarIconContainer">
                <Language />
                <span className="topIconBadge">2</span>
              </div>

              <div className="topbarIconContainer">
                <Settings />
              </div>
             
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default Header;
