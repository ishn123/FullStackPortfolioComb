import React from 'react';
import './menu.css'
import video from "./jaal.mp4";
function MenuItem({ label, ingredients, videoSrc }) {
  return (
    <li className="menu__item">
      <a href="#" className={`menu__link menu__link--${label.toLowerCase()}`} aria-label={label}>
        <span aria-hidden="true">{ingredients}</span>
        <span>{label}</span>
        <figure className="menu__background">
          <video loop autoPlay muted>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </figure>
      </a>
    </li>
  );
}

function Menu() {
  return (
    <ul className="menu">
      <MenuItem
        label="Always growing, forever learning. "
        ingredients="Always growing, forever learning. "
        videoSrc={video}
      />
      
    </ul>
  );
}

export default Menu;
