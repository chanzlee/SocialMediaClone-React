import React from "react";
import Profile from "./Profile";
import Description from "./Description";
import TimeLine from "./TimeLine";
import TimeLinePost from "./TimeLinePost";
import FriendsBar from './FriendsBar';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterProfileList: ["ChanTheMan", "Bee-Ryan", "Skynet", "EyeKillU"],
      currentProfile: "WhiteDavid"
    };
  }

  changeCurrentProfile(event) {
    this.setState({ currentProfile: event.target.value });
  }

  render() {
    const styles = {
      marginTop: "3%"
    };

    const row = {
      display: "inline-block"
    };
    return (
      <div style={styles}>
        <div className="row">
          <div className="col-4">
            <Profile
              masterProfileList={this.state.masterProfileList}
              currentProfile={this.state.currentProfile}
              changeCurrentProfile={event => this.changeCurrentProfile(event)}
            />
            <div style={styles}>
              <Description />
            </div>
          </div>
          <div className="col-4">
            <TimeLine currentProfile={this.state.currentProfile} />
          </div>
          <div className="col-4">
          <FriendsBar/>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
