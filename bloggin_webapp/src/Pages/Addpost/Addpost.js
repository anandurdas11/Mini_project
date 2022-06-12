import React from 'react'
import { TextField ,Select ,InputLabel,FormControl,MenuItem } from "@material-ui/core";
function Addpost() {
  return (
    <div>
      <form>
        <TextField fullwidth variant="outlined" label="title"></TextField>
        <br></br>
        <br></br>
        <TextField variant="outlined" label="articlebody"></TextField>
        <br></br>
        <br></br>
        <FormControl fullWidth>
          {/*<InputLabel id="simple">Catgoery</InputLabel>*/}
        </FormControl>
        <Select labelId="simple" id="simple">
          
          <MenuItem value={"TECH"}>Technology</MenuItem>
          <MenuItem value={"TECH"}>Art</MenuItem>
         
        </Select>
      </form>
    </div>
  );
}

export default Addpost