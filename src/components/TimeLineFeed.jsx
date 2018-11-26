import React from "react";
import PropTypes from "prop-types";

function TimeLineFeed(props) {

    const feedStyle = {
        paddingTop: "3%",
        width: "100%",
        height: "auto",
        border: "1px grey solid",
        wordWrap: "break-word"
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
                    {props.userName}
                </div>
                <div >
                    {props.content} <br></br>
                    Likes: {props.likes} | Dislike: {props.dislikes} -  {props.date}
                </div>
                <div>
                    <button onClick={props.onLikeClick}>
                    Like
                    </button>
                </div>
            </div>
        </div>
    );
}

TimeLineFeed.propTypes = {
    userName: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number
}


export default TimeLineFeed;