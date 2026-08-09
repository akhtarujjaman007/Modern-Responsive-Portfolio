import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Github } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { projects } from "../data";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const categories = ["All","IoT","Mobile","Research"];
  const visible = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return <section id="projects" className="section">
    <div className="container">
      <SectionTitle number="03" title="Featured projects" text="Selected work across Flutter, IoT, embedded systems and research."/>
      <div className="filter-row">{categories.map(c=><button className={filter===c?"active":""} key={c} onClick={()=>setFilter(c)}>{c}</button>)}</div>
      <div className="project-grid">
        {visible.map((p,i)=><motion.article layout className="project-card glass" key={p.title} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} transition={{delay:i*.05}} viewport={{once:true}} whileHover={{y:-8}}>
          <div className="project-art"><span>PROJECT {p.number}</span><div className="project-symbol">{p.number}</div></div>
          <div className="project-body"><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
            <div className="project-actions"><button className="text-btn" onClick={()=>setSelected(p)}>Details <ArrowUpRight size={14}/></button><a className="text-btn" href={p.link} target="_blank" rel="noreferrer"><Github size={14}/> GitHub</a></div>
          </div>
        </motion.article>)}
      </div>
    </div>
    <AnimatePresence>{selected && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelected(null)}>
      <motion.div className="modal glass" initial={{y:30,scale:.97}} animate={{y:0,scale:1}} exit={{y:20,scale:.98}} onClick={e=>e.stopPropagation()}>
        <button className="modal-close" onClick={()=>setSelected(null)}><X/></button>
        <span className="eyebrow">PROJECT {selected.number}</span><h3>{selected.title}</h3><p>{selected.description}</p>
        <div className="tags">{selected.tags.map(t=><span key={t}>{t}</span>)}</div>
        <a className="btn primary" href={selected.link} target="_blank" rel="noreferrer">Open GitHub <Github size={15}/></a>
      </motion.div>
    </motion.div>}</AnimatePresence>
  </section>;
}