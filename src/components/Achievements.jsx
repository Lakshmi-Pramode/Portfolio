import { useState, useEffect, useRef } from 'react'
import { achievementsData, statsData } from '../data/portfolioData'
import { FaTrophy } from 'react-icons/fa'

function AnimatedCounter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = performance.now()

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="section-header reveal">
        <span className="section-label"><FaTrophy style={{ marginRight: '6px' }} /> Achievements</span>
        <h2 className="section-title">Milestones & Recognition</h2>
        <p className="section-subtitle">
          Certifications, awards, and milestones that mark my growth journey
        </p>
      </div>

      <div className="achievements-grid">
        {achievementsData.map((a, i) => (
          <div key={a.title} className={`achievement-card reveal reveal-delay-${(i % 4) + 1}`}>
            <div className="achievement-icon">{a.icon}</div>
            <h3 className="achievement-title">{a.title}</h3>
            <p className="achievement-desc">{a.desc}</p>
          </div>
        ))}
      </div>

      <div className="stats-row reveal">
        {statsData.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className="stat-number">
              <AnimatedCounter target={stat.number} suffix={stat.suffix} />
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
