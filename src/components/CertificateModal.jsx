import { useEffect } from 'react'

export default function CertificateModal({ cert, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const isPdf = cert.file && cert.file.toLowerCase().endsWith('.pdf')
  const isImage = cert.file && /\.(png|jpg|jpeg|webp|gif|svg)$/i.test(cert.file)

  const handleOpenNewTab = () => {
    window.open(cert.file, '_blank', 'noopener,noreferrer')
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = cert.file
    link.download = `${cert.title.replace(/\s+/g, '_')}.${isPdf ? 'pdf' : 'png'}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="cert-modal-overlay" onClick={onClose} id="cert-modal">
      <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cert-modal-header">
          <div className="cert-modal-info">
            <span className="cert-modal-icon">{cert.icon}</span>
            <div>
              <h3 className="cert-modal-title">{cert.title}</h3>
              <p className="cert-modal-meta">
                {cert.issuer} • {cert.date}
              </p>
            </div>
          </div>
          <div className="cert-modal-actions">
            <button
              className="cert-modal-btn"
              onClick={handleOpenNewTab}
              title="Open in new tab"
              id="cert-modal-newtab"
            >
              ↗
            </button>
            <button
              className="cert-modal-btn"
              onClick={handleDownload}
              title="Download"
              id="cert-modal-download"
            >
              ↓
            </button>
            <button
              className="cert-modal-close"
              onClick={onClose}
              aria-label="Close modal"
              id="cert-modal-close"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="cert-modal-body">
          {isPdf && (
            <iframe
              src={`${cert.file}#toolbar=1&navpanes=0`}
              title={cert.title}
              className="cert-modal-iframe"
            />
          )}
          {isImage && (
            <img
              src={cert.file}
              alt={cert.title}
              className="cert-modal-image"
            />
          )}
          {!isPdf && !isImage && (
            <div className="cert-modal-placeholder">
              <span className="cert-modal-placeholder-icon">{cert.icon}</span>
              <h4>{cert.title}</h4>
              <p>Certificate preview not available</p>
              <button className="btn btn-primary" onClick={handleOpenNewTab}>
                Open Certificate →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
