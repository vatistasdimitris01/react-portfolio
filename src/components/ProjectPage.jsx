import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects.jsx";

export default function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const slugMap = {};
  projects.forEach((p, i) => { slugMap[p.title.toLowerCase()] = i; });
  const projectIndex = slugMap[slug];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (projectIndex === undefined) navigate("/", { replace: true });
  }, [projectIndex, navigate]);

  if (projectIndex === undefined) return null;

  const project = projects[projectIndex];
  const nextIndex = (projectIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  const slideCount = project.images.length;

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    setActiveSlide(0);
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") navigate("/");
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [navigate, nextSlide, prevSlide]);

  return (
    <div className="project-page">
      <button className="back-btn" onClick={() => navigate("/")} aria-label="Back to homepage">
        <svg className="icon" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <section className="project-template">
        <div className="project-title-block">
          <div className="project-kicker">Full App Concept Showcase</div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>

        <div className="project-carousel-wrap">
          <div className="project-carousel">
            {project.images.map((img, i) => (
              <img key={i} src={img} alt={`${project.title} screen ${i + 1}`} className={i === activeSlide ? "active" : ""} />
            ))}
          </div>

          <div className="carousel-controls">
            <button className="prev-btn" onClick={prevSlide} aria-label="Previous image">
              <svg className="icon" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="next-btn" onClick={nextSlide} aria-label="Next image">
              <svg className="icon" viewBox="0 0 24 24" fill="none">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="slide-counter">{activeSlide + 1} / {slideCount}</div>

        <div className="concept-showcase">
          <div className="concept-brand-card">
            <div className="concept-logo" style={{ color: project.logoColor }}>
              {project.logo}
            </div>
            <div>
              <div className="concept-label">Concept Identity</div>
              <h2>{project.brandName}</h2>
              <p>{project.tagline}</p>
            </div>
          </div>

          <div className="palette-card">
            <div className="concept-label">Color Palette</div>
            <div className="palette-row">
              {project.palette.map((color) => (
                <div key={color} className="swatch" style={{ background: color }}>
                  <span>{color}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="project-writeup">
          <p>{project.mainText}</p>
          <p>{project.ideaText}</p>
          <p>{project.experienceText}</p>
          <p>{project.designText}</p>
          <p>{project.buildText}</p>
          <p>{project.flowText}</p>
        </div>

        <div className="showcase-section">
          <h2 className="showcase-heading">Product thinking</h2>
          <div className="showcase-grid">
            <div className="showcase-card">
              <h3>Problem</h3>
              <p>{project.problem}</p>
            </div>
            <div className="showcase-card">
              <h3>Solution</h3>
              <p>{project.solution}</p>
            </div>
            <div className="showcase-card">
              <h3>Target user</h3>
              <p>{project.audience}</p>
            </div>
            <div className="showcase-card">
              <h3>Key features</h3>
              <div className="tag-list">
                {project.features.map((f) => (
                  <span key={f} className="tag">{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="showcase-section">
          <h2 className="showcase-heading">User flow diagram</h2>
          <div className="diagram-card">
            <div className="flow-diagram">
              {project.flowSteps.map((step, i) => (
                <div key={i} className="flow-step">
                  <div className="flow-number" style={{ background: project.accent }}>{i + 1}</div>
                  <h4>{step[0]}</h4>
                  <p>{step[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="showcase-section">
          <h2 className="showcase-heading">App structure</h2>
          <div className="showcase-grid">
            <div className="diagram-card">
              <div className="concept-label">Information Architecture</div>
              <div className="mini-diagram">
                {project.architecture.map((row, i) => (
                  <div key={i} className="diagram-row">
                    <span>{row[0]}</span>
                    <span>{row[1]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="diagram-card">
              <div className="concept-label">UI System</div>
              <div className="mini-diagram">
                {project.uiSystem.map((row, i) => (
                  <div key={i} className="diagram-row">
                    <span>{row[0]}</span>
                    <span>{row[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="showcase-section">
          <h2 className="showcase-heading">Design summary</h2>
          <div className="system-grid">
            <div className="system-item">
              <div className="concept-label">Core Screens</div>
              <p>{project.screens}</p>
            </div>
            <div className="system-item">
              <div className="concept-label">Design Focus</div>
              <p>{project.designFocus}</p>
            </div>
            <div className="system-item">
              <div className="concept-label">App Feeling</div>
              <p>{project.feeling}</p>
            </div>
          </div>
        </div>

        <div className="next-project-card" onClick={() => navigate(`/${nextProject.title.toLowerCase()}`)}>
          <div>
            <div className="concept-label">Next app to look at</div>
            <h3>{nextProject.title}</h3>
            <p>{project.nextText}</p>
          </div>
          <button aria-label="Open next project">
            <svg className="icon" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
