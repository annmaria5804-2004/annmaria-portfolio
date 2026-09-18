import "./App.css";
import profilePhoto from "./assets/ann photo.jpg";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <header className="navbar">
       <a href="#home" className="logo">
         <img src={logo} alt="Ann Maria logo" />
       </a>
      

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </header>


      {/* HERO */}
      <main>

        <section id="home" className="hero">

          <div className="hero-left">

            <p className="eyebrow">
              COMPUTER SCIENCE & DESIGN ENGINEERING
            </p>

            <h1>
              Hi, I'm <span>ANN MARIA.</span>
            </h1>

            <h2>
              Software Developer
            </h2>

            <p className="hero-text">
              I build practical software solutions with Python,
              full-stack technologies and AI/ML, with an interest
              in computer vision and immersive technologies.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                Explore My Work
              </a>

              <a
                href="https://github.com/annmaria5804-2004"
                target="_blank"
                rel="noreferrer"
                className="text-button"
              >
                GitHub ↗
              </a>
            </div>

            <div className="hero-meta">
              <span>B.Tech Graduate</span>
              <span>Python</span>
              <span>AI / ML</span>
              <span>Full-Stack</span>
            </div>

          </div>
<div className="hero-right">

  <div className="profile-card">

    <div className="profile-image-wrapper">
      <img
        src={profilePhoto}
        alt="Ann Maria"
        className="profile-image"
      />
    </div>

    <div className="profile-caption">
      <span>B.Tech CSD Graduate</span>
      <strong>Software Developer</strong>
    </div>

  </div>

</div>

        </section>


        {/* ABOUT */}
        <section id="about" className="about section">

          <div className="section-label">
            ABOUT
          </div>

          <div className="about-layout">

            <h2>
              Turning ideas into
              <span> practical solutions.</span>
            </h2>

            <div className="about-text">

              <p>
                I am a B.Tech Computer Science & Design Engineering
                graduate interested in software development and
                emerging technologies.
              </p>

              <p>
                My interests include Python development, full-stack
                applications, artificial intelligence, machine
                learning, computer vision and VR/AR.
              </p>

            </div>

          </div>

        </section>


        {/* SKILLS */}
        <section id="skills" className="skills section">

          <div className="section-label">
            SKILLS
          </div>

          <div className="skills-intro">
            <h2>
              Technologies I work with.
            </h2>

            <p>
              A growing technical toolkit focused on software
              development and intelligent applications.
            </p>
          </div>

          <div className="skills-list">

            <div className="skill-row">
              <span>01</span>

              <h3>Programming Languages L</h3>

              <p>
                Python · JavaScript · Java · C · PHP
              </p>
            </div>

            <div className="skill-row">
              <span>02</span>

              <h3>Web & Full-Stack Developmentk</h3>

              <p>
               Django, Django REST Framework, React.js, HTML5, CSS3, Node.js, REST APIs 
              </p>
            </div>

            <div className="skill-row">
              <span>03</span>

              <h3>AI & Machine Learning</h3>

              <p>
                Machine Learning · Computer Vision · OpenCV ·
                MediaPipe · NLP
              </p>
            </div>

            <div className="skill-row">
              <span>04</span>

              <h3>Tools & Databases</h3>

              <p>
                SQL · MySQL · PostgreSQL · Git · GitHub · VS Code 
              </p>
            </div>

            <div className="skill-row">
              <span>05</span>

              <h3>VR/AR Development</h3>

              <p>
                Unity 3D · XR Toolkit 
              </p>
            </div>
            <div className="skill-row">
              <span>06</span>

              <h3>Professional Skills</h3>

              <p>
               Team Collaboration, Communication, Adaptability, Continuous Learning 
              </p>
            </div>
          </div>

        </section>


        {/* PROJECTS */}
        <section id="projects" className="projects section">

          <div className="section-label">
            SELECTED WORK
          </div>

          <div className="projects-heading">
            <h2>
              Projects that
              <span> matter.</span>
            </h2>

            <p>
              A selection of academic and technical projects
              I've worked on.
            </p>
          </div>


          <div className="project-list">

            <article className="project">

              <div className="project-top">
                <span className="project-index">
                  01
                </span>

                <span className="project-type">
                  AI · COMPUTER VISION
                </span>
              </div>

              <div className="project-main">

                <div>
                  <h3>
                    Bridging Silence
                  </h3>

                  <p className="project-title">
                    Indian Sign Language Translator
                    with Malayalam Text & Audio Output
                  </p>
                </div>

                <a
                  href="https://github.com/annmaria5804-2004/indian-sign-language-translator"
                  target="_blank"
                  rel="noreferrer"
                  className="project-arrow"
                >
                  ↗
                </a>

              </div>

              <p className="project-description">
                A real-time Indian Sign Language translation system
                using computer vision and machine learning to
                recognize hand gestures and provide Malayalam text
                and audio output through a web application.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>Django</span>
                <span>OpenCV</span>
                <span>MediaPipe</span>
                <span>YOLO</span>
                <span>Machine Learning</span>
              </div>

              <div className="project-footer">
                <span>
                  Paper Presentation · ICSIE 2026
                </span>

                <a
                  href="https://github.com/annmaria5804-2004/indian-sign-language-translator"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
              </div>

            </article>


            <article className="project">

              <div className="project-top">
                <span className="project-index">
                  02
                </span>

                <span className="project-type">
                  UNITY · VR / AR
                </span>
              </div>

              <div className="project-main">

                <div>
                  <h3>
                    FPV Drone Simulation
                  </h3>

                  <p className="project-title">
                    High-Fidelity Drone Simulation
                  </p>
                </div>

                <span className="project-arrow">
                  ↗
                </span>

              </div>

              <p className="project-description">
                A Unity 3D and Blender based FPV drone simulation
                focused on realistic flight physics, immersive
                controls and virtual training experiences.
              </p>

              <div className="project-tech">
                <span>Unity 3D</span>
                <span>Blender</span>
                <span>VR / AR</span>
              </div>

            </article>

          </div>

        </section>


        {/* EXPERIENCE */}
        <section id="experience" className="experience section">

          <div className="section-label">
            EXPERIENCE
          </div>

          <div className="experience-heading">
            <h2>
              Learning by
              <span> building.</span>
            </h2>
          </div>

          <div className="experience-list">

            <div className="experience-item">

              <div className="experience-date">
                Sep 2026 – Present
              </div>

              <div>
                <h3>
                  Python Full-Stack Development Intern & Trainee
                </h3>

                <h4>
                  Luminar Technolab · Kochi
                </h4>

                <p>
                  Practical training in AI-integrated Python
                  Full-Stack Development with Python, Django,
                  REST APIs, SQL, JavaScript, React and Git/GitHub.
                </p>
              </div>

            </div>


            <div className="experience-item">

              <div className="experience-date">
                Aug 2025 – Feb 2026
              </div>

              <div>
                <h3>
                  AI & Machine Learning Intern
                </h3>

                <h4>
                  Nexus Technologies · Calicut
                </h4>

                <p>
                  Worked with Python, Django and machine learning
                  concepts while contributing to academic and
                  practical development tasks.
                </p>
              </div>

            </div>


            <div className="experience-item">

              <div className="experience-date">
                Jun 2025 – Jul 2025
              </div>

              <div>
                <h3>
                  VR Development Intern
                </h3>

                <h4>
                  XR Horizon · Kochi
                </h4>

                <p>
                  Hands-on VR development using Unity and XR Toolkit,
                  with exposure to spatial computing and immersive UX.
                </p>
              </div>

            </div>


            <div className="experience-item">

              <div className="experience-date">
                Jun 2024 – Nov 2024
              </div>
              <div>
                <h3>
                  Flutter & Dart Trainee
                </h3>

                <h4>
                Neovent Innovations
                </h4>

                <p>
                  Training in Flutter and Dart with hands-on
                  development and project-based learning.
                </p>
              </div>

            </div>

          </div>

        </section>
       {/* CERTIFICATIONS & ACTIVITIES */}
