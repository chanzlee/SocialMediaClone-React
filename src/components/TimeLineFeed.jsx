import React from "react";

function TimeLineFeed() {

    const feedStyle = {
        paddingTop: "3%",
        height: "95px",
        border: "1px grey solid"
    }
    
    const postStyle = {
    }

    const imgStyle = {
        background: "white",
    }

    const titleStyle = {
        fontWeight: "Bold"
    }
    const descStyle = {

    }

    return (
        <div style={feedStyle} className="row">
            <div style={postStyle} className="col-3">
                <img style={imgStyle} src="data:image/png;base64,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"></img>
            </div>
            <div className="col-9">
                <div style={titleStyle}>
                    Lorem ipsum
                </div>
                <div style={descStyle}>
                    Lorem Ipsum dolor sit amet, consectectur adipiscing elit. Nullam.
            </div>
            </div>
        </div>
    );
}


export default TimeLineFeed;