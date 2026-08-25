import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-code">FIELD // 001</span>

            <h2>
              AKHTARUJJAMAN
              <br />
              SIDDIQUEE
            </h2>

            <p>
              IoT & Robotics Engineering
              <br />
              Embedded Systems / Research / Software
            </p>
          </div>

          <div className="footer-navigation">
            <span>NAVIGATE</span>

            {[
              ["PROFILE", "#about"],
              ["SYSTEM STACK", "#skills"],
              ["PROJECTS", "#projects"],
              ["RESEARCH", "#research"],
              ["CONTACT", "#contact"],
            ].map(([x, h]) => (
              <a key={h} href={h}>
                {x}
                <ArrowUpRight size={12} />
              </a>
            ))}
          </div>

          <div className="footer-social">
            <span>NETWORK</span>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={14} />
              GITHUB
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={14} />
              LINKEDIN
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} AKHTARUJJAMAN SIDDIQUEE
          </span>

          <span>DESIGNED / BUILT WITH INTENT</span>

          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}