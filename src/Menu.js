import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton 
        aria-controls="simple-menu"
        aria-haspopup="true" variant="contained"
        onClick={handleClick}>
        <MoreVertIcon color="primary" style={{ fontSize: 50 } }/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => props.handleClick("artists")}>View Artists</MenuItem>
        <MenuItem onClick={() => props.handleClick("tracks")}>My Tracks</MenuItem>
        <MenuItem onClick={() => props.logOut()}>Logout</MenuItem>
      </Menu>
    </div>
  );
}