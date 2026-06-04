import { siteConfig, socialLinks } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-logo">{siteConfig.logo}</div>
        <div className="footer-text">
          © {year} {siteConfig.name}. Built with React & ❤️
        </div>
        <div className="footer-socials">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              id={`footer-${s.label.toLowerCase()}`}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
