import { experienceData, educationData } from '../data/portfolioData'
import { FaBriefcase } from 'react-icons/fa'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-header reveal">
        <span className="section-label"><FaBriefcase style={{ marginRight: '6px' }} /> Experience & Education</span>
        <h2 className="section-title">My Journey</h2>
        <p className="section-subtitle">
          A timeline of my professional experience and academic background
        </p>
      </div>

      <div className="experience-columns">
        <div>
          <h3 className="experience-column-title reveal">
            <span>💼</span> Work Experience
          </h3>
          <div className="timeline">
            {experienceData.map((item, i) => (
              <div key={i} className={`timeline-item reveal reveal-delay-${i + 1}`}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <span className="timeline-date">{item.date}</span>
                  <h4 className="timeline-title">{item.title}</h4>
                  <span className="timeline-company">{item.company}</span>
                  <ul className="timeline-desc">
                    {item.desc.map((d, j) => <li key={j}>{d}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="experience-column-title reveal">
            <span>🎓</span> Education
          </h3>
          <div className="timeline">
            {educationData.map((item, i) => (
              <div key={i} className={`timeline-item reveal reveal-delay-${i + 1}`}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <span className="timeline-date">{item.date}</span>
                  <h4 className="timeline-title">{item.title}</h4>
                  <span className="timeline-company">{item.company}</span>
                  <ul className="timeline-desc">
                    {item.desc.map((d, j) => <li key={j}>{d}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
