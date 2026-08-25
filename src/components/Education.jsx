import { GraduationCap } from "lucide-react";
import { education } from "../data";

export default function Education() {
  return (
    <section className="section section-alt" id="education">
      <div className="container">
        <div className="section-title">
          <span>07 / ACADEMIC RECORD</span>

          <h2>Education.</h2>

          <p>
            The academic foundation behind the engineering work.
          </p>
        </div>

        <div className="education glass">
          <GraduationCap className="education-icon" />

          <div>
            <small>UNDERGRADUATE</small>

            <h3>{education.degree}</h3>

            <h4>{education.institution}</h4>

            <p>{education.status}</p>
          </div>
        </div>
      </div>
    </section>
  );
}