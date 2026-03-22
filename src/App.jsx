const skills = [
  {
    title: "Frontend Development",
    items:
      "React.js, Next.js, JavaScript (ES6+), TypeScript, Redux, Tailwind CSS, HTML5, Sass, Bootstrap, Microfrontend Architecture, Styled Components"
  },
  {
    title: "MERN Stack",
    items: "Node.js, Express.js, REST APIs, MongoDB (basic), PostgreSQL"
  },
  {
    title: "Performance Optimization",
    items: "Code splitting, lazy loading, memoization, SSR/SSG, bundle optimization, performance profiling"
  },
  {
    title: "Testing & Quality",
    items: "Jest, React Testing Library, Cypress, TDD, Unit Testing, Integration Testing"
  },
  {
    title: "Tools & Workflow",
    items: "Storybook, Agile, Visual Studio Code, Git"
  }
];

const experience = [
  {
    company: "Capgemini",
    role: "Professional 2",
    period: "June 2022 – Present",
    location: "Noida, India",
    points: [
      "Designed and maintained a scalable SIP call framework using JSSIP integrated with React and Angular, improving call stability by 30%.",
      "Built reusable React component libraries that improved team development efficiency by 40%.",
      "Resolved bottlenecks with lazy loading and code-splitting, improving application speed by 25%.",
      "Mentored junior developers and contributed to architectural planning."
    ]
  },
  {
    company: "IRIS Software",
    role: "Software Engineer",
    period: "September 2019 – June 2022",
    location: "Noida, India",
    points: [
      "Led the development of Lifemart admin tools using React and Redux, improving workflow by 25%.",
      "Delivered a microfrontend POC with Next.js, Cypress, and Jest, increasing modularity and coverage.",
      "Resolved high-priority production issues and reduced downtime by 40%."
    ]
  },
  {
    company: "Tech Mahindra",
    role: "Associate Team Lead",
    period: "January 2018 – August 2019",
    location: "Noida, India",
    points: [
      "Engineered reusable React components and responsive interfaces using CSS Grid and Flexbox.",
      "Cut page load times by 25% through lazy loading and memoization.",
      "Migrated JavaScript modules to TypeScript and enforced code quality standards."
    ]
  }
];

const projects = [
  "Bandwidth, Capgemini — ReactJS, TypeScript, Cypress, Jest, RTL, WCAG",
  "Alloy, Capgemini — ReactJS, Storybook, JavaScript, WCAG, Bootstrap 5",
  "Backup Care Connection, IRIS Software — NextJS, ReactJS, Jest, RTL, WCAG",
  "Lifemart, IRIS Software — NextJS, React, JavaScript, Jest, RTL, WCAG",
  "My Bell, Tech Mahindra — React, JavaScript, TypeScript, Jest, RTL, WCAG"
];

const education = [
  "Mangalayatan University — B.Tech (Information Technology), July 2007 – August 2011, Aligarh",
  "Private College — Intermediate (Science), July 2006 – June 2007, Aligarh",
  "D.S. Inter College — High School (Science), July 2003 – June 2004, Aligarh"
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="animate-float absolute -left-16 top-8 h-72 w-72 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="animate-float absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl [animation-delay:1.4s]" />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex w-[min(1150px,92vw)] items-center justify-between py-4">
          <p className="text-sm font-bold tracking-[0.18em] text-violet-300">VIJAY MITTAL</p>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#summary" className="hover:text-white">Summary</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#education" className="hover:text-white">Education</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto grid w-[min(1150px,92vw)] gap-6 py-8 lg:grid-cols-[320px_1fr]">
        <aside className="animate-fade-up rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-2xl backdrop-blur">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80"
            alt="Vijay Mittal"
            className="mb-4 h-28 w-28 rounded-2xl object-cover ring-2 ring-violet-400/40"
          />
          <h1 className="text-2xl font-extrabold">Vijay Mittal</h1>
          <p className="mt-2 text-sm text-cyan-300">Senior Frontend & MERN Stack Developer</p>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p>📞 7500229229</p>
            <p>✉️ vijaykmittalmu@gmail.com</p>
            <p>📍 Noida, India</p>
          </div>
          <a
            href="/Vijay-Mittal-Resume.pdf"
            download
            className="mt-6 inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-3 font-semibold text-white transition hover:scale-[1.01]"
          >
            Download Resume
          </a>
        </aside>

        <section className="space-y-5">
          <article id="summary" className="animate-fade-up delay-1 rounded-3xl border border-white/10 bg-slate-900/75 p-6 backdrop-blur">
            <h2 className="mb-3 text-xl font-bold">Professional Summary</h2>
            <ul className="list-disc space-y-2 pl-5 text-slate-300">
              <li>Senior Frontend & MERN Stack Developer with 8+ years of experience building scalable, high-performance web applications using React.js, Next.js, Node.js, and TypeScript.</li>
              <li>Strong expertise in frontend architecture, reusable component design, and performance optimization improving app speed and scalability by up to 40%.</li>
              <li>Experienced in enterprise-grade UI systems with WCAG accessibility compliance and modern design standards.</li>
              <li>Proficient in TDD and automation with Jest, React Testing Library, and Cypress.</li>
              <li>Strong communication and leadership skills with proven success in mentoring developers and driving project outcomes.</li>
            </ul>
          </article>

          <article id="skills" className="animate-fade-up delay-2 rounded-3xl border border-white/10 bg-slate-900/75 p-6 backdrop-blur">
            <h2 className="mb-4 text-xl font-bold">Technical Skills</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.title} className="rounded-2xl border border-white/10 bg-slate-800/60 p-4">
                  <h3 className="mb-2 font-semibold text-violet-300">{skill.title}</h3>
                  <p className="text-sm leading-6 text-slate-300">{skill.items}</p>
                </div>
              ))}
            </div>
          </article>

          <article id="experience" className="animate-fade-up delay-3 rounded-3xl border border-white/10 bg-slate-900/75 p-6 backdrop-blur">
            <h2 className="mb-4 text-xl font-bold">Professional Experience</h2>
            <div className="space-y-4">
              {experience.map((job) => (
                <div key={job.company} className="rounded-2xl border border-white/10 bg-slate-800/50 p-4">
                  <h3 className="text-lg font-semibold">
                    {job.company} <span className="text-cyan-300">• {job.role}</span>
                  </h3>
                  <p className="mb-2 text-sm text-slate-400">{job.period} · {job.location}</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article id="projects" className="animate-fade-up delay-4 rounded-3xl border border-white/10 bg-slate-900/75 p-6 backdrop-blur">
            <h2 className="mb-4 text-xl font-bold">Projects</h2>
            <ul className="grid gap-2 text-slate-300 sm:grid-cols-2">
              {projects.map((project) => (
                <li key={project} className="rounded-xl border border-white/10 bg-slate-800/50 p-3 text-sm">
                  {project}
                </li>
              ))}
            </ul>
          </article>

          <article id="education" className="animate-fade-up delay-5 rounded-3xl border border-white/10 bg-slate-900/75 p-6 backdrop-blur">
            <h2 className="mb-4 text-xl font-bold">Education & Awards</h2>
            <ul className="list-disc space-y-2 pl-5 text-slate-300">
              {education.map((item) => (
                <li key={item}>{item}</li>
              ))}
              <li>Bravo Awards — Exceptional performance at Tech Mahindra.</li>
              <li>Individual Performer recognition at IRIS Software.</li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}
