import { Moon, Sun, Menu, X } from "lucide-react";
import { navItems } from "../data";

export default function Navbar({ dark, setDark, open, setOpen }) {
  return (
    <header className="navbar-shell">
      <nav className="container navbar">
        <a className="brand" href="#home">Akhtarujjaman<span>.</span></a>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>
          ))}
        </div>
        <div className="nav-tools">
          <button className="circle-btn" onClick={() => setDark(v => !v)} aria-label="Toggle theme">
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button className="circle-btn menu-trigger" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>
    </header>
  );
}