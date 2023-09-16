import '../App.css';
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { IoArrowDownSharp, IoChatbubbleEllipses } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import loh from '../loh.jpeg';
import Ny from "../gsmy.jpeg";
import HeroBanner from './HeroBanner';
import Clients from './Clients';
import About from './About';
import {useNavigate} from "react-router-dom";
function Hero() {
  
  const navigate = useNavigate();

  const navigateHandler = (path)=>{
    navigate(path);
    
  }
  useEffect(() => {
    // if(loading)return
    function firstPageAnim() {
      let tl = gsap.timeline();

      tl.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: "expo.inOut",
      })
        .to(".boundingelem", {
          y: 0,
          ease: "expo.inOut",
          duration: 2,
          delay: -1,
          stagger: 0.2,
        })
        .from("#herofooter", {
          y: -10,
          opacity: 0,
          duration: 1.5,
          delay: -1,
          ease: "expo.inOut",
        });
    }

    firstPageAnim();
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
  }, [])
  return (
    <div>
      <div id="hero">
        <HeroBanner></HeroBanner>
        <div id="chhotiheadings">
          <div class="bounding">
            <h5 class="boundingelem moi">available for freelance</h5>
          </div>
          <div class="bounding">
            <h5 class="boundingelem moi oo">work for web</h5>
          </div>
        </div>
        <Clients></Clients>
        <div id="herofooter">
          <a href="#" className='js-work-link op' onClick={()=>navigateHandler('/skills')}>Working on Web <FiArrowUpRight className='arr'></FiArrowUpRight><span className='underline'></span></a>
          <a href="#" className='js-work-link op' onClick={()=>navigateHandler('/projects')}>Developing Projects<FiArrowUpRight className='arr'></FiArrowUpRight><span className='underline'></span></a>
          <div id="iconset">
            <div class="circle"> <IoArrowDownSharp></IoArrowDownSharp> </div>
            <div class="circle"> <IoArrowDownSharp></IoArrowDownSharp> </div>
          </div>
        </div>
      </div>
      <div id="second">
        <div class="elem">
          <h1>SKILLS</h1>
          <h2>+</h2>
          <div class="center14"></div>
        </div>


        <div class="elem">
          <h1>EXPERIENCE</h1>
          <h2>+</h2>
          <div class="center14"></div>
        </div>
        <div class="elem elemlast">
          <h1>WORK</h1>
          <h2>+</h2>
          <div class="center14"></div>
        </div>

      </div>
      <About src1={loh} src2={Ny}></About>
    </div>
  )
}

export default Hero;
