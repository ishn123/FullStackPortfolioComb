import React, { useEffect, useState } from 'react'
import Transition from '../transition/Transition';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import LocomotiveScroll from 'locomotive-scroll';
import { IoChatbubbleEllipses } from "react-icons/io5";
import Footer from "../components/Footer";
import SideBar from '../components/Footer';
import { scrollAnimation } from '../components/Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import FrontendSkillsContainer from '../components/typeofskills/FrontendSkillsContainer';
import BackendSkillsContainer from '../components/typeofskills/BackendSkillsContainer';
import ProSkillsContainer from '../components/typeofskills/ProSkillsContainer';
import Exper from "../components/exp";
import "../components/styles/skill.css"
import IshanResume from "../Ishan.pdf";
import SanyamResume from "../sanyam_main_resume.pdf";
// gsap.registerPlugin(ScrollTrigger);
// let tl = gsap.timeline();
// tl.to(".content-header-skill",{
//   opacity:1,
//   transition: "all 0.7s ease-in-out"
// }).to(".content-header-skill",{marginLeft:"10px"},">0.25");
// const fadeInanimation = () => {
//   ScrollTrigger.create({
//     scroller:"#main",
//     trigger: ".skills-container",
//     start: "top 30%",
//     end: "center 30%",
//     markers: true,
//     toggleClass: "show-box",
//     animation:tl,
//     toggleActions:"play none none reverse",
//   })
// }
function Experience() {
  const navigate = useNavigate();

  const navigateHandler = (path) => {
    navigate(path);
  }

  const [dateState, setDateState] = useState(new Date());
  const [showMenu, setShowMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [loco, setLoco] = useState(null);
  const attachScrollEvent = (locoScroll) => {
    locoScroll.on("scroll", () => {
      let tl = scrollAnimation(showMenu, setShowMenu);
      tl.restart();
    })
  }

  useEffect(() => {
    if (mobileMenu) return
    let xscale = 1;
    let yscale = 1;
    let xprev = 0;
    let yprev = 0;
    let timeout;

    const circleChaptaKaro = (dets) => {
      clearTimeout(timeout);

      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

      xprev = dets.clientX;
      yprev = dets.clientY;

      circleMouseFollower(dets.clientX, dets.clientY, xscale, yscale);

      timeout = setTimeout(() => {
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
    };

    const circleMouseFollower = (clientX, clientY, scaleX, scaleY) => {
      document.querySelector('#minicircle').style.transform = `translate(${clientX}px, ${clientY}px) scale(${scaleX}, ${scaleY})`;
    };

    window.addEventListener('mousemove', circleChaptaKaro);

    return () => {
      window.removeEventListener('mousemove', circleChaptaKaro);
      clearTimeout(timeout);
    };
  }, [mobileMenu]);
  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    });


    setLoco(locoScroll);
    // locoScroll.on("scroll", ScrollTrigger.update);

    // ScrollTrigger.scrollerProxy("#main", {
    //   scrollTop(value) {
    //     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    //   },
    //   getBoundingClientRect() {
    //     return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    //   },
    //   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    // });
    // try {
    //   ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    //   ScrollTrigger.refresh();
    // }
    // catch (e) {

    // }

    // fadeInanimation();


    // const animatedText = document.querySelectorAll(".build-in-slideX-left");
    // animatedText.forEach((ele)=>textObserver.observe(ele));
    return () => {
      locoScroll.destroy();
    };
  }, []);
  useEffect(() => {
    function enterAnimation(link, e, index) {
      link.tl.tweenFromTo(0, "midway");
    }

    // Mouseleave function
    function leaveAnimation(link, e) {
      link.tl.play();
    }


    // Get all links
    let workLinks = document.querySelectorAll(".js-work-link");

    workLinks.forEach((link, index, value) => {
      let underline = link.querySelector(".underline");
      link.tl = gsap.timeline({ paused: true });

      link.tl.fromTo(underline, {
        width: "0%",
        left: "0%",
      }, {
        width: "100%",
        duration: 0.2,
      });

      link.tl.add("midway");

      link.tl.fromTo(underline, {
        width: "100%",
        left: "0%",
      }, {
        width: "0%",
        left: "100%",
        duration: 0.2,
        immediateRender: false
      });

      // Mouseenter
      
      link.addEventListener("mouseenter", (e) => {
        enterAnimation(link, e, index);
      });

      // Mouseleave
      link.addEventListener("mouseleave", (e) => {
        leaveAnimation(link, e);
      });
      return () => {
        link.removeEventListener("mouseenter", (e) => {
          enterAnimation(link, e, index);
        });

        // Mouseleave
        link.removeEventListener("mouseleave", (e) => {
          leaveAnimation(link, e);
        });
      }
    });
  }, []);
  useEffect(() => {
    if (showMenu == null || showMenu == false) return;
    attachScrollEvent(loco);

  }, [showMenu])
  const showResumeAnimation = (event) => {

    event.stopPropagation()
    const r1 = document.getElementsByClassName("side-lancer-1")[0];
    const r2 = document.getElementsByClassName("side-lancer-2")[0];
    if (r1.classList.contains("showit")) {
      r1.classList.remove("showit");
      r2.classList.remove("showit");
    } else {
      r1.classList.add("showit");
      r2.classList.add("showit");
    }


  }
  const showConnectBox = () => {
    if (window.innerWidth <= 600) {
      navigate('/connect');
      return
    }
    const ele = document.getElementsByClassName("connect-card")[0];


    ele.classList.add("connect-box-animation");

  }
  return (
    <>
      <Transition>
      </Transition>
      <div className="Skills-Page">
        <div id="side" onClick={() => showConnectBox()}> <IoChatbubbleEllipses id='ico' ></IoChatbubbleEllipses>
          <div className="side-lancer-1" onClick={(event) => event.stopPropagation()}>
            <a href={IshanResume} target="_blank">I</a>
          </div>
          <div className="side-lancer-2" onClick={(event) => event.stopPropagation()}>
            <a href={SanyamResume} target="_blank">S</a>
          </div>
          <div id="resume" onClick={(event) => showResumeAnimation(event)}>Resume</div>
        </div>
        <div id="minicircle"></div>
        <div id="main" data-scroll-container data-scroll-speed="2">
          <Navbar showMenu={showMenu} setShowMenu={setShowMenu} mobile={mobileMenu} toggleMenu={setMobileMenu} id="nav"></Navbar>
          <div className="cont" data-scroll data-scroll-sticky data-scroll-target="#main">
            <div className="work mobn loki">EXP
            </div>
          </div>
          <Exper></Exper>

          <Footer dateState={dateState}></Footer>
          {mobileMenu && (
            <SideBar dateState={dateState} id="sidenav"></SideBar>
          )}
        </div>
      </div>
    </>
  )
}

export default Experience;


