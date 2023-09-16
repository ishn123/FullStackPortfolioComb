import React from 'react'
import video from "../components/kpo.mp4";
function Video1() {
    return (
        <div className="three_3d">
            <video src={video} autoPlay loop muted height={"300px"} width={"450px"}></video>
        </div>
    )
}

export default Video1