import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { education } from "../data";

export default function Education() {
  return <section id="education" className="section section-alt">
    <div className="container">
      <SectionTitle number="06" title="Education" text="Academic foundation and current direction."/>
      <motion.div className="education glass" initial={{opacity:0,scale:.98}} whileInView={{opacity:1,scale:1}} viewport={{once:true}}>
        <GraduationCap className="education-icon"/>
        <div><small>{education.period}</small><h3>{education.degree}</h3><h4>{education.university}</h4><p>{education.description}</p></div>
      </motion.div>
    </div>
  </section>;
}