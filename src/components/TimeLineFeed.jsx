import React from "react";

function TimeLineFeed() {

    const feedStyle = {
        paddingTop: "3%",
        height: "95px",
        border: "1px grey solid"
    }
    

    const imgStyle = {
        background: "white",
        marginTop: "10px"
    }

    const titleStyle = {
        fontWeight: "Bold"
    }
    const descStyle = {

    }

    return (
        <div style={feedStyle}>
            <div className="col-3">
            <img style={imgStyle}src="https://img.icons8.com/ios/50/27ae60/panda-filled.png"></img>

            </div>
            <div className="col-9" style={descStyle}>
                <div style={titleStyle}>
                    Lorem ipsum
                </div>
                <div >
                    Lorem Ipsum dolor sit amet, consectectur adipiscing elit. Nullam.
            </div>
            </div>
        </div>
    );
}


export default TimeLineFeed;