<section id="certifications" className="certifications section">

  <div className="section-label">
    CERTIFICATIONS & ACTIVITIES
  </div>

  <div className="certifications-heading">
    <h2>
      Learning beyond
      <span> the classroom.</span>
    </h2>

    <p>
      Certifications, academic participation and leadership
      experiences that complement my technical background.
    </p>
  </div>

  <div className="certifications-list">

    <div className="certification-item">
      <span>01</span>
      <div>
        <h3>AI Bootcamp</h3>
        <p>NIELIT Calicut / FutureSkills PRIME</p>
      </div>
    </div>

    <div className="certification-item">
      <span>02</span>
      <div>
        <h3>Python Full-Stack Development</h3>
        <p>Luminar Technolab</p>
      </div>
    </div>

    <div className="certification-item">
      <span>03</span>
      <div>
        <h3>Git & GitHub</h3>
        <p>Microsoft / Coursera</p>
      </div>
    </div>

    <div className="certification-item">
      <span>04</span>
      <div>
        <h3>WordPress Development</h3>
        <p>Coursera</p>
      </div>
    </div>

    <div className="certification-item">
      <span>06</span>
      <div>
        <h3>C Programming</h3>
         <p>Neovent Innovations</p>
      </div>
    </div>

  </div>


  <div className="activities-list">

    <div className="activity-item">
      <span>ACADEMIC</span>

      <div>
        <h3>Paper Presentation</h3>
        <p>
          Presented the project paper
          <strong>
            “Bridging Silence: Indian Sign Language Translator
            with Malayalam Text and Audio Output”
          </strong>
          at the 17th International Conference on Science &
          Innovative Engineering (ICSIE 2026).
        </p>
      </div>
    </div>


    <div className="activity-item">
      <span>LEADERSHIP</span>

      <div>
        <h3>National Level Tech Fest Coordinator</h3>
        <p>
          Served as a coordinator for Tantra’25, a national-level
          technical fest at Vimal Jyothi Engineering College,
          supporting event coordination and participant activities.
        </p>
      </div>
    </div>

  </div>

</section>

        {/* EDUCATION */}
        <section id="education" className="education section">

          <div className="section-label">
            EDUCATION
          </div>

          <div className="education-content">

            <div>
              <span className="education-date">
                2022 — 2026
              </span>

              <h2>
                B.Tech Computer Science
                <br />
                & Design Engineering
              </h2>
            </div>

            <div className="education-details">

              <h3>
                Vimal Jyothi Engineering College
              </h3>

              <p>
                APJ Abdul Kalam Technological University (KTU)
              </p>

              <strong>
                CGPA · 8.02 / 10
              </strong>

            </div>

          </div>

        </section>


        {/* CONTACT */}
        <section id="contact" className="contact">

          <p className="contact-label">
            HAVE A PROJECT OR OPPORTUNITY?
          </p>

          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p className="contact-text">
            I'm interested in software development opportunities
            where I can apply my skills while continuing to learn
            and build practical solutions.
          </p>

          <div className="contact-buttons">

            <a href="mailto:annmaria5804@gmail.com">
              Email Me ↗
            </a>

            <a
              href="https://www.linkedin.com/in/ann-maria-869154322"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/annmaria5804-2004"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer>

        <span>
          © 2026 Ann Maria
        </span>

        <span>
          Built with React
        </span>

      </footer>

    </div>
  );
}

export default App;