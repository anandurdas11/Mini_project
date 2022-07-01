import React from 'react'
import {  Avatar, Card ,IconButton,TextField, Toolbar } from "@material-ui/core"
import { SendRounded } from '@material-ui/icons';
import './Postlist.css'
import { useState } from 'react';
import { postrefernce } from '../../firebasecollection';
import { MoreVertRounded } from '@material-ui/icons';
import {  onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';

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
   const isAuth = localStorage.getItem("isAuth");
   const [anchorEl, setanchorEl] = useState(null);
   const openMenu = (event) => {
     setanchorEl(event.currentTarget);
   };
   const onclose = () => {
     setanchorEl(null);
   };
   const handleunauth = () => {
     alert("you need to login for that");
   };
   function deletpost(id) {
     const docref = doc(db, "Post", id);
     
     deleteDoc(docref)
       .then(() => alert("deleted"))
       .catch((error) => console.log(error.message));
   }
  
 
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
                      <div>
                        {!isAuth ? (
                          <IconButton onClick={handleunauth}>
                            <MoreVertRounded
                              style={{ color: "black", marginRight: "3%" }}
                            />
                          </IconButton>
                        ) : (
                          <>
                            <IconButton onClick={openMenu}>
                              <MoreVertRounded
                                style={{
                                  color: "black",
                                  marginRight: "auto",
                                  display: "flex",
                                }}
                              />
                            </IconButton>
                            <div className="menu">
                              <Menu
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={onclose}
                              >
                                <MenuItem onClick={onclose}>Edit</MenuItem>

                                <MenuItem onClick={onclose}>
                                  <div onClick={() => deletpost(post.id)}>
                                    delete
                                  </div>
                                </MenuItem>
                              </Menu>
                            </div>
                          </>
                        )}
                      </div>
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