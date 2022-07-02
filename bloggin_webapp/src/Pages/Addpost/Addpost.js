import React from 'react'
import "./Addpost.css"
import { TextField,Button } from "@material-ui/core";
import { postrefernce } from '../../firebasecollection';
import { addDoc } from 'firebase/firestore';
import { useState } from 'react';
import { auth } from '../../firebase';

function Addpost() {
  const [Title, setTitle] = useState("");
  const username = auth.currentUser.displayName;
  const photo = auth.currentUser.photoURL;
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
     addDoc(postrefernce, { author :{ name: username , id:auth.currentUser.uid , photoUrl: photo} , Title, Content})
       .then((response) => {
         console.log(response);
       })
       .catch((error) => {
         console.log(error);
       });
      
   }
  return (
    <div className="createpost">
      <h1>Create blog here </h1>
      <form onSubmit={handleSubmit}> 
       
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