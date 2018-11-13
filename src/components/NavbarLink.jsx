import React from "react";
import PropTypes from "prop-types";

function NavbarLink(){
    const navLinkStyle ={
        listStyleType: "none",
        display:"inline-block"
    }
    const linkStyle ={
        listStyleType: "none",
        display:"inline-block",
        padding:"15px",
        border:"solid lightgray 1px"
        
    
    }

  return (
    <ul style={navLinkStyle}>
        <li style={linkStyle}><a href="#">Home</a></li>
        <li style={linkStyle}> <a href="#">Notifications</a></li>
        <li style={linkStyle}> <a href="#">Messages</a></li>
    </ul>
  );
}

NavbarLink.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default NavbarLink;
