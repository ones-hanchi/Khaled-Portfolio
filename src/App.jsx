import "./App.css";
function App() {
  return (
    <div className="portfolio">
     
      <div className="animated-background" aria-hidden="true">
        {Array.from({ length: 24 }, (_, i) => (
          <span
            key={i}
            className={`particle particle-${(i % 8) + 1}`}
          />
        ))}
        <div className="glow glow-one" />
        <div className="glow glow-two" />
        <div className="glow glow-three" />
      </div>
      <header className="navbar">
        <a href="#home" className="logo"></a>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
        </nav>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            
            <p className="intro">Hello, I'm</p>
            <h1>
              KHALED 
            </h1>
            <h2>
              Backend Software Engineer
              <span className="outline-text">
                {" "} & Technical Lead
              </span>
            </h2>
            <p className="hero-description">
              Building reliable backend systems, designing
              scalable solutions, and leading technical
              initiatives to turn complex ideas into
              practical software.
            </p>
            
           <div className="hero-actions">
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=hmammikhaled@gmail.com"
    className="contact-button"
    target="_blank"
    rel="noopener noreferrer"
  >
    Contact Me <span>↗</span>
  </a>
</div>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/hammamikhaled"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/khaledhmammi"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="image-decoration decoration-one" />
            <div className="image-decoration decoration-two" />
            <div className="image-frame">
              <img
                src="/photo.jpg"
                alt="Backend Software Engineer and Technical Lead"
              />
            </div>
          </div>
        </section>
        <section className="content-section" id="about">
          <div className="about-heading">
            <h2>
              Building systems.
              <br />
              <span>Leading solutions.</span>
            </h2>
          </div>
          <div className="about-content">
            <p className="section-description">
I'm a dedicated Back-End programer who have been writing software for more than a decade and have a passion for problem-solving and continuous learning. <br />
I value depth, consistency, and long-term mastery over shortcuts or surface level learning
            </p>
          </div>
        </section>
        <section className="languages-section" id="languages">
  <div className="section-heading">
    <p>Languages I work with to build software and solve problems.</p>
  </div>

  <div className="languages-grid">
    {[
      "Python",
      "Go",
      "C++",
      "TypeScript",
      "Java",
      "x86 Assembly",
    ].map((language) => (
      <div className="language-card" key={language}>
        
        <h3>{language}</h3>
      </div>
    ))}
  </div>
</section>
      </main>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} khaledhammami
        </p>
      </footer>
    </div>
  );
}
export default App;
