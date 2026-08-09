import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">

        <SectionTitle
          number="02"
          title="Technical skills"
          text="A practical toolkit for building connected devices, applications and research prototypes."
        />

        <div className="skill-grid">

          {skills.map((skill, i) => (
            <motion.article
              className="glass skill-card"
              key={skill.title}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: i * 0.06,
                duration: 0.5
              }}
              viewport={{
                once: true
              }}
              whileHover={{
                y: -7
              }}
            >

              <small>
                0{i + 1}
              </small>

              <h3>
                {skill.title}
              </h3>

              <p>
                {skill.items.join(" • ")}
              </p>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}