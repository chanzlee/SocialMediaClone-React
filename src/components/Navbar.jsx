import React from "react";
import NavbarLink from "./NavbarLink";
import NavbarSearch from "./NavbarSearch";


function Navbar() {

  const navbarStyle = {
    display: 'inline-block',
   // background: 'red',
    width: "100vh",
    overflow:"auto"
  }
  const link = {
    display: 'inline-block'
    // width: "50%"
  }

  const link2 = {
    display: 'inline-block',
    // width: "50%",
    float: "right",
    position: "absolute",
    right: "30px",
    top: "20px"
  }  


  return (

    <div style={navbarStyle}>
      <div className="row">
        <div className="col-4" style={link}>
          <NavbarLink />
        </div>
        <div className="col-4">

        </div>
        <div className="col-4" style={link2}>
          <NavbarSearch />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
