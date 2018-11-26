
import React from "react";
import PropTypes from "prop-types";

function ProfileName(props) {
    const ProfileNameStyle={
       textAlign: "right",
        marginRight: "50px",
        float: "right",
        fontSize: "22pt"
    }

    return (
        <div>
            {/* <h3 style={ProfileNameStyle}>{props.currentProfile }</h3> */}
            {/* <h4>{sample()}</h4> */}
            <select style={ProfileNameStyle} onChange={props.changeCurrentProfile}>
            {props.masterProfileList.map((name, index) => <option key={index}>{name}</option>)}
            </select>
        </div>
    );
}


ProfileName.propTypes = {
    currentProfile: PropTypes.string.isRequired,
};


export default ProfileName;
