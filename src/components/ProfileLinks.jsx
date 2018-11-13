
import React from "react";

function ProfileLinks() {
    const  ProfileLinksStyle ={
        listStyleType: "none",
        display: "inline-block"

    }
    const  ProfileLinksStyle1 ={
    listStyleType: "none",
        display: "inline-block",
        padding: "15px",
        
    }

    return (
        <div>
            <ul style={ProfileLinksStyle}>
                <li style={ProfileLinksStyle1}>TWEETS</li>
                <li style={ProfileLinksStyle1}>FOLLOWING</li>
                <li style={ProfileLinksStyle1}>FOLLOWERS</li>
            </ul>

        </div>
    );
}


export default ProfileLinks;
