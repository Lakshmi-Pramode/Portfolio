import { aboutData } from '../data/portfolioData'
import { FaLightbulb } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-header reveal">
        <span className="section-label"><FaLightbulb style={{ marginRight: '6px' }} /> About Me</span>
        <h2 className="section-title">Get to Know Me</h2>
        <p className="section-subtitle">
          A brief introduction about who I am, what I do, and what drives my
          passion for technology
        </p>
      </div>

      <div className="about-grid">
        <div className="about-text reveal">
          <h3>{aboutData.heading}</h3>
          {aboutData.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="about-interests">
            {aboutData.interests.map((interest) => (
              <div key={interest.title} className="interest-card">
                <div className="interest-icon">{interest.icon}</div>
                <h4>{interest.title}</h4>
                <p>{interest.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-visual reveal reveal-delay-2">
          <div className="about-code-block">
            <div className="code-header">
              <div className="code-dot red" />
              <div className="code-dot yellow" />
              <div className="code-dot green" />
              <span className="code-title">{aboutData.codeFile}</span>
            </div>
            <div className="code-body">
              {aboutData.codeLines.map((line, i) => (
                <div key={i} className="code-line">
                  <span className="code-line-number">{i + 1}</span>
                  {line.keyword && (
                    <span>
                      <span className="code-keyword">{line.keyword}</span>{' '}
                      <span className="code-function">{line.fn}</span>{' '}
                      <span className="code-bracket">{line.bracket}</span>
                    </span>
                  )}
                  {line.prop && (
                    <span>
                      &nbsp;&nbsp;<span className="code-property">{line.prop}</span>
                      : {line.isKeyword
                        ? <span className="code-keyword">{line.value}</span>
                        : <span className="code-string">{line.value}</span>
                      },
                    </span>
                  )}
                  {!line.keyword && !line.prop && line.bracket && (
                    <span className="code-bracket">{line.bracket}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
