
import React from "react";
import PropTypes from "prop-types";

function ProfileName(props) {
    const ProfileNameStyle={
       textAlign: "right",
        marginRight: "50px",
    }
    return (
        <div>
            <h3 style={ProfileNameStyle}>{props.name}</h3>

        </div>
    );
}


ProfileName.propTypes = {
    name: PropTypes.string.isRequired,
};


export default ProfileName;
