import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Github,
  Linkedin,
  Mail,
  FileText,
  Cpu,
  Settings,
  BookOpen
} from "lucide-react";

import ThreeBackground from "./ThreeBackground";
import { profile } from "../data";

export default function Hero() {
  return (
    <section id="home" className="hero">

      {/* 3D Background */}
      <div className="hero-three">
        <ThreeBackground />
      </div>

      <div className="hero-glow glow-a" />
      <div className="hero-glow glow-b" />

      <div className="container hero-grid">

        {/* =========================
            LEFT SIDE
        ========================== */}
        <motion.div
          className="hero-copy"
          initial={{
            opacity: 0,
            x: -35
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8
          }}
        >

          <div className="availability">
            <i />
            Available for opportunities
          </div>

          <p className="eyebrow">
            HELLO, I'M
          </p>

          <h1>
            MD. AKHTARUJJAMAN <em>SIDDIQUEE</em>
          </h1>

          <h2>
            {profile.role}
          </h2>

          <p className="hero-description">
            I build practical systems across IoT, embedded technology,
            Flutter applications, smart automation and research.
          </p>

          <div className="hero-actions">

            <a
              className="btn primary"
              href="#projects"
            >
              View Projects
              <ArrowDownRight size={16} />
            </a>

          <a
  className="btn secondary"
  href={`${import.meta.env.BASE_URL}resume.pdf`}
  target="_blank"
  rel="noreferrer"
>
  <FileText size={16} />
  View CV
</a>

          </div>

          <div className="socials">

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

          </div>

        </motion.div>


        {/* =========================
            RIGHT SIDE
        ========================== */}

        <motion.div
          className="hero-art"
          initial={{
            opacity: 0,
            scale: 0.82
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.9
          }}
        >

          {/* Animated orbit */}
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />


          {/* Profile Card */}
          <div className="profile-card">

            <div className="profile-image-wrapper">

            <img
  src={`${import.meta.env.BASE_URL}profile.jpg`}
  alt="Akhtarujjaman"
  className="profile-image"
/>

              <div className="profile-overlay" />

            </div>

          </div>


          {/* Floating technology cards */}

          <div className="float-chip chip-a">
            <Cpu size={15} />
            Embedded,IoT
          </div>

          <div className="float-chip chip-b">
            <BookOpen size={15} />
            Research, Creative
          </div>

          <div className="float-chip chip-c">
            <Settings size={15} />
            Automation
          </div>

        </motion.div>

      </div>


      {/* Scroll indicator */}
      <a
        className="scroll-cue"
        href="#about"
      >
        Scroll to explore ↓
      </a>

    </section>
  );
}