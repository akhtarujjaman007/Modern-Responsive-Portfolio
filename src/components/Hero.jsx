import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Cpu,
  Radio,
  Bot,
} from "lucide-react";
import { profile } from "../data";

export default function Hero() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="hero" id="home">
      <div className="hero-field-lines">
        <span />
        <span />
        <span />
      </div>

      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="availability">
            <i />
            Available for opportunities
          </div>

          <p className="eyebrow">
            FIELD / 001 — ENGINEERING PROFILE
          </p>

          <h1>
            I BUILD <em>SYSTEMS</em> THAT CONNECT.
          </h1>

          <h2>{profile.role}</h2>

          <p className="hero-description">
            I work across IoT, embedded systems, robotics, Flutter
            applications, smart automation and technology research —
            turning ideas into practical systems.
          </p>

          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              Explore Work
              <ArrowDownRight size={15} />
            </a>

            <a className="btn secondary" href="#contact">
              Open Channel
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="engineering-id">
            <div className="id-header">
              <div>
                <span className="id-micro">ENGINEERING ID</span>
                <strong>001</strong>
              </div>

              <div className="id-status">
                <i />
                ACTIVE
              </div>
            </div>

            <div className="id-image">
              <img
                src={`${base}profile.png`}
                alt="Engineering identity graphic"
              />

              <div className="id-scan-line" />

              <div className="id-image-label">
                VISUAL / 001
              </div>
            </div>

            <div className="id-info">
              <div className="id-name">
                <span>FULL NAME</span>

                <strong>
                  AKHTARUJJAMAN
                  <br />
                  SIDDIQUEE
                </strong>
              </div>

              <div className="id-role">
                <span>SPECIALIZATION</span>
                <strong>IoT / ROBOTICS</strong>
              </div>
            </div>

            <div className="id-footer">
              <span>UFTB</span>
              <span>BANGLADESH</span>
              <span>2026</span>
            </div>
          </div>

          {[
            ["annotation-one", Cpu, "SYSTEM 01", "EMBEDDED, IOT, AUTOMATION"],
            ["annotation-two", Radio, "SYSTEM 02", ",RESEARCH, PROBLEM SOLVING"],
            ["annotation-three", Bot, "SYSTEM 03", "ROBOTICS, FLUTTER"],
          ].map(([cls, Icon, small, strong]) => (
            <motion.div
              key={cls}
              className={`hero-annotation ${cls}`}
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <Icon size={13} />

              <div>
                <small>{small}</small>
                <strong>{strong}</strong>
              </div>
            </motion.div>
          ))}

          <div className="hero-coordinates">
            <span>23.8103° N</span>
            <span>90.4125° E</span>
          </div>
        </motion.div>
      </div>

      <div className="hero-bottom-strip">
        {[
          ["DISCIPLINE", "IoT / ROBOTICS"],
          ["FOCUS", "HARDWARE × SOFTWARE"],
          ["MODE", "BUILD / RESEARCH"],
          ["STATUS", "● AVAILABLE"],
        ].map(([a, b]) => (
          <div key={a}>
            <span>{a}</span>

            <strong
              className={a === "STATUS" ? "status-active" : ""}
            >
              {b}
            </strong>
          </div>
        ))}
      </div>

      <a className="scroll-cue" href="#about">
        Scroll to explore
      </a>
    </section>
  );
}