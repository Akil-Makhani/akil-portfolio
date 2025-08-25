import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ title, link, desc, bullets = [] }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="card block group hover:bg-slate-900 transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <ArrowUpRight className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
      <p className="mt-2 text-slate-300">{desc}</p>
      {bullets?.length > 0 && (
        <ul className="mt-3 list-disc ml-4 space-y-1 text-slate-300">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </a>
  );
}
