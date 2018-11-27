import React from "react";
import PropTypes from "prop-types";

function TimeLinePost(props) {
  let _content = null;
  const otherStyle = {
    height: "100px",
    border: "1px grey solid",
    backgroundColor: "lightblue",
    width: "100%",
    margin: "0"
  };
  const inputStyle = {
    //    display: "block",
    marginLeft: "30px",
    paddingTop: "20px",
    marginTop: "30px",
    width: "75%",
    textAlign: "center",
    border: "1px solid blue"
  };

  function handleNewFeedSubmission(event) {
    event.preventDefault();
    props.addPost({
      content: _content.value,
      date: new Date(),
      likes: 0,
      dislikes: 0
    });
    _content.value = "";
  }


  return (
    <div style={otherStyle}>
      <form onSubmit={handleNewFeedSubmission}>
        <input
          type="text"
          style={inputStyle}
          id="content"
          placeholder="What is Happening?"
          ref={input => {
            _content = input;
          }}
        />
        <button className="btn btn-primary" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}

TimeLinePost.propTypes = {
    addPost: PropTypes.func
};



export default TimeLinePost;
