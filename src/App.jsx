import { useState } from "react";
import avatar from "./assets/avatar.jpg";
import hero from "./assets/hero.jpg";

// Contact form email: get a free access key at https://web3forms.com (enter your email there).
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "";
const AVATAR = avatar;
const HERO = hero;

const I = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);
const Phone = () => <I><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></I>;
const Mail = () => <I><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></I>;
const Linkedin = () => <I><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></I>;
const Github = () => <I><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></I>;

const CONTACTS = [
  { label: "Phone", value: "+91 85550 40810", href: "tel:+918555040810", copy: "+918555040810", Icon: Phone },
  { label: "Email", value: "kvsaisiddhardha2117@gmail.com", href: "mailto:kvsaisiddhardha2117@gmail.com", copy: "kvsaisiddhardha2117@gmail.com", Icon: Mail },
  { label: "LinkedIn", value: "/venkatasaisiddhardhakorada", href: "https://linkedin.com/in/venkatasaisiddhardhakorada", copy: "https://linkedin.com/in/venkatasaisiddhardhakorada", Icon: Linkedin, ext: true },
  { label: "GitHub", value: "/thesiddhh", href: "https://github.com/thesiddhh", copy: "https://github.com/thesiddhh", Icon: Github, ext: true },
];
const SKILLS = ["Spring Boot", "Java", "React", "HTML", "CSS", "MySQL", "Git", "GitHub"];

function Nav() {
  return (
    <nav aria-label="Main">
      <a href="#home" className="brand">
        <span className="avatar"><img src={AVATAR} alt="Siddhardha" /></span>
        <b>SIDDHARDHA<i className="dot"></i></b>
      </a>
      <div className="links"><a href="#home">Home</a><a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
      <div className="btns">
        <a className="btn res" href="/Siddhardha_Resume.pdf" download="Siddhardha_Resume.pdf" aria-label="Download resume"><span className="rt">Resume</span><svg className="ri" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16" /></svg></a>
        <a className="btn solid" href="#contact">Get in touch</a>
      </div>
    </nav>
  );
}

const Hero = () => (
  <header className="hero" id="home">
    <img className="photo" src={HERO} alt="Siddhardha" />
    <span className="script s1">Portfolio</span>
    <h1 className="name">SIDDHARDHA</h1>
  </header>
);

const About = () => (
  <section id="about"><div className="wrap">
    <h2>About <i>me</i></h2>
    <div className="about">
      <div>
        <p className="lead">I’m a third-year engineering student who likes turning ideas into working software. <em>Backend first, with interfaces that feel as good as they run.</em></p>
        <div className="chips" aria-label="Skills">{SKILLS.map(s => <span className="chip" key={s}>{s}</span>)}</div>
        <div style={{ marginTop: 28 }}><a className="btn solid" href="/Siddhardha_Resume.pdf" target="_blank" rel="noopener">Download resume</a></div>
      </div>
      <div className="facts">
        <div><span>Full name</span><b>Venkata Sai Siddhardha Korada</b></div>
        <div><span>Education</span><b>B.Tech, 3rd year<br />St. Martin’s Engineering College, Hyderabad</b></div>
        <div><span>Backend</span><b>Java, Spring Boot, MySQL</b></div>
        <div><span>Frontend</span><b>React, HTML, CSS</b></div>
        <div><span>Tools</span><b>Git, GitHub</b></div>
      </div>
    </div>
  </div></section>
);

const EVENT_LINES = [["OrderService", "ORDER_CREATED"], ["InventoryService", "STOCK_RESERVED"], ["PaymentService", "PAYMENT_DONE"]];

const CAMPUS_LINES = [["9:00 Data Structures", "Room 204"], ["11:00 DBMS Lab", "Lab 3"], ["2:00 Hackathon briefing", "Seminar Hall"]];

const PROJECTS = [
  {
    title: "Face Attendance System",
    desc: "A web app that recognises a student’s face and records attendance automatically, so no one calls out names or signs a sheet.",
    points: ["Face recognition check-in with a time-stamped record", "Spring Boot REST API with MySQL storage", "Role-based login for admin and faculty", "React dashboard with daily and monthly reports"],
    tags: ["Spring Boot", "Java", "React", "MySQL", "OpenCV"],
    live: "#",
  },
  {
    title: "OrderFlow",
    lines: EVENT_LINES,
    desc: "An e-commerce backend split into small services that talk through events, so an order keeps moving even when one service is slow.",
    points: ["API gateway that checks the JWT before any service runs", "Order, inventory and payment services linked by Kafka events", "A failed payment releases the reserved stock automatically", "One docker compose command starts the whole system"],
    tags: ["Spring Boot", "Spring Cloud Gateway", "Kafka", "MySQL", "Docker", "JWT"],
    live: "#",
  },
  {
    title: "EduX",
    lines: CAMPUS_LINES,
    desc: "A campus platform where students share notes, check timetables and catch events in one place, so nothing important gets lost in group chats.",
    points: ["Role-based access for students, faculty and admins", "Notes and resources sorted by branch, semester and subject", "Timetable, announcements and event registrations", "Spring Boot REST API with MySQL and a React front end"],
    tags: ["Spring Boot", "Spring Security", "JWT", "React", "MySQL", "Docker"],
    live: "#",
  },
];

