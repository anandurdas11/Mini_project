import React from 'react'
import { MoreVertRounded } from '@material-ui/icons';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { useState } from 'react';
import './Moreoptions.css'
const Moreoptions = () => {
    const [anchorElm, setAnchorElm] = useState(null);
    const [Open, setOpen] = useState(false);
    const handleClick = () => {
        setAnchorElm(null);
        setOpen(true);
    };
    const handleClose = (event) => {
        setAnchorElm(event.currentTarget);
        setOpen(false)
    };
  return (
    <div >
      <Button onClick={handleClick}>
        <MoreVertRounded />
      </Button>
      <div className='menu'>
        <Menu
          style={{
            marginBottom: "4%",
            marginTop: "40%",
            marginBlockStart: "-9%",
            marginInlineEnd:"auto",
            marginInline:"40%",
            marginLeft: "79%",
            display:"flex",
            alignContent: "space-between",
            width:"200px"
            
           
          }}
          anchorEl={anchorElm}
          onClose={handleClose}
          open={Open}
        >
          <MenuItem onClick={handleClose}>Edit</MenuItem>
          <MenuItem onClick={handleClose}>delete</MenuItem>
          <MenuItem onClick={handleClose}>Report</MenuItem>
        </Menu>
      </div>
    </div>
  );
}
export default Moreoptions;