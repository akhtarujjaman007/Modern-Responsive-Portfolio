import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { profile } from "../data";

export default function Contact() {
  const [sent,setSent]=useState(false);
  const submit=e=>{e.preventDefault();setSent(true);e.currentTarget.reset();setTimeout(()=>setSent(false),3500)};
  return <section id="contact" className="section">
    <div className="container">
      <SectionTitle number="09" title="Let's connect" text="For projects, research collaboration or professional opportunities."/>
      <div className="contact-grid">
        <motion.div className="contact-copy" initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <h3>Have an idea?</h3><p>I'm interested in practical engineering projects, IoT systems, Flutter applications, research and collaborative learning.</p>
          <div className="contact-list">
            <a href={`mailto:${profile.email}`}><Mail/> {profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github/> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a>
            <span><MapPin/> {profile.location}</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
}