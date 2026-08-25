import { ArrowUpRight, Award } from "lucide-react";
import { certifications } from "../data";

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">

        <div className="section-title">
          <span>08 / CREDENTIAL ARCHIVE</span>

          <h2>Credentials.</h2>

          <p>
            A compact record of technical learning and development areas.
          </p>
        </div>

        <div className="certificate-grid">

          {certifications.map((c) => (
            <article className="certificate" key={c.title}>

              <div className="certificate-header">

                <div className="certificate-icon">
                  <Award size={18} />
                </div>

                <span className="verified">
                  ● CREDENTIAL
                </span>

              </div>

              <div className="certificate-content">

                <span className="certificate-issuer">
                  {c.issuer}
                </span>

                <h3>
                  {c.title}
                </h3>

                <p>
                  {c.text}
                </p>

              </div>

              {c.link && c.link !== "#" ? (
                <a
                  className="certificate-link"
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>VIEW CERTIFICATE</span>
                  <ArrowUpRight size={13} />
                </a>
              ) : (
                <span className="certificate-link certificate-disabled">
                  <span>CERTIFICATE LINK PENDING</span>
                </span>
              )}

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}