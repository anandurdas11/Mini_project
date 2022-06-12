import React from 'react'
import "./Addpost.css"
import { TextField,Button } from "@material-ui/core";
function Addpost() {
  return (
    <div className="createpost">
      
        <h1>Create Post here </h1>
        <form>
          <TextField fullwidth variant="outlined" label="title"></TextField>
          <br></br>
          <br></br>
          <TextField
            variant="outlined"
            label="articlebody"
            multiline
            rows={30}
            rowsMax={100}
            style={{ width: "50%", height: "100%" }}
          ></TextField>
          <br></br>
          <br></br>
          <Button color="primary" variant="contained">Submit</Button>
          <br></br>
        </form>
        <br></br>
      
    </div>
  );
}

export default Addpost