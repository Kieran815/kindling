import React from "react";
import './Header.css';
import TinderLogo from './tinder-logo.png';

import IconButton from "@material-ui/core/IconButton";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from "@material-ui/icons/Forum"


function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>
      <img className="header_logo" src={TinderLogo} alt="site logo" />
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  )
}

export default Header;
