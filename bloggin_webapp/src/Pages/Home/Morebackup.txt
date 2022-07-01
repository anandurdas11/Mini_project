import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { MoreVertRounded } from "@material-ui/icons";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";


function Test() {
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
    const docref = doc(db, 'Post', id);
    deleteDoc(docref).then(() => alert("deleted")).catch(error => console.log(error.message));
  }
  return (
    <div>
      {!isAuth ? (
        <IconButton onClick={handleunauth}>
          <MoreVertRounded style={{ color: "black", marginRight: "3%" }} />
        </IconButton>
      ) : (
        <>
          <IconButton onClick={openMenu}>
            <MoreVertRounded
              style={{ color: "black", marginRight: "auto", display: "flex" }}
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
              
             
                  <MenuItem onClick={onclose}>delete</MenuItem>
              
            </Menu>
          </div>
        </>
      )}
    </div>
  );
}

export default Test;
