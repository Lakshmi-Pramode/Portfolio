import { useState } from 'react'
import { skillsData, skillCategories } from '../data/portfolioData'
import { FaLightbulb } from 'react-icons/fa'

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredSkills = activeFilter === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeFilter)

  return (
    <section id="skills" className="section">
      <div className="section-header reveal">
        <span className="section-label"><FaLightbulb style={{ marginRight: '6px' }} /> Skills</span>
        <h2 className="section-title">My Tech Arsenal</h2>
        <p className="section-subtitle">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <div className="skills-filter reveal">
        {skillCategories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="skills-grid reveal reveal-delay-2">
        {filteredSkills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-level">{skill.level}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
