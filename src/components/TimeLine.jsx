
import React from "react";
import TimeLinePost from "./TimeLinePost";
import TimeLineFeed from "./TimeLineFeed";

function TimeLine() {


    return (
        <div>
                <TimeLinePost/>

            <div className="test">
                <TimeLineFeed/>
                {/* <TimeLineFeed/>
                <TimeLineFeed/>
                <TimeLineFeed/>
                <TimeLineFeed/>
                <TimeLineFeed/> */}
            </div>
        </div>
       
    );
}


export default TimeLine;