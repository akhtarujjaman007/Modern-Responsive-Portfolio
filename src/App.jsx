import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Github from "./components/Github";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark,setDark]=useState(true);
  const [menu,setMenu]=useState(false);
  const [loading,setLoading]=useState(true);
  const [progress,setProgress]=useState(0);

  useEffect(()=>{
    const timer=setTimeout(()=>setLoading(false),700);
    const onScroll=()=>{
      const h=document.documentElement.scrollHeight-window.innerHeight;
      setProgress(h>0?(window.scrollY/h)*100:0);
    };
    window.addEventListener("scroll",onScroll);
    return ()=>{clearTimeout(timer);window.removeEventListener("scroll",onScroll)};
  },[]);

  return <div className={`app ${dark?"dark":"light"}`}>
    <AnimatePresence>{loading && <motion.div className="loader" initial={{opacity:1}} exit={{opacity:0}}><div className="loader-mark">S<span>.</span></div><div className="loader-bar"/></motion.div>}</AnimatePresence>
    <div className="scroll-progress" style={{width:`${progress}%`}}/>
    <Navbar dark={dark} setDark={setDark} open={menu} setOpen={setMenu}/>
    <main>
      <Hero/><About/><Skills/><Projects/><Research/><Experience/><Education/><Certificates/><Github/><Contact/>
    </main>
    <Footer/>
  </div>;
}