import React, { useEffect, useState } from 'react'
import App from './App'
import Preloader from './components/Preloader'
import { gsap } from 'gsap'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import MobileSkillPage from './pages/MobileSkillPage';
import MobileConnect from './pages/MobileConnect';
import SideBar from './components/SideBar';
import Connect from './components/Connect';
import Helmet from "react-helmet";
import Glitch from './components/Glitch';

function Root() {
  const location = useLocation();
  const [dateState, setDateState] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const slideUp = () => {
    const tl = gsap.timeline();
    tl.to(".pre", { height: 0, overflow: "hidden", duration: 1, smoothOrigin: true })
      .call(setLoading, [false]);
  }
  useEffect(() => {
    if (window.innerWidth < 1400) {
      setMobileMenu(true);
    } else {
      if (mobileMenu) {
        setMobileMenu(false);
      }
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      slideUp();
    }, 12000);
  }, [])
  return (
    <>
      <Preloader></Preloader>
      {!loading && (
        <AnimatePresence mode='wait' initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<App mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} dateState={dateState} setDateState={setDateState}></App>}></Route>
            <Route path='/skills' element={mobileMenu == false ? (<Skills></Skills>) : (<MobileSkillPage></MobileSkillPage>)}></Route>
            <Route path='/experience' element={<Experience></Experience>}></Route>
            <Route path='/projects' element={<Projects></Projects>}></Route>
            {mobileMenu && (
              <Route path='/connect' element={<MobileConnect></MobileConnect>}></Route>
            )}
            <Route path='*' element={<Glitch></Glitch>}></Route>
          </Routes>
        </AnimatePresence>
      )}
      {mobileMenu && (
        <SideBar dateState={dateState} id="sidenav"></SideBar>
      )}
      {!loading && !mobileMenu && (
        <>
          <Helmet>
            <link rel='stylesheet' href='./connect.css' />
          </Helmet>
          <Connect></Connect>
        </>
      )}
    </>
  )
}

export default Root