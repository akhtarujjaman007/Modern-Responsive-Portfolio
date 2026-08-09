import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Github,
  Linkedin,
  Mail,
  FileText,
  Cpu,
  Settings,
  BookOpen,
} from "lucide-react";

import ThreeBackground from "./ThreeBackground";
import { profile } from "../data";

export default function Hero() {
  return (
    <section id="home" className="hero">

      {/* =========================
          3D BACKGROUND
      ========================== */}
      <div className="hero-three">
        <ThreeBackground />
      </div>

      {/* Background glows */}
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
            x: -35,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          {/* Availability */}
          <div className="availability">
            <i />
            Available for opportunities
          </div>

          {/* Eyebrow */}
          <p className="eyebrow">
            HELLO, I'M
          </p>

          {/* Name */}
          <h1>
            MD. AKHTARUJJAMAN{" "}
            <em>SIDDIQUEE</em>
          </h1>

          {/* Role */}
          <h2>
            {profile.role}
          </h2>

          {/* Description */}
          <p className="hero-description">
            I build practical systems across IoT, embedded technology,
            Flutter applications, smart automation and research.
          </p>

          {/* =========================
              ACTION BUTTONS
          ========================== */}
          <div className="hero-actions">

            {/* Projects */}
            <a
              className="btn primary"
              href="#projects"
            >
              View Projects
              <ArrowDownRight size={16} />
            </a>

            {/* CV */}
            <a
              className="btn secondary"
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={16} />
              View CV
            </a>

          </div>

          {/* =========================
              SOCIAL LINKS
          ========================== */}
          <div className="socials">

            {/* GitHub */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            {/* Email */}
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
            scale: 0.82,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
        >

          {/* =========================
              ANIMATED ORBITS
          ========================== */}
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />


          {/* =========================
              PROFILE CARD
          ========================== */}
          <div className="profile-card">

            <div className="profile-image-wrapper">

              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Akhtarujjaman Siddiquee"
                className="profile-image"
              />

              <div className="profile-overlay" />

            </div>

          </div>


          {/* =========================
              FLOATING TECHNOLOGY CARDS
          ========================== */}

          {/* Embedded + IoT */}
          <motion.div
            className="float-chip chip-a"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
          >
            <Cpu size={15} />
            Embedded, IoT
          </motion.div>


          {/* Research */}
          <motion.div
            className="float-chip chip-b"
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.7,
            }}
          >
            <BookOpen size={15} />
            Research, Creative
          </motion.div>


          {/* Automation */}
          <motion.div
            className="float-chip chip-c"
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.9,
            }}
          >
            <Settings size={15} />
            Automation
          </motion.div>

        </motion.div>

      </div>


      {/* =========================
          SCROLL INDICATOR
      ========================== */}
      <a
        className="scroll-cue"
        href="#about"
      >
        Scroll to explore ↓
      </a>

    </section>
  );
}