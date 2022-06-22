import React from 'react'
import { MoreVertRounded } from '@material-ui/icons';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { useState } from 'react';
import './Moreoptions.css'
const Moreoptions = () => {
    const isAuth = localStorage.getItem("isAuth");
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
  const handleunauth = () => {
    alert("you need to login for that");
  }
  return (
    <div>
      {!isAuth ? (
        <Button onClick={handleunauth} style={{ borderRadius: "400px" }}>
          <MoreVertRounded style={{ color: "black" }} />
        </Button>
      ) : (
        <>
          <Button onClick={handleClick} style={{ borderRadius: "400px" }}>
            <MoreVertRounded style={{ color: "black" }} />
          </Button>
          <div className="menu">
            <Menu
              style={{
                marginBottom: "4%",
                marginTop: "40%",
                marginBlockStart: "-9%",
                marginInlineEnd: "auto",
                marginInline: "40%",
                marginLeft: "79%",
                display: "flex",
                alignContent: "space-between",
                width: "200px",
              }}
              anchorEl={anchorElm}
              onClose={handleClose}
              open={Open}
            >
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>delete</MenuItem>
            </Menu>
          </div>
        </>
      )}
    </div>
  );
}
export default Moreoptions;