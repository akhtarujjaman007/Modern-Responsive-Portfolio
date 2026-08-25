import { motion } from "framer-motion";
import {
  Cpu,
  FlaskConical,
  GraduationCap,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { profile } from "../data";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Header
          code="02 / PROFILE"
          title={
            <>
              Engineering
              <br />
              Dossier.
            </>
          }
          text="A snapshot of the person behind the systems — where hardware, software, research and practical problem solving meet."
        />

        <div className="about-grid">
          <motion.article
            className="about-card about-main-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="about-card-top">
              <span className="mini-label">PROFILE / 001</span>
              <span className="about-index">ACTIVE</span>
            </div>

            <h3>
              Building at the intersection of hardware & software.
            </h3>

            <p>{profile.about}</p>

            <p>
              My work spans embedded systems, IoT, robotics, Flutter
              applications, smart automation and technology research.
            </p>

            <div className="facts">
              <div>
                <MapPin size={13} />
                <span>BASED IN BANGLADESH</span>
              </div>

              <div>
                <GraduationCap size={13} />
                <span>IoT & ROBOTICS ENGINEERING</span>
              </div>

              <div>
                <Cpu size={13} />
                <span>HARDWARE × SOFTWARE</span>
              </div>

              <div>
                <FlaskConical size={13} />
                <span>RESEARCH / BUILD / EXPERIMENT</span>
              </div>
            </div>
          </motion.article>

          <div className="about-side">
            <div className="system-card">
              <div className="system-card-header">
                <span>SYSTEM PROFILE</span>
                <span>02</span>
              </div>

              <div className="system-status">
                <div className="system-status-dot">
                  <i />
                </div>

                <div>
                  <small>CURRENT MODE</small>
                  <strong>BUILD / RESEARCH</strong>
                </div>
              </div>

              <div className="system-lines">
                {[
                  ["DOMAIN", "IoT"],
                  ["HARDWARE", "EMBEDDED"],
                  ["CONTROL", "ROBOTICS"],
                  ["SOFTWARE", "FLUTTER"],
                ].map((x) => (
                  <div key={x[0]}>
                    <span>{x[0]}</span>
                    <strong>{x[1]}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="approach-card">
              <span className="approach-number">03</span>

              <div>
                <span className="mini-label">APPROACH</span>

                <h4>
                  Learn.
                  <br />
                  Build.
                  <br />
                  Test.
                  <br />
                  Improve.
                </h4>
              </div>

              <ArrowUpRight size={17} />
            </div>
          </div>
        </div>

        <div className="about-metrics">
          {["IoT", "EMBEDDED", "ROBOTICS", "RESEARCH"].map((x, i) => (
            <div className="metric" key={x}>
              <span>0{i + 1}</span>

              <strong>{x}</strong>

              <small>
                {
                  [
                    "Connected Systems",
                    "Hardware & Sensors",
                    "Automation & Control",
                    "Publications & Experiments",
                  ][i]
                }
              </small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Header({ code, title, text }) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span>{code}</span>

      <h2>{title}</h2>

      <p>{text}</p>
    </motion.div>
  );
}