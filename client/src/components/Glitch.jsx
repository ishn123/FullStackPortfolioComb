import React from 'react'
import './Gl.css'

import TypingAnimation from './TypingAnimation';
const Glitch = () => {
  return (
    <div>
    <div class="glitch-wrapper">
    <div class="glitch-noise" data-glitch="404">404</div>
    <TypingAnimation></TypingAnimation>
 </div>
    </div>
  )
}

export default Glitch
