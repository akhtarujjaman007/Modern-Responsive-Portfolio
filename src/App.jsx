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
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 8;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);
      }

      setProgress(value);
    }, 80);

    const finish = () => {
      setProgress(100);

      setTimeout(() => {
        setLoading(false);
      }, 350);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", finish);
    };
  }, []);

  return (
    <div className="app">

      <AnimatePresence mode="wait">

        {loading && (
          <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.02,
              transition: {
                duration: 0.65,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
          >

            {/* TOP PROGRESS LINE */}
            <motion.div
              className="loader-progress"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{
                ease: "linear",
                duration: 0.08,
              }}
            />

            {/* CENTER MARK */}
            <motion.div
              className="loader-center"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="loader-mark">
                A<span>.</span>
              </div>

              <div className="loader-meta">
                <span>FIELD // 001</span>
                <span>
                  {Math.round(progress)
                    .toString()
                    .padStart(3, "0")}
                  %
                </span>
              </div>
            </motion.div>

            {/* BOTTOM STATUS */}
            <div className="loader-bottom">
              <span>INITIALIZING PORTFOLIO</span>
              <span>AKHTARUJJAMAN SIDDIQUEE</span>
            </div>

          </motion.div>
        )}

      </AnimatePresence>

      <Navbar />

      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}