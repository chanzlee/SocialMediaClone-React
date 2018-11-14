import React from "react";

function TimeLinePost() {
    const otherStyle = {
        height: "100px",
        border: "1px grey solid",
        backgroundColor: "lightblue",
        width: "100%",
        margin: "0"
    }
    const inputStyle = {
       display: "block",
       marginLeft: "80px",
       paddingTop: "20px",
       marginTop: "30px",
       width: "75%",
       textAlign: "center",
       border: "1px solid blue"
    }

    return (
        <div style={otherStyle}>
            <input type="text" style={inputStyle} placeholder="What is Happening?" ></input>

        </div>
    );
}


export default TimeLinePost;