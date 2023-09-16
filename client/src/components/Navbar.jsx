import React, { useContext, useEffect, useRef, useState } from 'react'
import {gsap} from "gsap"
import { ScrollTrigger } from 'gsap/all';
import {useNavigate} from "react-router-dom";

const navAnimation = ()=>{
  let tl = gsap.timeline();
    tl.to(".navItems",{height:0},0.1)
    .to("#menuHead",{height:"auto",overflow:"hidden"},0.01);

  return tl;
}

export const scrollAnimation = (showMenu,setShowMenu)=>{  

  let tl = navAnimation();
  tl.play();
  tl.call(setShowMenu(false));
  return tl;

  
  
  // ScrollTrigger.create({
  //   animation:tl,
  //   trigger:"#hero",
  //     scroller:"#main",
  //     start:"bottom 15%",
  //     end:"top -3%",
  //     toggleActions: `restart none restart none`,
  //     // onEnter:()=>{
  //     //   if(showMenu)tl.play();
  //     //   setShowMenu(false);
  //     // },
  //     // onEnterBack:()=>{
  //     //   if(showMenu)tl.play();
  //     //   setShowMenu(false);
  //     // }
  //   }
  // );

  

}

function Navbar({showMenu,setShowMenu,mobile,toggleMenu,setText,id}) {

  const navigate = useNavigate();
  const connectRef = useRef();

  const navigateHandler = (path)=>{
    navigate(path);
    
  }

  const showConnectBox = () => {

    const ele = document.getElementsByClassName("connect-card")[0];

    
    ele.classList.add("connect-box-animation");
  
  }
  
  const animatedHide = (event)=>{
    if(window.innerWidth>1400)
    {
      gsap.to("#menuHead",0,{height:0,overflow:"hidden"},0.1);
      gsap.to(".navItems",{height:"auto"});

      setShowMenu(true);
      
    }
    else{
      if(window.innerWidth<1400){
        let tl = gsap.timeline();
        tl.timeScale(2.5);
        tl.to(".sideContainer",{height:"100%"})
          .to("#mobileName",{height:"auto",overflow:"none"},">0")
          .to(".mobileSkills",{height:"auto",overflow:"none"},">0")
          .to("#mobilemenuHead",{height:"auto",overflow:"none"},">0")
          .to(".mobileFooter",{height:"auto"},">0")
      }
     
    }
  }
  
  
  return (
    <nav className='outer-nav' data-scroll data-scroll-sticky data-scroll-target="#main">
    <div id={id}>
        <div id="Name" onClick={()=>navigateHandler("/")}><a>I&S</a></div>
        <div className="animatedClass">
        {<div className='navItems' style={{height:0,overflow:"hidden"}}>
            <ul className='skill_list'>
              <li className="my_items js-work-link"  onClick={()=>navigateHandler('/skills')}>Skills<span className='underline'></span></li>
              <li className="my_items js-work-link" onClick={()=>navigateHandler('/experience')}>Experience<span className='underline'></span></li>
              <li className="my_items js-work-link" onClick={()=>navigateHandler('/projects')}>Work<span className='underline'></span></li>
              <li ref = {connectRef} className="my_items js-work-link" onClick={()=>showConnectBox()}>Connect<span className='underline'></span></li>
            </ul>
          </div>
        }

        {
          <div id="menu" onClick={(event)=>animatedHide(event)}>
            <h4 id="menuHead" className="js-work-link">Menu+<span className='underline'></span></h4>
          </div>
        }
        </div>
      </div>

    </nav>
  )
}
export default Navbar;

