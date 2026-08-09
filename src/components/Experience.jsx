import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { experience } from "../data";

export default function Experience() {
  return <section id="experience" className="section">
    <div className="container">
      <SectionTitle number="05" title="Experience & leadership" text="University activities and leadership experience."/>
      <div className="timeline">
        <div className="timeline-line"/>
        {experience.map((e,i)=><motion.article className={`timeline-item ${i%2 ? "right":""}`} key={e.title} initial={{opacity:0,x:i%2?30:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <i/><span>{e.period}</span><h3>{e.title}</h3><h4>{e.organization}</h4><p>{e.description}</p>
        </motion.article>)}
      </div>
    </div>
  </section>;
}