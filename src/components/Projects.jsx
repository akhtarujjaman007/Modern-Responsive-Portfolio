import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Cpu,
  Smartphone,
  Sprout,
  Bot,

} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Portable Assistive Device",
    category: "ASSISTIVE TECHNOLOGY / EMBEDDED SYSTEM",
    description:
      "A practical assistive technology project built around embedded sensing, portability and real-world interaction.",
    image: "assistive-device.png",
    github:
      "https://github.com/akhtarujjaman007/Portable-Assistive-Device",
    tech: ["Embedded", "Sensors", "IoT", "Assistive Tech"],
    status: "PROTOTYPE",
    icon: Cpu,
  },
  {
  number: "02",
  title: "RiceTwin",
  category: "IoT / DIGITAL TWIN / AGRICULTURE",
  description:
    "A smart rice-field digital twin concept that connects IoT sensing, real-time monitoring, and interactive visualization to support data-driven agricultural management.",
  image: "rice-twin.png",
  github:
    "https://github.com/akhtarujjaman007/Digital-twin-Rice-field-ricetwin_ai-",
  tech: [
    "IoT", "Digital Twin", "ESP32", "Sensors","Smart Agriculture"
  ],
  status: "ACTIVE",
  icon: Sprout,
  },
  {
    number: "03",
    title: "Flutter Weather App",
    category: "MOBILE APPLICATION",
    description:
      "A Flutter weather application focused on API-driven data, responsive interface design and clean mobile interaction.",
    image: "weather-app.png",
    github:
      "https://github.com/akhtarujjaman007/Flutter-Weather-App",
    tech: ["Flutter", "Dart", "REST API", "Mobile UI"],
    status: "DEPLOYED",
    icon: Smartphone,
  },
 {
  number: "04",
  title: "AI-Assisted Firefighting & Rescue Robot",
  category: "AI / ROBOTICS",
  description:
    "An intelligent rescue robot designed to assist in hazardous fire environments through autonomous navigation, fire detection, and remote monitoring for safer firefighting operations.",
  image: "firefighting-robot.png",
  github:
    "https://github.com/akhtarujjaman007/AI-Assisted-Firefighting-and-Rescue-Robot",
  tech: [
    "Robotics",
    "IoT",
    "ESP32",
    "Sensors",
    "Computer vision"
  ],
  status: "ACTIVE",
  icon: Bot,
},
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-title">
          <span>04 / CASE FILES</span>

          <h2>
            Selected
            <br />
            Systems.
          </h2>

          <p>
            A selection of projects where ideas became interfaces,
            prototypes, connected devices and working systems.
          </p>
        </div>

        <div className="project-files">
          {projects.map((p, i) => {
            const Icon = p.icon;

            return (
              <motion.article
                className="project-file"
                key={p.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="project-file-number">
                  {p.number}
                </div>

                <div className="project-visual">
                  <div className="project-visual-header">
                    <span>VISUAL / {p.number}</span>
                    <span>{p.status}</span>
                  </div>

                  <div className="project-image-wrap">
                    <img
                      src={`${import.meta.env.BASE_URL}projects/${p.image}`}
                      alt={p.title}
                    />

                    <div className="project-image-grid" />

                    <div className="project-image-mark">
                      <Icon size={18} />
                    </div>
                  </div>

                  <div className="project-visual-footer">
                    <span>SYSTEM PREVIEW</span>
                    <span>00{i + 1}</span>
                  </div>
                </div>

                <div className="project-information">
                  <div className="project-meta">
                    <span>CASE / {p.number}</span>
                    <span>{p.category}</span>
                  </div>

                  <div className="project-title-row">
                    <h3>{p.title}</h3>

                    <a
                      className="project-github"
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${p.title} GitHub repository`}
                    >
                      <Github size={16} />
                    </a>
                  </div>

                  <p className="project-description">
                    {p.description}
                  </p>

                  <div className="project-details">
                    <div className="project-detail">
                      <span>STATUS</span>
                      <strong>{p.status}</strong>
                    </div>

                    <div className="project-detail">
                      <span>STACK</span>

                      <div className="project-tags">
                        {p.tech.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a
                    className="project-action"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>OPEN CASE FILE</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="projects-footer">
          <span>MORE SYSTEMS / MORE EXPERIMENTS</span>

          <a
            href="https://github.com/akhtarujjaman007"
            target="_blank"
            rel="noreferrer"
          >
            VIEW GITHUB ARCHIVE
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}