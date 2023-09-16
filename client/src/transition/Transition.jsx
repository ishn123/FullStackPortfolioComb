import React from 'react';
import {motion} from 'framer-motion';
import "./style.css"
function Transition() {
  return (
    <div>
      <motion.div
className="slide-in"
initial={{scaleY:0}}
animate={{scaleY:0}}
exit={{scaleY:1}}
transition={{duration:1.1,ease:[0.22,1,0.36,1]}}
> <span className="tex">I&S</span></motion.div>
 
<motion.div
className="slide-out"
initial={{scaleY:1}}
animate={{scaleY:0}}
exit={{scaleY:0}}
transition={{duration:2.17,ease:[0.22,1,0.36,1.2]}}
></motion.div>
    </div>
  )
}

export default Transition;

