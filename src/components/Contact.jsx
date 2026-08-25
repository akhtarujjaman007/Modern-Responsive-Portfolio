import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Radio,
} from "lucide-react";
import { profile } from "../data";

export default function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-title">
          <span>09 / COMMUNICATION TERMINAL</span>

          <h2>
            Open
            <br />
            Channel.
          </h2>

          <p>
            Have a project, research idea or engineering opportunity in mind?
            Open a communication channel.
          </p>
        </div>

        <div className="contact-terminal">
          <div className="contact-terminal-header">
            <div>
              <Radio size={15} />
              <span>COMMUNICATION CHANNEL</span>
            </div>

            <span>STATUS / OPEN</span>
          </div>

          <div className="contact-body">
            <div className="contact-intro">
              <span className="contact-code">CHANNEL / 001</span>

              <h3>
                Let's build
                <br />
                something useful.
              </h3>

              <p>
                I'm interested in engineering projects, research
                collaborations, IoT systems, embedded technology, robotics
                and software products.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="contact-primary"
              >
                <span>TRANSMIT MESSAGE</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="contact-data">
              <Row
                icon={<Mail size={15} />}
                label="EMAIL"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />

              <Row
                icon={<Github size={15} />}
                label="GITHUB"
                value="akhtarujjaman007"
                href={profile.github}
              />

              <Row
                icon={<Linkedin size={15} />}
                label="LINKEDIN"
                value="PROFESSIONAL PROFILE"
                href={profile.linkedin}
              />

              <Row
                icon={<MapPin size={15} />}
                label="LOCATION"
                value="BANGLADESH"
              />
            </div>
          </div>

          <div className="contact-terminal-footer">
            <span>CONNECTION READY</span>
            <span>● ONLINE</span>
          </div>
        </div>

        <div className="contact-interests">
          <span>OPEN TO</span>

          <div>
            {[
              "RESEARCH",
              "IoT",
              "ROBOTICS",
              "EMBEDDED SYSTEMS",
              "SOFTWARE",
              "COLLABORATION",
            ].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ icon, label, value, href }) {
  return (
    <div className="contact-data-row">
      <div className="contact-data-icon">{icon}</div>

      <div>
        <span>{label}</span>

        {href ? (
          <a
            href={href}
            target={
              href.startsWith("mailto:") ? undefined : "_blank"
            }
            rel="noreferrer"
          >
            {value}
          </a>
        ) : (
          <strong>{value}</strong>
        )}
      </div>
    </div>
  );
}