import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { certificates } from "../data";

export default function Certificates() {
  return (
    <section id="certifications" className="section">
      <div className="container">

        <SectionTitle
          number="07"
          title="Certifications"
          text="Professional certifications and continuous learning across technology, data analysis and software development."
        />

        <div className="certificate-grid">

          {certificates.map((certificate, i) => (
            <motion.article
              className="glass certificate"
              key={certificate.link}
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.08
              }}
              viewport={{
                once: true,
                amount: 0.2
              }}
              whileHover={{
                y: -8
              }}
            >

              {/* Top row */}
              <div className="certificate-header">

                <div className="certificate-icon">
                  <Award size={25} />
                </div>

                <div className="verified">
                  <CheckCircle2 size={13} />
                  <span>Verified</span>
                </div>

              </div>

              {/* Certificate information */}
              <div className="certificate-content">

                <span className="certificate-issuer">
                  {certificate.issuer}
                </span>

                <h3>
                  {certificate.title}
                </h3>

                <p>
                  Professional certification demonstrating
                  continuous learning and technical development.
                </p>

              </div>

              {/* Certificate button */}
              <a
                className="certificate-link"
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  View Certificate
                </span>

                <ExternalLink size={15} />
              </a>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}