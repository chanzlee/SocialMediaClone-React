import React from "react";
import Friend from "./Friend";

class FriendsBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterUserList: ["ChanTheMan", "Bee-Ryan", "Skynet", "EyeKillU"]
    };
  }
  render() {
    const styles = {
      border: "2px solid #c6c6c6",
      padding: "10px",
      color: "#444"
    };
    return (
      <div style={styles}>
        <h5>Friends</h5>
        {this.state.masterUserList.map((user, index) => (
          <div>
            <Friend color="lightblue" name={user} key={index} />
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default FriendsBar;
