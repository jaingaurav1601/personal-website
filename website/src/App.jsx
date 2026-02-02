import React, { useState, useRef, useEffect } from 'react'

const GauravBot = ({ knowledgeBase }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Gaurav-Bot. Ask me anything about Gaurav's background!", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages([...messages, { text: userMsg, sender: "user" }]);
    setInput("");

    // Simple matching logic for the bot
    setTimeout(() => {
      let response = "That's a great question! Gaurav is experienced in Quant Analysis, ML, and Blockchain. For more specific details, feel free to check out his LinkedIn.";

      const lowerInput = userMsg.toLowerCase();
      if (lowerInput.includes("goldman") || lowerInput.includes("work") || lowerInput.includes("experience")) {
        response = "Gaurav is currently an Associate (previously Quant Analyst) at Goldman Sachs. He works on tail risk modeling, Monte Carlo simulations, and stress testing for Real Estate and Private Equity deals.";
      } else if (lowerInput.includes("education") || lowerInput.includes("college") || lowerInput.includes("iit")) {
        response = "Gaurav graduated from IIT Kharagpur in 2024 with an Integrated M.Sc in Mathematics and Computing. He maintained a strong CGPA of 8.70.";
      } else if (lowerInput.includes("projects") || lowerInput.includes("build")) {
        response = "He has built sophisticated projects including blockchain security systems using cryptographic accumulators and an AI solver for sliding puzzles using the IDA* algorithm.";
      } else if (lowerInput.includes("penn state") || lowerInput.includes("internship")) {
        response = "At Penn State, he was a Research Intern who analyzed human trafficking hashtags using scraping and visualization tools like Matplotlib.";
      } else if (lowerInput.includes("skills") || lowerInput.includes("code")) {
        response = "Gaurav is proficient in C, C++, Python, and Matlab. He also works with PyTorch, Pandas, and OpenCV.";
      } else if (lowerInput.includes("awards") || lowerInput.includes("rank")) {
        response = "Gaurav achieved AIR 1117 in JEE Advanced and 430 in JEE Mains. He's also a Codeforces Expert and a KVPY scholar.";
      }

      setMessages(prev => [...prev, { text: response, sender: "bot" }]);
    }, 600);
  };

  return (
    <div className="bot-container">
      <button className="bot-fab" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "💬"}
      </button>
      {isOpen && (
        <div className="bot-window">
          <div className="bot-header">
            <span style={{ fontWeight: 600 }}>Gaurav-Bot</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)' }}>Online</span>
          </div>
          <div className="bot-messages">
            {messages.map((m, i) => (
              <div key={i} className={`message m-${m.sender}`}>{m.text}</div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="bot-input">
            <input
              type="text"
              placeholder="Ask me something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} className="btn-primary" style={{ padding: '0.4rem 0.8rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>↑</button>
          </div>
        </div>
      )}
    </div>
  );
};

function App() {
  const experiences = [
    {
      company: "Goldman Sachs",
      role: "Associate | Quantitative Analyst",
      date: "Jul 2024 -- Present",
      bullets: [
        "Promoted to Associate following high-impact contributions to risk modeling and shortfall quantification.",
        "Lead developer for cross-asset tail risk models, ensuring robust pricing under extreme market volatility.",
        "Designed and implemented a tail risk model for Direct Commercial Real Estate Loans, incorporating evolving collateral prices to trigger margin calls.",
        "Developed a statistical fallback model for Private Equity Capital Call deals, reducing computation latency by 90%.",
        "Built multipath Monte Carlo simulations based on Geometric Brownian Motion for Indirect CRE deals.",
        "Engineered regression-based hazard rate models using Trepp datasets for stressed tail scenarios."
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
      title: "Blockchain Security & Privacy",
      date: "Oct 2023 -- May 2024",
      description: "Implemented cryptographic accumulators to enhanced ring signature algorithm for fine-grained access control. Developed scalable blockchain architecture using CP-ABE & smart contracts.",
      tags: ["Blockchain", "Cryptography", "Smart Contracts"]
    },
    {
      title: "AI Visuospatial Problem Solver",
      date: "Jan 2021 -- May 2022",
      description: "Built a website to play the classic sliding puzzle game and developed an AI solver using IDA* search algorithm and analyzed with mango metric analysis.",
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
        <div className="gradient-blob blob-3"></div>
      </div>

      <GauravBot />

      <header>
        <div style={{ marginBottom: '2rem' }}>
          <span className="tag" style={{ border: '1px solid var(--accent-secondary)', color: 'var(--accent-secondary)' }}>Available for Projects</span>
        </div>
        <h1>Gaurav Jain</h1>
        <p className="hero-sub">Associate at Goldman Sachs | Quant Researcher | IIT Kharagpur Alumnus</p>

        <div className="bio-text">
          <p>Driven by the intersection of <strong>high-level mathematics</strong> and <strong>financial engineering</strong>, I specialize in building robust tail-risk models and scalable AI systems. From IIT Kharagpur to the trading floors of Goldman Sachs, I’ve dedicated my career to quantifying the unknown.</p>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/gaurav-jain1601/" className="btn btn-primary" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:jaingauravgj16@gmail.com" className="btn btn-outline">Gmail</a>
          <button onClick={() => window.scrollTo(0, document.body.scrollHeight)} className="btn btn-outline">Get in Touch</button>
        </div>
      </header>

      <section id="about">
        <h2 className="section-title">About Me</h2>
        <div className="card">
          <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
            I am a Mathematics and Computing graduate from the Indian Institute of Technology Kharagpur, currently working as an Associate at Goldman Sachs.
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            My expertise lies in quantitative finance, stochastic processes, and machine learning. I have a proven track record of developing complex mathematical models for risk assessment, particularly in commercial real estate and private equity. Beyond finance, I am deeply interested in blockchain security and competitive programming, where I hold an Expert rating on Codeforces.
          </p>
        </div>
      </section>

      <section id="experience">
        <h2 className="section-title">Professional Experience</h2>
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
        <h2 className="section-title">Key Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div key={i} className="card project-card">
              <div className="edu-year" style={{ marginBottom: '1rem' }}>{proj.date}</div>
              <h3>{proj.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{proj.description}</p>
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
        <h2 className="section-title">Academic Background</h2>
        <div className="card">
          <div className="edu-list">
            {education.map((edu, i) => (
              <div key={i} className="edu-item">
                <div className="edu-top">
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.2rem' }}>{edu.degree}</div>
                  <div className="edu-year">{edu.year}</div>
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>{edu.institute}</div>
                <div style={{ fontWeight: 600, color: 'var(--accent-secondary)', marginTop: '0.5rem' }}>{edu.gpa}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="card">
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Programming</h4>
              <div className="skill-items">
                {["C", "C++", "Python", "Matlab", "Slang"].map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
            <div className="skill-category">
              <h4>Tools & Libraries</h4>
              <div className="skill-items">
                {["Pandas", "PyTorch", "OpenCV", "SecDB", "Git"].map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
            <div className="skill-category">
              <h4>Quants & Finance</h4>
              <div className="skill-items">
                {["Stochastic Processes", "Risk Modeling", "Monte Carlo", "Linear Algebra"].map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Gaurav Jain</p>
        <p>© {new Date().getFullYear()} — Built with passion for Math & Code.</p>
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <a href="https://www.linkedin.com/in/gaurav-jain1601/" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
          <a href="mailto:jaingauravgj16@gmail.com" style={{ color: 'var(--text-secondary)' }}>Email</a>
        </div>
      </footer>
    </div>
  )
}

export default App
