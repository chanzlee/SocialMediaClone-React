import React from "react";
import PropTypes from "prop-types";

function TimeLineEditPost(props) {
  let _content = null;
  const feedStyle = {
    paddingTop: "3%",
    width: "100%",
    height: "auto",
    border: "1px grey solid",
    wordWrap: "break-word"
  };

  function handleEdit(event) {
    event.preventDefault();
    props.editContent(_content.value);
      _content.value = "";  
  }

  const imgStyle = {
    background: "white",
    marginTop: "10px"
  };

  const titleStyle = {
    fontWeight: "Bold"
  };
  const descStyle = {};
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
        Edit Post:
        <form onSubmit={handleEdit}>
          <input
            type="text"
            id="content"
            placeholder={props.postToEdit.content}
            ref={input => {
              _content = input;
            }}
          />

          <button className="btn btn-success btn-sm mr-1" type="submit">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

TimeLineEditPost.propTypes = {
  userName: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  onLikeClick: PropTypes.func,
  onDislikeClick: PropTypes.func
};

export default TimeLineEditPost;
