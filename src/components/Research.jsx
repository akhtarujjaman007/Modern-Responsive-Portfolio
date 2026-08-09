import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { publications } from "../data";

export default function Research() {
  return <section id="research" className="section section-alt">
    <div className="container">
      <SectionTitle number="04" title="Research publications" text="Publication identifiers currently available in the portfolio data."/>
      <div className="paper-grid">
        {publications.map((p,i)=><motion.article className="glass paper" key={p.doi} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} transition={{delay:i*.06}} viewport={{once:true}}>
          <div className="paper-top"><span>{p.type}</span><small>{p.year}</small></div>
          <BookOpen className="paper-icon"/>
          <h3>{p.venue}</h3><p>DOI: {p.doi}</p>
          <a className="text-link" href={`https://doi.org/${p.doi}`} target="_blank" rel="noreferrer">Open DOI <ExternalLink size={13}/></a>
        </motion.article>)}
      </div>
      <p className="source-note">Note: exact publication titles and author lists are not invented in this template. Add the verified metadata from each final paper.</p>
    </div>
  </section>;
}