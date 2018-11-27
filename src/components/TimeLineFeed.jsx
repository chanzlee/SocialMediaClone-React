import React from "react";
import PropTypes from "prop-types";

function TimeLineFeed(props) {

  function getDateString(date) {
    let resultString = "";
    let now = new Date().getTime();
    let t = now - new Date(date).getTime();
    let seconds = t / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    let weeks = days / 7;
    let months = days / 30;
    let years = days / 365;
    if (seconds < 59) {
      resultString = `${Math.round(seconds)} seconds ago`;
    } else if (minutes < 59) {
      resultString = `${Math.round(minutes)} minutes ago`;
    } else if (hours < 59) {
      resultString = `${Math.round(hours)} hours ago`;
    } else if (days < 7) {
      resultString = `${Math.round(days)} days ago`;
    } else if (weeks < 4) {
      resultString = `${Math.round(weeks)} weeks ago`;
    } else if (months < 4) {
      resultString = `${Math.round(months)} months ago`;
    } else if (years < 5) {
      resultString = `${Math.round(years)} years ago`;
    } else {
    //   let fullDate = new Date(this.dateCreated);
    //   resultString = `on ${fullDate.getUTCMonth() +
    //     1}/${fullDate.getUTCDate()}/${fullDate.getUTCFullYear()}`;
    }
    return "Created " + resultString;
  }

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
  const { userName, content, date, likes, dislikes } = props;
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
          <hr />
          {content} <hr />
          Likes: {likes} | Dislike: {dislikes} - {getDateString(date)}
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