function Projects() {
  const [open, setOpen] = useState(-1);
  return (
    <section id="projects" style={{ paddingTop: 20 }}><div className="wrap">
      <h2>Selected <i>work</i></h2>
      <div className="pcs" onMouseLeave={() => setOpen(-1)}>
        {PROJECTS.map((p, i) => (
          <article key={p.title} tabIndex={0}
            className={"pc" + (open === i ? " open" : "") + (p.soon ? " soon" : "")}
            onMouseEnter={() => setOpen(i)} onFocus={() => setOpen(i)} onBlur={() => setOpen(-1)}>
            <div className="shot">
              {p.lines ? (
                <div className="api" aria-hidden="true">{p.lines.map(([a, b]) => <div key={a}><span>{a}</span><b>{b}</b></div>)}</div>
              ) : (
                <div className="face" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"><circle cx="12" cy="9" r="4" /><path d="M4 21c1-4.5 4-6.5 8-6.5s7 2 8 6.5" /></svg>
                  <span className="ok">Attendance marked</span>
                </div>
              )}
              <h3 className="ptitle">{p.title}</h3>
            </div>
            <div className="info"><div className="in">
              <p>{p.desc}</p>
              {p.points && <ul>{p.points.map(x => <li key={x}>{x}</li>)}</ul>}
              {p.tags && <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>}
              <div className="acts">
                <a className="btn solid" href="https://github.com/thesiddhh" target="_blank" rel="noopener" tabIndex={open === i ? 0 : -1}>View on GitHub</a>
                {p.live && <a className="btn live" href={p.live} target="_blank" rel="noopener" tabIndex={open === i ? 0 : -1} onClick={e => { if (p.live === "#") e.preventDefault(); }}>Live preview</a>}
              </div>
            </div></div>
          </article>
        ))}
      </div>
    </div></section>
  );
}

function Contact() {
  const [copied, setCopied] = useState("");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  const copy = async c => {
    try { await navigator.clipboard.writeText(c.copy); setCopied(c.label); setTimeout(() => setCopied(""), 1600); } catch (e) {}
  };

  const submit = async e => {
    e.preventDefault();
    const f = e.target;
    const data = Object.fromEntries(new FormData(f));
    setBusy(true); setMsg("Sending…");
    try {
      if (!WEB3FORMS_KEY) {
        location.href = "mailto:kvsaisiddhardha2117@gmail.com?subject=" + encodeURIComponent("Portfolio message from " + data.name) +
          "&body=" + encodeURIComponent(data.message + "\n\n" + data.name + "\n" + data.email);
        setMsg("Email key not set yet, so I opened your email app instead.");
      } else {
        const r = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject: "Portfolio message from " + data.name, name: data.name, email: data.email, message: data.message }),
        });
        const res = await r.json();
        if (!res.success) throw new Error("bad");
        setMsg("Message sent. I’ll reply soon."); f.reset();
      }
    } catch (err) { setMsg("Couldn’t send. Email me directly at kvsaisiddhardha2117@gmail.com."); }
    setBusy(false);
  };

  return (
    <section className="contact" id="contact"><div className="wrap">
      <h2>Let’s build<br />something <i>great.</i></h2>
      <div className="cgrid">
        <div className="cards">
          {CONTACTS.map(c => (
            <div className="cc" key={c.label}>
              <a className="cc-main" href={c.href} {...(c.ext ? { target: "_blank", rel: "noopener" } : {})}>
                <span className="ico"><c.Icon /></span>
                <span><small>{c.label}</small><span className="val">{c.value}</span></span>
                <span className="go">↗</span>
              </a>
              <button type="button" className="copy" onClick={() => copy(c)}>{copied === c.label ? "Copied" : "Copy"}</button>
            </div>
          ))}
        </div>
        <form className="formbox" onSubmit={submit}>
          <p className="ft">Hiring or collaborating?</p>
          <div className="two">
            <input name="name" placeholder="Your name" required autoComplete="name" />
            <input name="email" type="email" placeholder="Your email" required autoComplete="email" />
          </div>
          <textarea name="message" placeholder="Tell me about the role, team or opportunity" required />
          <button type="submit" disabled={busy}>Send message</button>
          <p id="msg" role="status">{msg}</p>
        </form>
      </div>
    </div></section>
  );
}

const Footer = () => (
  <footer><div className="wrap">
    <div className="big">Siddhardha</div>
    <p>© 2026 Venkata Sai Siddhardha Korada.</p>
  </div></footer>
);

const App = () => (<><Nav /><Hero /><About /><Projects /><Contact /><Footer /></>);
export default App;
