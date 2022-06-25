import { IconButton, Menu, MenuItem } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
function Test() {
	const [anchorEl, setanchorEl] = useState(null);
	const openMenu = (event) => {
		setanchorEl(event.currentTarget);
	}
	const onclose = () => {
		setanchorEl(null);
	}
  return (
	  <div>
		  <IconButton
		  	onClick={openMenu}>
			  click here
		  </IconButton>
		  <Menu
			  anchorEl={anchorEl}
			  keepMounted
			  open={Boolean(anchorEl)}
			  onClose={onclose}
		  >
			  <MenuItem onClick={onclose}>Hello</MenuItem>
			  <MenuItem onClick={onclose}>hi</MenuItem>
			  <MenuItem onClick={onclose}>bye</MenuItem>
		  </Menu>
	</div>
  )
}

export default Test