import { useState } from 'react'
import { contactLinks } from '../data/portfolioData'
import { FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus({ type: 'success', message: '✨ Message sent successfully! I\'ll get back to you soon.' })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Server error')
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: '❌ Failed to send message. Please ensure the backend server is running and email is configured.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="section-header reveal">
        <span className="section-label"><FaEnvelope style={{ marginRight: '6px' }} /> Contact</span>
        <h2 className="section-title">Let&apos;s Connect</h2>
        <p className="section-subtitle">
          Have a project in mind or just want to chat? I&apos;d love to hear from you.
          Let&apos;s build something amazing together.
        </p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info reveal">
          <h3>Get in Touch</h3>
          <p>
            I&apos;m currently looking for internship opportunities and am open
            to freelance projects. Whether you have a question or just want to say
            hello, feel free to reach out!
          </p>

          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="contact-link-item"
                target="_blank"
                rel="noopener noreferrer"
                id={`contact-${link.label.toLowerCase()}`}
              >
                <div className="contact-link-icon">{link.icon}</div>
                <div className="contact-link-text">
                  <span className="contact-link-label">{link.label}</span>
                  <span className="contact-link-value">{link.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form reveal reveal-delay-2" onSubmit={handleSubmit} id="contact-form">
          <div className="form-group">
            <label className="form-label" htmlFor="contact-name">Name</label>
            <input
              className="form-input"
              type="text"
              id="contact-name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-email">Email</label>
            <input
              className="form-input"
              type="email"
              id="contact-email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-subject">Subject</label>
            <input
              className="form-input"
              type="text"
              id="contact-subject"
              name="subject"
              placeholder="Project Collaboration"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-message">Message</label>
            <textarea
              className="form-textarea"
              id="contact-message"
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="form-submit"
            disabled={sending}
            id="contact-submit"
          >
            {sending ? (
              <span className="btn-loading">
                <span className="btn-spinner" />
                Sending...
              </span>
            ) : (
              'Send Message →'
            )}
          </button>

          {status.message && (
            <div className={`form-status ${status.type}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
