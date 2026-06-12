import { useEffect, useState, useRef } from "react";
import { socials } from "../data/socials.jsx";
import { projects } from "../data/projects.jsx";

export default function HomePage({ onOpenProject }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    cycleMobileCards();
    intervalRef.current = setInterval(cycleMobileCards, 1200);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function isMobileView() {
    return window.matchMedia("(max-width: 900px)").matches;
  }

  function cycleMobileCards() {
    if (!isMobileView()) return;
    const cards = document.querySelectorAll(".mobile-cycle");
    cards.forEach((card, cardIndex) => {
      const screens = card.querySelectorAll(".screen");
      screens.forEach((s) => s.classList.remove("mobile-active"));
      const activeIndex = Math.floor(Date.now() / 1200 + cardIndex) % screens.length;
      screens[activeIndex]?.classList.add("mobile-active");
    });
  }

  return (
    <div id="homePage">
      <button
        className={`menu-btn${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span /><span />
      </button>

      <div className={`menu-overlay${menuOpen ? " open" : ""}`}>
        <nav className="menu-nav">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>

      <header>
        <section>
          <div className="name">Dimitris Vatistas</div>
          <div className="info-block">
            <div className="section-title">Experience</div>
            <div className="row"><span>Full Stack Web Development</span><span>Web</span></div>
            <div className="row"><span>Frontend & Backend</span><span>Apps</span></div>
            <div className="row"><span>Swift iOS Apps</span><span>iOS</span></div>
            <div className="row"><span>Android Apps</span><span>Mobile</span></div>
            <div className="row"><span>UI / UX Design</span><span>Product</span></div>
          </div>
        </section>

        <section>
          <nav className="desktop-nav">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="about" id="about">
            <div className="about-title">About</div>
            I’m a full stack web developer who also designs and builds Android
            and Swift iOS apps. I create clean digital products with modern
            interfaces, responsive layouts, simple user flows, and smooth
            interactive details.
          </div>
        </section>
      </header>

      <main className="portfolio-grid" id="work">
        {projects.map((project, index) => (
          <section key={project.title} className="project" onClick={() => onOpenProject(index)}>
            <div className="project-box mobile-cycle">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className={`screen${i === 0 ? " screen-main mobile-active" : ""}`}
                >
                  <img src={img} alt={`${project.title} screen ${i + 1}`} />
                </div>
              ))}
            </div>
            <div className="caption">
              <strong>{project.title}</strong> —{" "}
              {project.title === "Mono"
                ? "Wardrobe catalog, item upload, and AI outfit suggestions."
                : project.images.length === 3
                ? "Home, restaurant detail, and item customization."
                : project.title === "Stays"
                ? "Explore, cabin details, dates, and checkout."
                : project.title === "FitZone"
                ? "Activity, sleep, workouts, and browsing."
                : "Map, trip planning, fare estimate, and active ride."}
            </div>
          </section>
        ))}
      </main>

      <section className="contact-section" id="contact">
        <div className="contact-section-inner">
          <div className="contact-title">Let’s work together</div>
          <div className="contact-body">
            <p>
              Available for freelance projects, full‑time roles, and
              collaborations. Reach out and I’ll get back to you.
            </p>
            <div className="contact-email">
              <a href="mailto:vatistasdimitris.01@gmail.com">vatistasdimitris.01@gmail.com</a>
            </div>
            <div className="social-line" id="homeSocialLinks">
              {socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <strong>Dimitris Vatistas</strong>
            <p>
              Full Stack Web Developer, Swift iOS App Developer, Android App
              Developer, and UI Designer creating modern websites, mobile apps,
              interactive prototypes, and clean digital products.
            </p>
          </div>

          <div className="footer-column">
            <div className="footer-column-title">Contact</div>
            <a href="mailto:vatistasdimitris.01@gmail.com">vatistasdimitris.01@gmail.com</a>
            <a href="#work">View work</a>
            <a href="#contact">Start a project</a>
          </div>

          <div className="footer-column" id="social">
            <div className="footer-column-title">Social</div>
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Dimitris Vatistas. All rights reserved.</span>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
