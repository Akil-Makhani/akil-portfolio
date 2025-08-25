import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import ExperienceItem from "../components/ExperienceItem";
import SkillBadge from "../components/SkillBadge";

export default function Home() {
  return (
    <>
      <Head>
        <title>Akil Makhani — React.js Developer Portfolio</title>
        <meta name="description" content="React.js / Next.js developer portfolio of Akil Makhani. E‑commerce specialist. 4+ years of experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Akil Makhani — React.js Developer Portfolio" />
        <meta property="og:description" content="React.js / Next.js developer portfolio of Akil Makhani. E‑commerce specialist. 4+ years of experience." />
      </Head>

      <Header />

      {/* HERO */}
      <section className="section">
        <div className="container-wide grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to opportunities
  

          </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
              Building fast, scalable apps with{" "}
              <span className="bg-gradient-to-br from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                React & Next.js
              </span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              I’m Akil Makhani, a React.js Developer with 4.1+ years of experience in e‑commerce,
              performance optimization (90+ PageSpeed desktop), and leading hybrid teams.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="badge">View Projects</a>
              <a href="#contact" className="badge">Contact Me</a>
  
           

          </div>
            <div className="mt-6 text-slate-400 text-sm">
              <a className="link" href="mailto:akilmakhani2@gmail.com">akilmakhani2@gmail.com</a> • +91 7600963904
  
           

          </div>

            

          </div>
          <div className="md:justify-self-end">
            <div className="relative h-64 md:h-80 w-full">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/30 to-indigo-500/30 blur-2xl" />
              <div className="relative h-full w-full rounded-3xl border border-slate-800 bg-slate-900/60 flex items-center justify-center">
                <img src="/profile2.jpeg" alt="Akil Makhani" className="h-[500px] w-[350px] object-cover rounded-3xl"/>
    

          </div>
  
            

          </div>

            

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section border-t border-slate-800">
        <div className="container-wide grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold">About</h2>

           

          </div>
          <div className="md:col-span-2 space-y-4">
            <p className="text-slate-300">
              Experienced React.js Developer with strong knowledge of the React lifecycle, state management,
              and modern front‑end tooling. I ship clean, modular code and collaborate closely with product and PMs to hit milestones.
            </p>
            <p className="text-slate-300">
              Comfortable working under pressure and in hybrid teams. Quick learner with excellent analytical and communication skills.
            </p>

           

          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section border-t border-slate-800">
        <div className="container-wide">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <SkillBadge>React.js</SkillBadge>
            <SkillBadge>Next.js</SkillBadge>
            <SkillBadge>JavaScript</SkillBadge>
            <SkillBadge>Talwind CSS</SkillBadge>
            <SkillBadge>Node.js</SkillBadge>
            <SkillBadge>HTML</SkillBadge>
            <SkillBadge>CSS</SkillBadge>
            <SkillBadge>JSX</SkillBadge>
            <SkillBadge>Redux</SkillBadge>
            <SkillBadge>PostgreSQL</SkillBadge>
            <SkillBadge>PGAdmin</SkillBadge>
            <SkillBadge>Git</SkillBadge>
            <SkillBadge>Fabric.js</SkillBadge>

           

          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section border-t border-slate-800">
        <div className="container-wide space-y-6">
          <h2 className="text-2xl font-bold">Experience</h2>

          <ExperienceItem
            role="Team Lead & React.js Developer"
            company="Hostel Mixdorm Private Limited — Mixdorm Startup of India"
            period="2025 – Present"
            points={[
              "Leading web development for Mixdorm; mentoring developers and guiding technical decisions.",
              "Driving performance, accessibility, and code quality across the app.",
            ]}
          />

          <ExperienceItem
            role="React.js Developer"
            company="Commercepundit Pvt."
            period="2021 – 2025"
            points={[
              "Built scalable e‑commerce platforms with Next.js & React.js.",
              "Achieved 90+ PageSpeed (desktop) on key projects with performance best practices.",
              "Collaborated with PMs to meet ambitious but realistic milestones.",
              "Participated across SDLC from requirements to production releases.",
            ]}
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section border-t border-slate-800">
        <div className="container-wide">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
           <ProjectCard
              title="Mixdorm.com"
              link="https://mixdorm.com/"
              desc="Hostel booking platform built from scratch using Next.js."
              bullets={[
                "Designed and developed complete booking system",
                "Built with Next.js, optimized for performance"
              ]}
            />
            <ProjectCard
              title="Simpl"
              link="https://www.simpliot.com/"
              desc="E‑commerce marketplace built with Next.js and React. Focused on performance and Lighthouse."
              bullets={[
                "Achieved 90+ PageSpeed score on desktop",
                "Implemented modern, modular architecture"
              ]}
            />
            <ProjectCard
              title="Autoparts 4 Less"
              link="https://www.autoparts4less.com/"
              desc="Marketplace with B2B program and ElasticSearch integrations."
              bullets={[
                "Implemented B2B features and search UX",
                "Improved discoverability and product filtering"
              ]}
            />
            <ProjectCard
              title="Chemex Coffee Maker"
              link="https://www.chemexcoffeemaker.com/"
              desc="Commerce site with clean UI and optimized performance."
            />
            <ProjectCard
              title="Rockstar Passes"
              link="https://www.rockstarpasses.com/"
              desc="Ticketing/e‑commerce platform built with Next.js and React."
            />

           

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section border-t border-slate-800">
        <div className="container-wide grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="mt-4 text-slate-300">
              Want to collaborate or discuss an opportunity? Drop me a line.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="badge" href="mailto:akilmakhani2@gmail.com">akilmakhani2@gmail.com</a>
              <span className="badge">+91 7600963904</span>
              <a className="badge" href="https://www.linkedin.com/in/akil-makhani-974a6a153" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="badge" href="https://github.com/Akil-Makhani?tab=repositories" target="_blank" rel="noreferrer">GitHub</a>
  
            

          </div>

           

          </div>
          <div className="md:col-span-1">
            <div className="card">
              <h3 className="font-semibold">Quick Facts</h3>
              <ul className="mt-3 space-y-2 text-slate-300">
                <li>4.1+ years of experience</li>
                <li>React.js, Next.js, Redux, PostgreSQL</li>
                <li>Best Performer Award (Dev Dept.)</li>
              </ul>
  
            

          </div>

           

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
