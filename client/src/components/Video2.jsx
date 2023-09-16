import React from 'react'
import hibye from '../components/hibye.mp4'
function Video2() {
  return (
    <div>
        <video src={hibye} autoPlay loop muted height={"300px"} width={"450px"} className='hibye'></video>
    </div>
  )
}

export default Video2;