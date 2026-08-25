import { experience } from "../data";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-title">
          <span>06 / FIELD RECORDS</span>

          <h2>
            Experience &
            <br />
            Leadership.
          </h2>

          <p>
            Selected academic-community roles and practical leadership
            experience.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line" />

          {experience.map((e, i) => (
            <article
              className={`timeline-item ${i % 2 ? "right" : ""}`}
              key={e.title}
            >
              <i />

              <span>{e.date}</span>

              <h3>{e.title}</h3>

              <h4>{e.org}</h4>

              <p>{e.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}