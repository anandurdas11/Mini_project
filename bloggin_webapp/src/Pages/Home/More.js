import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { MoreVertRounded } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


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
              <Link
                to="/Edit"
                style={{ color: "black", textDecoration: "none" }}
              >
                <MenuItem onClick={onclose}>Edit</MenuItem>
              </Link>
              <Link
                to="Delete"
                style={{ color: "black", textDecoration: "none" }}
              >
                  <MenuItem onClick={onclose}>delete</MenuItem>
              </Link>
            </Menu>
          </div>
        </>
      )}
    </div>
  );
}

export default Test;
