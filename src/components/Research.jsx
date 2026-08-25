import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { publications } from "../data";

export default function Research() {
  return (
    <section className="section section-alt" id="research">
      <div className="container">
        <div className="section-title">
          <span>05 / RESEARCH ARCHIVE</span>

          <h2>
            Publication
            <br />
            Index.
          </h2>

          <p>
            Research outputs and publication identifiers collected in one
            technical archive.
          </p>
        </div>

        <div className="paper-grid">
          {publications.map((p, i) => (
            <motion.article
              className="paper"
              key={p.code}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="paper-top">
                <span>{p.code}</span>
                <small>{p.venue}</small>
              </div>

              <FileText
                className="paper-icon"
                size={25}
              />

              <h3>{p.title}</h3>

              <p>DOI: {p.doi}</p>

              <a
                className="text-link"
                href={`https://doi.org/${p.doi}`}
                target="_blank"
                rel="noreferrer"
              >
                OPEN DOI
                <ArrowUpRight size={13} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}