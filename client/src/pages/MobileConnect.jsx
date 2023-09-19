import React, { useEffect, useState, useRef, Suspense, lazy } from 'react'
import Transition from '../transition/Transition';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import LocomotiveScroll from 'locomotive-scroll';
import { IoChatbubbleEllipses } from "react-icons/io5";
import Footer from "../components/Footer";
import SideBar from '../components/Footer';
import { scrollAnimation } from '../components/Navbar';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faGithub, faXTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import IshanResume from "../Ishan.pdf";
import SanyamResume from "../sanyam_main_resume.pdf";
import "../components/styles/KOPL.css"
import emailjs from "@emailjs/browser";
import LazySpinnerLoader from '../LazyComponents/LazySpinnerLoader';
const V2 = lazy(() => import("../components/Video2"));

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
function MobileConnect() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const navigateHandler = (path) => {
    navigate(path);
  }

  const [dateState, setDateState] = useState(new Date());
  const [showMenu, setShowMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [loco, setLoco] = useState(null);
  const emailBtn = useRef();
  const [onSuccess, setOnSuccess] = useState("");
  const getMailId = async () => {

    await fetch("http://localhost:8000/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, message })
    }).then(res => {
      if (res.status === 201) {
        setOnSuccess("Sent");
        setemail("");
        setmessage("");
      } else {
        setOnSuccess("Failed!")
      }
    })
      .catch(err => {
        setOnSuccess("Failed!")
      });


  }

  const sendEmail = (event) => {

    event.preventDefault();



    const serviceID = 'default_service';
    const templateID = 'template_ltl49k5';

    emailjs.sendForm(serviceID, templateID, emailBtn.current, "R8ExsPy3gbCdxglF4")
      .then(() => {
        alert('Sent!');
      }, (err) => {
        alert(JSON.stringify(err));
      });
  }


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


    // const deployment = document.querySelector(".deployment-sticker");
    // observe.observe(deployment);

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
  useEffect(() => {
    document.querySelectorAll('.button').forEach(button => {

      let getVar = variable => getComputedStyle(button).getPropertyValue(variable);

      button.addEventListener('click', e => {

        if (!button.classList.contains('active')) {

          button.classList.add('active');

          gsap.to(button, {
            keyframes: [{
              '--left-wing-first-x': 50,
              '--left-wing-first-y': 100,
              '--right-wing-second-x': 50,
              '--right-wing-second-y': 100,
              duration: .2,
              onComplete() {
                gsap.set(button, {
                  '--left-wing-first-y': 0,
                  '--left-wing-second-x': 40,
                  '--left-wing-second-y': 100,
                  '--left-wing-third-x': 0,
                  '--left-wing-third-y': 100,
                  '--left-body-third-x': 40,
                  '--right-wing-first-x': 50,
                  '--right-wing-first-y': 0,
                  '--right-wing-second-x': 60,
                  '--right-wing-second-y': 100,
                  '--right-wing-third-x': 100,
                  '--right-wing-third-y': 100,
                  '--right-body-third-x': 60
                })
              }
            }, {
              '--left-wing-third-x': 20,
              '--left-wing-third-y': 90,
              '--left-wing-second-y': 90,
              '--left-body-third-y': 90,
              '--right-wing-third-x': 80,
              '--right-wing-third-y': 90,
              '--right-body-third-y': 90,
              '--right-wing-second-y': 90,
              duration: .2
            }, {
              '--rotate': 50,
              '--left-wing-third-y': 95,
              '--left-wing-third-x': 27,
              '--right-body-third-x': 45,
              '--right-wing-second-x': 45,
              '--right-wing-third-x': 60,
              '--right-wing-third-y': 83,
              duration: .25
            }, {
              '--rotate': 55,
              '--plane-x': -8,
              '--plane-y': 24,
              duration: .2
            }, {
              '--rotate': 40,
              '--plane-x': 45,
              '--plane-y': -180,
              '--plane-opacity': 0,
              duration: .3,
              onComplete() {
                setTimeout(() => {
                  button.removeAttribute('style');
                  gsap.fromTo(button, {
                    opacity: 0,
                    y: -8
                  }, {
                    opacity: 1,
                    y: 0,
                    clearProps: true,
                    duration: .3,
                    onComplete() {
                      button.classList.remove('active');
                    }
                  })
                }, 2000)
              }
            }]
          })

          gsap.to(button, {
            keyframes: [{
              '--text-opacity': 0,
              '--border-radius': 0,
              '--left-wing-background': getVar('--primary-darkest'),
              '--right-wing-background': getVar('--primary-darkest'),
              duration: .1
            }, {
              '--left-wing-background': getVar('--primary'),
              '--right-wing-background': getVar('--primary'),
              duration: .1
            }, {
              '--left-body-background': getVar('--primary-dark'),
              '--right-body-background': getVar('--primary-darkest'),
              duration: .4
            }, {
              '--success-opacity': 1,
              '--success-scale': 1,
              duration: .25,
              delay: .25
            }]
          })

        }

      })

    });
  }, [])
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
        <div id="main" data-scroll-container data-scroll-speed="2" >
          <Navbar showMenu={showMenu} setShowMenu={setShowMenu} mobile={mobileMenu} toggleMenu={setMobileMenu} id="nav" style={{position:"fixed"}}></Navbar>



          <div className="cont" data-scroll data-scroll-sticky data-scroll-target="#main">
            <div className="work mobn kkkkop">CONTACT
            </div>
          </div>
          <div className="connect-container">
            <Suspense fallback={<LazySpinnerLoader></LazySpinnerLoader>}>
              <V2></V2>
            </Suspense>
            <div className="connect-options">
              <div className="connect-option-list">
                <FontAwesomeIcon icon={faYoutube} size='2x' style={{ color: 'white', opacity: "0.7" }} />
              </div>
              <div className="connect-option-list">
                <FontAwesomeIcon icon={faGithub} size='2x' style={{ color: 'white', opacity: "0.7" }} />
              </div>
              <div className="connect-option-list">
                <FontAwesomeIcon icon={faXTwitter} size='2x' style={{ color: 'white', opacity: "0.7" }} />
              </div>
              <div className="connect-option-list">
                <FontAwesomeIcon icon={faLinkedinIn} size='2x' style={{ color: 'white', opacity: "0.7" }} />
              </div>
            </div>

            <div className="write-message">

              <div className="input-custom-message-area">
                <input type="text" name="" id="" className='text-area-message' value={email} onChange={(e) => {
                  setemail(e.target.value);
                }} placeholder={"Email"} style={{ marginTop: "5px", marginBottom: "5px" }} />
                <textarea rows={10} cols={150} wrap='soft' value={message} onChange={(e) => {
                  setmessage(e.target.value)
                }}
                  style={{ resize: "none" }}
                  className='text-area-message' placeholder={"Message"}>
                </textarea>
              </div>

              <div className="send-message-button-wrapper">
                <button class="button" onClick={() => getMailId()}>
                  <span class="default">Send</span>
                  <span class="success">{onSuccess}</span>
                  <div class="left"></div>
                  <div class="right"></div>
                </button>
              </div>

            </div>

            <div className="separation-line"></div>
            <div className="subscribe-content">
              <div className="button-subscribe-connect">
                <form ref={emailBtn} onSubmit={(event) => sendEmail(event)}>
                  <input className="subscribe-input-email" type="email" placeholder="subscribe@here.com" required />
                  <button className="subscribe-button-kafka subscribe-content-text" type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>

          <Footer dateState={dateState}></Footer>
          {mobileMenu && (
            <SideBar dateState={dateState} id="sidenav"></SideBar>
          )}
        </div>

      </div>
    </>
  )
}

export default MobileConnect;


