import { projectsData } from '../data/portfolioData'
import { FaRocket, FaGlobe, FaRobot, FaChartBar, FaShoppingCart, FaLaptopCode } from 'react-icons/fa'

const GithubIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
)

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header reveal">
        <span className="section-label"><FaRocket style={{ marginRight: '6px' }} /> Projects</span>
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle">
          A curated selection of projects that showcase my skills and passion
          for building impactful applications
        </p>
      </div>

      <div className="projects-bento">
        {projectsData.map((project, i) => (
          <div
            key={project.title}
            className={`project-card reveal reveal-delay-${(i % 4) + 1}${project.featured ? ' featured' : ''}`}
          >
            <div className="project-image">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling && (e.target.nextSibling.style.display = 'flex')
                  }}
                />
              ) : null}
              <div
                className="project-image-fallback"
                style={{
                  display: project.image ? 'none' : 'flex',
                  width: '100%',
                  height: '100%',
                  position: project.image ? 'absolute' : 'relative',
                  top: 0,
                  left: 0,
                  background: 'linear-gradient(135deg, #0f172a, #1e1b4b)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: project.featured ? '3rem' : '2rem',
                }}
              >
                {project.tag === 'Featured Project' && <FaGlobe />}
                {project.tag === 'Full Stack' && <FaRobot />}
                {project.tag === 'API Integration' && <FaChartBar />}
                {project.tag === 'MERN Stack' && <FaShoppingCart />}
                {project.tag === 'Developer Tool' && <FaLaptopCode />}
              </div>
              <div className="project-overlay" />
            </div>

            <div className="project-content">
              <span className="project-tag">{project.tag}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>

              <div className="project-links" style={{ display: 'flex', gap: '12px', marginTop: 'auto', paddingTop: '20px' }}>
                <a
                  href={project.github}
                  className="cert-view-btn"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`project-github-${i}`}
                >
                  {GithubIcon} Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
