import React from "react";
import PropTypes from "prop-types";

function NavbarSearch() {

    const searchBarStyle = {
        listStyleType: "none",
        display: "inline-block",
        height: "35px",
        width: "150px",
        border: "solid lightblue 2px",
        borderRadius: "25px",
        fontSize: "15px"
    }

    const tweetStyle = {
        display: "inline-block",
        //height:"35px",
        width: "65px",
        border: "solid lightblue 2px",
        borderRadius: "25px",
        fontSize: "15px",
        padding: "6px",
        textAlign: "center"
    }

    const formStyle = {
        float: "right"
    }

    return (
        <div>
            <form style={formStyle} className="search">
                <input style={searchBarStyle} type="text" placeholder="  Search..."></input>
                &nbsp;&nbsp;&nbsp;
                <div style={tweetStyle}> Tweet</div>
            </form>

        </div>


    );
}

export default NavbarSearch;
