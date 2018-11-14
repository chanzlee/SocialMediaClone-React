import React from "react";
import Profile from "./Profile";
import Description from "./Description";
import TimeLine from "./TimeLine";
import TimeLinePost from "./TimeLinePost";

function Content() {

  const styles = {
    marginTop: "3%"
  }

  const row = {
    display: 'inline-block'
  }

  return (

    <div style={styles}>
      <div className="row">
        <div className="col-4">
          <Profile />
          <div style={styles}>
            <Description />
          </div>
        </div>
        <div className="col-4">
          <TimeLine/>
        </div>
        <div className="col-4">
          Feed on the right
        </div>
      </div>
    </div>
  );
}

export default Content;
