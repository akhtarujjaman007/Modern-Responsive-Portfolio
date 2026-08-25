import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  ["PROFILE", "#about"],
  ["STACK", "#skills"],
  ["PROJECTS", "#projects"],
  ["RESEARCH", "#research"],
  ["EXPERIENCE", "#experience"],
  ["EDUCATION", "#education"],
  ["CREDENTIALS", "#certifications"],
  ["CONTACT", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-shell">
      <div className="container navbar">
        <a className="brand" href="#top">
          FIELD <span>// 001</span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="circle-btn menu-trigger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>
    </header>
  );
}