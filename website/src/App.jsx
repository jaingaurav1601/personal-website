import React from 'react'

function App() {
  const experiences = [
    {
      company: "Goldman Sachs",
      role: "Quantitative Analyst",
      date: "Jul 2024 -- Present",
      bullets: [
        "Designed and implemented a tail risk model for Direct Commercial Real Estate Loans, incorporating evolving collateral prices to trigger margin calls and modeling mortgage price shortfalls under severely stressed scenarios.",
        "Developed a statistical and mathematical fallback model for Private Equity Capital Call deals which fail to pass through the bespoke model, reducing shortfall computation latency by 90% with minimal data requirements.",
        "Built a multipath Monte Carlo simulation model on Geometric Brownian Motion to quantify expected tail risk shortfalls for Indirect Commercial Real Estate deals.",
        "Developed a regression based model to compute hazard rates in severely stressed tail scenarios using Trepp data."
      ]
    },
    {
      company: "Goldman Sachs",
      role: "Summer Analyst Intern",
      date: "Jun 2023 -- Aug 2023",
      bullets: [
        "Conducted in-depth analysis and visualization of CMBS and CRE price time series enhancing OAS calibration.",
        "Implemented advanced statistical methods to recalibrate OAS time series, reducing discrepancies by over 30%."
      ]
    },
    {
      company: "Pennsylvania State University",
      role: "Research Intern",
      date: "May 2021 -- Jul 2021",
      bullets: [
        "Identified and analyzed 30+ human trafficking hashtags, scraping and visualizing metadata with Matplotlib.",
        "Launched a live Twitter campaign reaching 10k+ users, enhancing engagement and boosting awareness."
      ]
    }
  ];

  const projects = [
    {
      title: "Enhancing Permissioned Blockchain Security",
      date: "Oct 2023 -- May 2024",
      description: "Implemented cryptographic accumulators to enhanced ring signature algorithm for fine-grained access control. Developed scalable blockchain architecture using CP-ABE & smart contracts.",
      tags: ["Blockchain", "Cryptography", "Smart Contracts"]
    },
    {
      title: "Synergy in Human v. Machine Visuospatial Solving",
      date: "Jan 2021 -- May 2022",
      description: "Built a website to play the classic sliding puzzle game, deployed on Heroku, and integrated with Firebase. Developed an AI solver using IDA* search algorithm.",
      tags: ["AI", "Search Algorithms", "React", "Firebase"]
    }
  ];

  const education = [
    { year: "2024", degree: "Integrated M.Sc in Mathematics and Computing", institute: "IIT Kharagpur", gpa: "8.70 / 10.00" },
    { year: "2019", degree: "Class XII (CBSE)", institute: "Disha Delphi Public School", gpa: "91.8%" },
    { year: "2017", degree: "Class X (CBSE)", institute: "St. Anthony's Sr. Sec. School", gpa: "10.00 / 10.00" }
  ];

  return (
    <div className="app-container">
      <div className="gradient-bg">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
      </div>

      <header>
        <h1>Gaurav Jain</h1>
        <p className="hero-sub">Quantitative Analyst at Goldman Sachs | IIT Kharagpur '24</p>
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Mathematics & Computing graduate with a passion for quantitative modeling, blockchain, and AI.</p>
        
        <div className="social-links">
          <a href="https://www.linkedin.com/in/gaurav-jain1601/" className="btn btn-primary" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:jaingauravgj16@gmail.com" className="btn btn-outline">Gmail</a>
          <a href="/cv.pdf" className="btn btn-outline">Download CV</a>
        </div>
      </header>

      <section id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="card">
          {experiences.map((exp, i) => (
            <div key={i} className="exp-item">
              <div className="exp-header">
                <div>
                  <div className="exp-title">{exp.role}</div>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <div className="exp-date">{exp.date}</div>
              </div>
              <ul className="exp-list">
                {exp.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div key={i} className="card project-card">
              <div className="exp-date" style={{ marginBottom: '0.5rem' }}>{proj.date}</div>
              <h3>{proj.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{proj.description}</p>
              <div className="project-tags">
                {proj.tags.map((tag, j) => (
                  <span key={j} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="education">
        <h2 className="section-title">Education</h2>
        <div className="card">
          <div className="edu-list">
            {education.map((edu, i) => (
              <div key={i} className="edu-item">
                <div className="edu-year">{edu.year}</div>
                <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{edu.degree}</div>
                <div>{edu.institute}</div>
                <div style={{ textAlign: 'right', fontWeight: 600 }}>{edu.gpa}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <h2 className="section-title">Technical Skills</h2>
        <div className="card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <h4 style={{ marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Languages</h4>
            <p style={{ color: 'var(--text-secondary)' }}>C, C++, Python, Matlab, Slang</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Libraries</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Pandas, PyTorch, OpenCV, SecDB</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Expertise</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Stochastic Processes, Quantitative Finance, ML, Blockchain</p>
          </div>
        </div>
      </section>

      <footer style={{ marginTop: '8rem', paddingBottom: '4rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
        <p>© {new Date().getFullYear()} Gaurav Jain. Built with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App
