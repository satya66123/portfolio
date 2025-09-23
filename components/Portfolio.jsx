import React from "react";

/*
Mobile-friendly, corrected Next.js + Tailwind Portfolio component.
Replace your existing components/Portfolio.jsx with this file.
Notes:
- Header is black with white text (per your request).
- Top-level uses a blue gradient background.
- Mobile menu is accessible and full-featured.
- Project cards and sections are responsive for small screens.
*/

const projects = [
  {
    id: 1,
    title: "TaskManager (MERN + MySQL)",
    desc: "A full-stack task manager with JWT auth, role-based access, and CSV export.",
    tech: ["Mongo DB", "Express", "Node", "React", "html5", "css"],
    live: "#",
    repo: "#",
    image: "/images/taskmanager.png",
  },
  {
    id: 2,
    title: "Student Portal (CodeIgniter)",
    desc: "CRUD app for student records with file uploads and admin panel.",
    tech: ["CodeIgniter", "MySQL", "Bootstrap", "PHP"],
    live: "#",
    repo: "#",
    image: "/images/codeigniter.png",
  },
  {
    id: 3,
    title: "Inventory API (Spring Boot)",
    desc: "REST API with JWT auth and Swagger documentation.",
    tech: ["Spring Boot", "MySQL", "Java", "Hibernate"],
    live: "#",
    repo: "#",
    image: "/images/springboot.png",
  },
  {
    id: 4,
    title: "GenAI Resume Summarizer",
    desc: "Upload resume → get concise job-tailored bullets using prompt-engineering.",
    tech: ["python", "OpenAI", ""],
    live: "#",
    repo: "#",
    image: "/images/genai.png",
  },
];

function Navbar() {
  return (
    <nav className="w-full py-4 bg-black text-white fixed top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-lg md:text-xl font-semibold">Satya Srinath Nekkanti</div>
        </div>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
          <a
            href="/resume.pdf"
            className="px-3 py-1.5 border border-white rounded-md text-sm hover:bg-white hover:text-black transition"
          >
            Resume
          </a>
        </div>

        {/* mobile menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  // close on route change / click outside could be added later
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((s) => !s)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
      >
        {/* hamburger */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!open ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 top-12 w-56 bg-black/95 text-white rounded-lg shadow-lg ring-1 ring-white/10 p-4"
          role="menu"
        >
          <a href="#projects" onClick={() => setOpen(false)} className="block py-2 hover:text-gray-300">
            Projects
          </a>
          <a href="#about" onClick={() => setOpen(false)} className="block py-2 hover:text-gray-300">
            About
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="block py-2 hover:text-gray-300">
            Contact
          </a>
          <a
            href="/resume.pdf"
            onClick={() => setOpen(false)}
            className="block mt-2 px-3 py-2 border border-white rounded-md text-center hover:bg-white hover:text-black transition"
          >
            Resume
          </a>
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <header className="pt-28 pb-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-sky-300">Hi, I’m</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2 text-white">Satya Srinath — Full Stack & GenAI developer</h1>
          <p className="mt-4 text-sky-100 max-w-xl">
            Full Stack Developer with 8+ years of experience in Java, PHP, scalable web apps, and AI solutions.

            <ul>
              <li>Skilled in Generative AI, NLP, Prompt Engineering, and Transformers.</li>

              <li>Built and deployed an AI Summarizer project for intelligent text processing.</li>

              <li>Strong backend expertise with Spring Boot, Hibernate, CodeIgniter, and databases (MySQL, MongoDB).</li>

              <li>Passionate about building AI/ML-driven applications and optimizing system performance.</li>
            </ul>
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-4 py-2 bg-sky-600 text-white rounded-md">
              See projects
            </a>
            <a href="/resume.pdf" className="px-4 py-2 border border-white rounded-md text-white hover:bg-white hover:text-black transition">
              Download resume
            </a>
          </div>

          <div className="mt-6 flex gap-3 text-sm text-sky-200">
            <span>Open to: Remote internships  • MERN • GenAI</span>
            <span>Open to: Remote Jobs  • Java • PHP</span>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-56 h-56 md:w-64 md:h-64 bg-gradient-to-br from-sky-200/60 to-white/30 rounded-2xl shadow-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-200 mx-auto mb-3" />
              <div className="font-semibold text-white/90">Satya Srinath Nekkanti</div>
              <div className="text-xs text-white/80">Full-stack & AI</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ProjectCard({ p }) {
  return (
    <article className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl shadow-sm p-5 hover:shadow-md transition flex flex-col">
      <div className="h-40 rounded-md bg-white/5 flex items-center justify-center overflow-hidden">
        {/* If you have images, use next/image in production */}
        <div className="text-sky-200">Image</div>
      </div>

      <h3 className="mt-4 font-semibold text-lg text-white">{p.title}</h3>
      <p className="mt-2 text-sm text-sky-200 flex-1">{p.desc}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map((t, i) => (
          <span key={i} className="text-xs px-2 py-1 border border-white/10 rounded-full text-sky-100">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-3">
        <a href={p.live} className="text-sm px-3 py-1 border border-white/10 rounded-md text-sky-100 hover:bg-white/5">
          Live
        </a>
        <a href={p.repo} className="text-sm px-3 py-1 border border-white/10 rounded-md text-sky-100 hover:bg-white/5">
          GitHub
        </a>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold text-white">Projects</h2>
        <p className="mt-2 text-sky-200">Featured projects — click live to open demos and GitHub to view code.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="px-4 py-2 border border-white/20 rounded-md text-white hover:bg-white/5">
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-12">
      <div className="max-w-5xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">About</h2>
          <p className="mt-4 text-sky-200">
            I’m a software engineer focused on building reliable full-stack apps and practical AI tools. I enjoy building products that automate repetitive tasks and improve developer productivity.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-sky-200">
            <li>
              <strong>Skills:</strong> JavaScript, Node.js, React, Next.js, Express, MySQL, Sequelize, PHP (CodeIgniter), Java (Spring Boot), Tailwind CSS, GenAI
            </li>
            <li>
              <strong>What I’m looking for:</strong> Remote internships or entry-level roles in MERN / Full-stack / AI tooling.
            </li>
          </ul>
        </div>

        <div>
          <div className="bg-white/5 rounded-2xl shadow p-6">
            <h3 className="font-semibold text-white">Contact</h3>
            <p className="text-sm text-sky-200 mt-2">
              Email:{" "}
              <a href="mailto:satyasrinath6@gmail.com" className="text-sky-300">
                satyasrinath6@gmail.com
              </a>
            </p>
            <p className="text-sm text-sky-200">Phone: 7396531602</p>
            <div className="mt-4 text-sky-200">
              <a href="https://github.com/yourname" className="block hover:underline">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/yourprofile" className="block mt-1 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold text-white">Get in touch</h2>
        <p className="mt-2 text-sky-200">I’m open to internships and collaboration. Send a short message below and I’ll respond.</p>

        <form className="mt-6 grid gap-4">
          <input className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white" placeholder="Your name" />
          <input className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white" placeholder="Your email" />
          <textarea className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white" rows="4" placeholder="Message" />
          <div>
            <button type="button" className="px-4 py-2 bg-sky-600 text-white rounded-md">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 bg-black/80 mt-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center text-sm text-sky-200">© {new Date().getFullYear()} Satya Nani • Built with Next.js & Tailwind</div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 via-blue-600 to-blue-400 text-white">
      <Navbar />
      <main className="pt-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <Hero />
          <Projects />
          <About />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
