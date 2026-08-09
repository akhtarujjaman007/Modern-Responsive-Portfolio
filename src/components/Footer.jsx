import { Github, Linkedin, ArrowUp } from "lucide-react";
import { profile } from "../data";

export default function Footer() {
  return <footer>
    <div className="container footer">
      <div><a className="brand" href="#home">Sujon<span>.</span></a><p>IoT & Robotics • Flutter • Embedded • Research</p></div>
      <div className="footer-links">{["Home","About","Projects","Research","Contact"].map(x=><a key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</div>
      <div className="footer-social"><a href={profile.github} target="_blank" rel="noreferrer"><Github/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/></a></div>
    </div>
    <div className="container copyright">© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
    <button className="footer-top" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}><ArrowUp size={15}/></button>
  </footer>;
}