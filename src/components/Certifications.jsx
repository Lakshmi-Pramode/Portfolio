import { useState } from 'react'
import { certificatesData } from '../data/portfolioData'
import CertificateModal from './CertificateModal'
import { FaCertificate } from 'react-icons/fa'

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)

  const handleView = (cert) => {
    if (cert.file) {
      setSelectedCert(cert)
    } else if (cert.credentialUrl && cert.credentialUrl !== '#') {
      window.open(cert.credentialUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="certifications" className="section">
      <div className="section-header reveal">
        <span className="section-label">📜 Certifications</span>
        <h2 className="section-title">Credentials & Certifications</h2>
        <p className="section-subtitle">
          Professional certifications that validate my expertise and commitment
          to continuous learning
        </p>
      </div>

      <div className="certs-grid">
        {certificatesData.map((cert, i) => (
          <div
            key={cert.id}
            className={`cert-card reveal reveal-delay-${(i % 4) + 1}`}
            onClick={() => handleView(cert)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleView(cert)}
            id={`cert-card-${cert.id}`}
          >
            <div className="cert-icon-wrapper">
              <span className="cert-icon">{cert.icon}</span>
            </div>
            <div className="cert-content">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
            </div>
            <div className="cert-actions">
              <button
                className="cert-view-btn"
                onClick={(e) => { e.stopPropagation(); handleView(cert) }}
                id={`cert-view-${cert.id}`}
              >
                View Certificate →
              </button>
              {cert.credentialUrl && cert.credentialUrl !== '#' && (
                <a
                  href={cert.credentialUrl}
                  className="cert-credential-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  id={`cert-link-${cert.id}`}
                >
                  ↗ Verify
                </a>
              )}
            </div>
            <div className="cert-shine" />
          </div>
        ))}
      </div>

      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  )
}
