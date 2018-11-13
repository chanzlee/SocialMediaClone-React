import React from "react";
import PropTypes from "prop-types";

function NavbarSearch(){
   
    const searchBarStyle ={
        listStyleType: "none",
        display:"inline-block",
        height:"35px",
        width:"150px",
        border:"solid lightblue 2px",
        borderRadius: "25px",
        fontSize: "15px"
    }

  return (
      <form className="seach">
      <input style={searchBarStyle} type="text"   placeholder="Search..."></input>
      </form>
  
  );
}

NavbarSearch.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default NavbarSearch;
