import React from "react";

function TimeLinePost() {
    const  postStyle ={
        height: "100px",
        border: "1px grey solid",
        backgroundColor: "lightblue"
    }
    const  inputStyle ={
        display: "block",
        marginLeft: "80px",
        paddingTop:"20px",
        marginTop: "30px",
        width: "75%",
        textAlign: "center",
        border: "1px solid blue"
    }

    return (
        <div style={postStyle}>
            <input style={inputStyle} value="What is Happening?"></input>

        </div>
    );
}


export default TimeLinePost;