import { Github as GithubIcon, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function GithubSection() {
  const username = "akhtarujjaman007";

  return (
    <section className="section section-alt">
      <div className="container">
        <SectionTitle
          number="08"
          title="GitHub activity"
          text="Explore my public repositories and development work."
        />

        <motion.div
          className="github-panel glass"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="github-copy">
            <GithubIcon size={42} />

            <h3>@{username}</h3>

            <p>
              Projects, experiments and code repositories covering IoT,
              Flutter, embedded systems and software development.
            </p>

            <a
              className="btn primary"
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub
              <ExternalLink size={15} />
            </a>
          </div>

          <div className="github-visual">
            <div className="github-grid-demo">
              {Array.from({ length: 84 }, (_, i) => (
                <i
                  key={i}
                  style={{
                    opacity: 0.15 + (i % 5) * 0.15,
                  }}
                />
              ))}
            </div>

            <small>
              GitHub contribution-style visual
            </small>
          </div>
        </motion.div>
      </div>
    </section>
  );
}