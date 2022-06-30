import React from 'react'
import {  Avatar, Card ,IconButton,TextField, Toolbar } from "@material-ui/core"
import { SendRounded } from '@material-ui/icons';
import './Postlist.css'
import { useState } from 'react';
import { postrefernce } from '../../firebasecollection';

import {  onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import More from './More';
function Home() {
   const [posts, setposts] = useState([]);
   useEffect(() => {
     const unsubcribe = onSnapshot(postrefernce, (snapshot) => {
       setposts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
     });
     return () => {
       unsubcribe();
     };
   }, []);
  
 
  return (
    <div>
      <body>
        <div className="Post">
          <div className="Postemplate">
            {posts.map((post) => (
              <ul key={post.id}>
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
                    <div className="Name">{post.data.author.name}</div>
                    <div className="More">
                      <More />
                    </div>
                  </Toolbar>
                  <Card className="content" style={{ overflow: "auto" }}>
                    <h3 style={{ marginLeft: "2%" }}>{post.data.Title}</h3>
                    <p style={{ marginLeft: "2%" }}>{post.data.Content}</p>
                  </Card>
                </Card>
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
                      <IconButton>
                        <SendRounded style={{ color: "black" }}></SendRounded>
                      </IconButton>
                    </div>
                    <br></br>
                  </div>
                </div>
              </ul>
            ))}
          </div>
        </div>
        <br></br>
      </body>
    </div>
  );
}

export default Home