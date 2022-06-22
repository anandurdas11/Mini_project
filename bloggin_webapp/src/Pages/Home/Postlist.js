import React from 'react'
import {  Avatar, Card ,TextField, Toolbar } from "@material-ui/core"
import { SendRounded } from '@material-ui/icons';
import './Postlist.css'
import Moreoptions from './Moreoptions';
import { useState } from 'react';
import { postrefernce } from '../../firebasecollection';

import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
function Home() {
  
 
  return (
    <div>
    
      <body>
        <div className="Post">
          <div className="Postemplate">
            <Card
              className="Postcard"
              style={{ borderRadius: "20px 20px 0px 0px " }}
            >
              <Toolbar className="toppostbar">
                <Avatar
                  src="https://lh3.googleusercontent.com/a-/AOh14GjIq7jWeduBBxCLuIj3uG_ct5fx_F7S0ZKb4CdT=s96-c-rg-br100"
                  className="topavatar"
                  alt="icon"
                />
                <div className="Name">jdslkjflk</div>
                <div className="More">
                  <Moreoptions />
                </div>
              </Toolbar>
              <div className="content">
                <h3></h3>
                <p></p>
              </div>
            </Card>
          </div>
          <div className="comment">
            <div className="addcomment">
              <TextField
                label="Add comment"
                variant="standard"
                size="small"
                fullWidth
              ></TextField>
              <br></br>
              <div className="send">
                <SendRounded></SendRounded>
              </div>
              <br></br>
            </div>
          </div>
        </div>
        <br></br>
      </body>
    </div>
  );
}

export default Home