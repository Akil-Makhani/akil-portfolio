export default function ExperienceItem({ role, company, period, points = [] }) {
  return (
    <div className="card">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h3 className="text-lg font-semibold">{role} <span className="text-slate-400">• {company}</span></h3>
        <span className="badge">{period}</span>
      </div>
      {points?.length > 0 && (
        <ul className="mt-3 list-disc ml-4 space-y-1 text-slate-300">
          {points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      )}
    </div>
  );
}
