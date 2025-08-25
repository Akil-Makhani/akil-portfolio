import { Menu, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500" />
          <span className="font-bold tracking-tight text-lg">Akil Makhani</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="hover:opacity-80">About</a>
          <a href="#skills" className="hover:opacity-80">Skills</a>
          <a href="#experience" className="hover:opacity-80">Experience</a>
          <a href="#projects" className="hover:opacity-80">Projects</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
          <a href="https://github.com/Akil-Makhani?tab=repositories" className="hover:opacity-80" target="_blank" rel="noreferrer">
            <Github className="inline-block mr-1" size={18}/> GitHub
          </a>
          <a href="https://www.linkedin.com/in/akil-makhani-974a6a153" className="hover:opacity-80" target="_blank" rel="noreferrer">
            <Linkedin className="inline-block mr-1" size={18}/> LinkedIn
          </a>
        </nav>
        <button className="md:hidden p-2 rounded-xl border border-slate-800" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>
      <div className={clsx("md:hidden border-t border-slate-800", open ? "block" : "hidden")}>
        <div className="container-wide py-3 flex flex-col gap-3">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </header>
  );
}
