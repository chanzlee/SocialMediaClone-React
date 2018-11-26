import React from "react";
import PropTypes from "prop-types";

function TimeLineFeed(props) {
  const feedStyle = {
    paddingTop: "3%",
    width: "100%",
    height: "auto",
    border: "1px grey solid",
    wordWrap: "break-word"
  };

  const imgStyle = {
    background: "white",
    marginTop: "10px"
  };

  const titleStyle = {
    fontWeight: "Bold"
  };
  const descStyle = {};
  const { userName, content, date, likes, dislikes} = props;
  return (
    <div style={feedStyle}>
      <style jsx>{`
        .deletebtn {
        //   display: block;
        }
      `}</style>
      <div className="col-3">
        <img
          style={imgStyle}
          src="https://img.icons8.com/ios/50/27ae60/panda-filled.png"
        />
      </div>
      <div className="col-9" style={descStyle}>
        <div style={titleStyle}>{userName}</div>
        <div>
            <hr/>
          {content} <hr />
          Likes: {likes} | Dislike: {dislikes} - {date}
        </div>
        <div>
          <button
            className="btn btn-primary btn-sm mr-1"
            onClick={props.onLikeClick}
          >
            Like
          </button>
          <button
            className="btn btn-primary btn-sm mr-1"
            onClick={props.onDislikeClick}
          >
            DisLike
          </button>
          <br />
          <button
            className="btn btn-warning btn-sm mr-1"
            onClick={props.showEdit}
          >
            Edit
          </button>
          <button
            className="deletebtn btn btn-danger btn-sm"
            onClick={props.onDelete}
          >
            Delete
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
  dislikes: PropTypes.number,
  onLikeClick: PropTypes.func,
  onDislikeClick: PropTypes.func
};

export default TimeLineFeed;
