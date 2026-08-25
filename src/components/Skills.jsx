import { motion } from "framer-motion";
import { skills } from "../data";

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <div className="section-title">
          <span>03 / SYSTEM STACK</span>

          <h2>
            Technical
            <br />
            Architecture.
          </h2>

          <p>
            A practical stack built around connected hardware, software
            interfaces and research workflows.
          </p>
        </div>

        <div className="skill-grid">
          {skills.map((s, i) => (
            <motion.article
              className="skill-card"
              key={s.code}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <small>{s.code}</small>

              <h3>{s.title}</h3>

              <p>{s.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}