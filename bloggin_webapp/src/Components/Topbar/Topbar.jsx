import React from 'react'
import { AppBar, Toolbar } from "@material-ui/core";
import { HomeRounded} from "@material-ui/icons";
import Blog from '../Blogpage/Blog';
function Topbar() {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <div>
                     
                          <HomeRounded />
                      
                      
                 </div>
              </Toolbar>
      </AppBar>
      
    </div>
  )
}

export default Topbar