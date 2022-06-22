import React from 'react'
import "./Addpost.css"
import { TextField,Button } from "@material-ui/core";
import { postrefernce } from '../../firebasecollection';
import { addDoc } from 'firebase/firestore';
import { useState } from 'react';
function Addpost() {
  const [Title, setTitle] = useState("");
  const [username, setusername] = useState("");
  const [Content, setContent] = useState("");
   function handleSubmit(e) {
     e.preventDefault();
     if (Title === "") {
       return;
     }
     else if (username === "") {
       return;
     }
     else if (Content === "") {
       return;
     }
     //const collecref = collection(db, 'movies');
     addDoc(postrefernce,{ username , Title, Content})
       .then((response) => {
         console.log(response);
       })
       .catch((error) => {
         console.log(error);
       });
      
   }
  return (
    <div className="createpost">
      <h1>Create Post here </h1>
      <form onSubmit={handleSubmit}> 
        <TextField
          fullwidth
          variant="outlined"
          type="text"
          label="Username"
          value={username}
          onChange={e => setusername(e.target.value)}
          style={{ width: "40%", color: "black", backgroundColor: "white" }}
        ></TextField>
        <br></br>
        <br></br>
        <TextField
          type="text"
          fullwidth
          variant="outlined"
          label="title"
          style={{ width: "40%", color: "black", backgroundColor: "white" }}
          value={Title}
          onChange={e => setTitle(e.target.value)}
        ></ TextField>
        <br></br>
        <br></br>
        <TextField
          variant="outlined"
          label="articlebody"
          value={Content}
          onChange={e => setContent(e.target.value)}
          multiline
          type='text'

          rows={20}
          rowsMax={100}
          style={{ width: "40%", color: "black", backgroundColor: "white" }}
        ></TextField>
        <br></br>
        <br></br>
        <Button  type="submit" color="primary" variant="contained">
          Publish
        </Button>
        <br></br>
      </form>
      <br></br>
    </div>
  );
}

export default Addpost