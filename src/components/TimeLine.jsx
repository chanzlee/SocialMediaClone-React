
import React from "react";
import TimeLinePost from "./TimeLinePost";
import TimeLineFeed from "./TimeLineFeed";

function TimeLine() {
    const  TimeLineStyle ={
        listStyleType: "none",
        display: "inline-block"

    }
    const  TimeLineStyle1 ={
    listStyleType: "none",
        display: "inline-block",
        padding: "15px",
        
    }

    return (
        <div>
            <div>
                <TimeLinePost/>
            </div>

            <div>

                <TimeLineFeed/>
                <TimeLineFeed/>
                <TimeLineFeed/>
                <TimeLineFeed/>
                <TimeLineFeed/>
                <TimeLineFeed/>
            </div>
           

        </div>
    );
}


export default TimeLine;