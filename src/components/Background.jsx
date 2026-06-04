import { useState, useEffect, useMemo } from 'react'

function Particles() {
  const particles = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${6 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 8}s`,
      size: `${1 + Math.random() * 2}px`,
      opacity: 0.2 + Math.random() * 0.5,
    })), [])

  return (
    <div className="particle-field">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default function Background() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const parallaxStyle = (depth) => ({
    transform: `translate(${mousePos.x * depth}px, ${mousePos.y * depth}px)`,
    transition: 'transform 0.1s ease-out'
  })

  return (
    <div className="site-bg">
      <div className="hero-gradient-overlay" />
      <Particles />
      <div className="hero-grid-pattern" style={parallaxStyle(10)} />
    </div>
  )
}
