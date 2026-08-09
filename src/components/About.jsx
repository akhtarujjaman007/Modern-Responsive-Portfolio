import { motion } from "framer-motion";
import { GraduationCap, MapPin, FlaskConical } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { profile } from "../data";

export default function About() {
  const stats = [["04","Research publications"],["03+","Featured repositories"],["IoT","Primary domain"],["Flutter","Mobile development"]];
  return <section id="about" className="section">
    <div className="container">
      <SectionTitle number="01" title="About me" text="A multidisciplinary profile combining software, hardware, IoT and research."/>
      <div className="about-grid">
        <motion.div className="glass about-card" initial={{opacity:0,x:-25}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <p className="mini-label">WHO I AM</p>
          <h3>Engineering ideas into useful systems.</h3>
          <p>I am an IoT & Robotics Engineering student interested in embedded systems, Flutter development, intelligent automation, smart agriculture and research.</p>
          <p>I enjoy turning technical concepts into working prototypes and user-friendly applications while continuously improving my engineering and research skills.</p>
          <div className="facts">
            <div><GraduationCap size={17}/><span>{profile.degree}</span></div>
            <div><MapPin size={17}/><span>{profile.location}</span></div>
            <div><FlaskConical size={17}/><span>Research & innovation</span></div>
          </div>
        </motion.div>
        <div className="stats-grid">
          {stats.map(([n,l],i)=><motion.div className="stat glass" key={l} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*.07}} viewport={{once:true}}><strong>{n}</strong><span>{l}</span></motion.div>)}
        </div>
      </div>
    </div>
  </section>;
}