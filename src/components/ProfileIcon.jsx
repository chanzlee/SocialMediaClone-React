
import React from "react";

function ProfileIcon() {
    const headImgs = {
        width: "120px",
        height: "120px",
        background:"lightblue",
        border: "solid white 1px",
        borderRadius: "25px"

        

      }

    return (
        <div style={headImgs}>
            <img style={headImgs} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJSSURBVGhD7dlLqE1RHMfxw8BAyrMYuIWkkIiSMmHCQMxEEZGkKDPJjMir1DWQDMgj8kgyUgYmioGiRBko5G1A5C18f+nUbvdzzl4b97/U/tWnTufc1vntu/fZa511Wk2a/F8ZjMXYjdO4jAvYj4Xoj6wzDAfwCT86uA4dbJaZiMdwxZ2HOIhpyCZD8ACucDdfsQZZZBdcyaq+YRbC8wSuYIrzCM0UuGKp3qAfwrIMrlgdYxCW9XCl6tDZDcsmuFJ1hB7IarhSdYxGWBbAlUr1GaFLl0lwxVJp2RIa/RffwZVLsRPhuQJXLsU8hGYUnsGVSxF+RjbAFUv1FKFZB1cs1SOEZjJcsVRnEZ6TcOWq+oCZCI9uwWfgSnbzHWORTdbCFe3mFrLKcLyHK9vJDmSX7XBlf0cHPhLZRVs8r+FKO3uQbXrhSpd9gfbBss0quOJld5B1lsMVL7uHrLMPrniZJkEtOLPNRbjizmxklUGY8+thay40W7viRVehfSzd6eYjNCOwGS9QnBOOwpVv+4gZULZBz13DUgxAn2UqDkOFigWPQVEZPS6+1vYK7W+D4/EWxdefQ7P9P91RmY5LKL5x2Ra0o41pTXr6secItJk3FIrO3l24MUS79IfQg7+WgdCgVa59OY5OSw9tIVX9LUV3N30L/eOMw224N+lEBc5hI5ZgJbQWuwn3992cQu3Pj1a09+EGjqDLs1Z0bbsBIy1CUnRnqvqZ6Es3kJS9cAPlYAIqR3uxbpAc6MZROS/hBsnBVlTOCWhnJEcr0KRJk8pptX4CVzktzrMqM5AAAAAASUVORK5CYII="></img>
        </div>
    );
}


export default ProfileIcon;
