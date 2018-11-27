import React from 'react';

function Friend(props) {
    const styles = {
      fontSize: "14px",
      display: "block",
      margin: "15px 5px",
      color: "#444"
    }
    const picStyles = {
      backgroundColor: props.color,
      width: "50px",
      height: "50px",
      float: "left",
      marginRight: "10px"
    }
    return (
      <div style={styles}>
        <figure style={picStyles}>
          <img src="https://img.icons8.com/ios/50/000000/user-filled.png"/>
        </figure>
        <div>
          <p><strong>{props.name}</strong></p>
        </div>
      </div>
    );
  }

  export default Friend;