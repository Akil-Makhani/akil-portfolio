export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-16">
      <div className="container-wide py-10 text-sm text-slate-400">
        <p>&copy; {new Date().getFullYear()} Akil Makhani. Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
