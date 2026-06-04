import { useState, useEffect } from 'react'
import { heroData, siteConfig } from '../data/portfolioData'
import { FaRocket, FaFileAlt, FaEnvelope } from 'react-icons/fa'

function useTypewriter(strings, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [text, setText] = useState('')
  const [stringIndex, setStringIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = strings[stringIndex]
    let timeout

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setStringIndex((prev) => (prev + 1) % strings.length)
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed
      timeout = setTimeout(() => {
        setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, stringIndex, strings, typingSpeed, deletingSpeed, pauseTime])

  return text
}

export default function Hero() {
  const tagline = useTypewriter(heroData.taglines)
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

  const handleResumeDownload = (e) => {
    e.preventDefault()
    const link = document.createElement('a')
    link.href = siteConfig.resumePath
    link.download = `${siteConfig.name.replace(/\s+/g, '_')}_Resume.pdf`
    link.setAttribute('target', '_blank')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const parallaxStyle = (depth) => ({
    transform: `translate(${mousePos.x * depth}px, ${mousePos.y * depth}px)`,
    transition: 'transform 0.1s ease-out'
  })

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="status-dot" />
          {heroData.badge}
        </div>

        <h1 className="hero-name">
          Hi, I&apos;m <span className="gradient-text">{heroData.name}</span>
        </h1>

        <div className="hero-tagline">
          {tagline}
          <span className="cursor-blink" />
        </div>

        <p className="hero-description">
          {heroData.description}
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary" id="cta-projects"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            <FaRocket style={{ marginRight: '8px' }} /> View Projects
          </a>
          <a
            href={siteConfig.resumePath}
            className="btn btn-secondary"
            id="cta-resume"
            onClick={handleResumeDownload}
          >
            <FaFileAlt style={{ marginRight: '8px' }} /> Download Resume
          </a>
          <a href="#contact" className="btn btn-secondary" id="cta-contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            <FaEnvelope style={{ marginRight: '8px' }} /> Contact Me
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
