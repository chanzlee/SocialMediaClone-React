import React from "react";
import ProfileIcon from "./ProfileIcon";
import ProfileLinks from "./ProfileLinks";
import PropTypes from "prop-types";
import ProfileName from "./ProfileName";

function Profile() {

  const profileStyle = {
    // background: "red",
    width: "33%",
    height: "400px",
    border: "grey solid 1px"
  }
  const profileTopStyle = {
    background: "lightblue",
    width: "100%",
    height: "300px",
    // border: "grey solid 1px"
  }

  const profileIcon = {
    display: "block",
    marginLeft: "30px",
    paddingTop:"220px"
  }



 
  return (
    <div style={profileStyle}>
     <div style= {profileTopStyle}> 
     <div style={profileIcon}><ProfileIcon /></div>
     <div></div>
     </div>
      <ProfileName
        name="Kellie A. Corrigan"  />
      <ProfileLinks />
    </div>
  );
}



export default Profile;
