const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Resolve the public assets directory (sibling to server/)
const ASSETS_DIR = path.resolve(__dirname, '..', 'public', 'assets')

// Ensure asset directories exist
const ASSET_FOLDERS = ['resume', 'certificates', 'projects', 'profile']
ASSET_FOLDERS.forEach((folder) => {
  const dir = path.join(ASSETS_DIR, folder)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
})

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection (optional)
const MONGO_URI = process.env.MONGO_URI || ''

if (MONGO_URI) {
  mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(() => console.log('MongoDB not connected — running without database'))
}

// Contact Message Schema
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

const Message = mongoose.model('Message', messageSchema)

// ===========================================
// MULTER UPLOAD CONFIGURATION
// ===========================================

function createUploader(subfolder) {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(ASSETS_DIR, subfolder))
    },
    filename: (req, file, cb) => {
      // Sanitize filename: remove special chars, preserve extension
      const ext = path.extname(file.originalname)
      const base = path.basename(file.originalname, ext)
        .replace(/[^a-zA-Z0-9_-]/g, '_')
        .toLowerCase()
      cb(null, `${base}${ext}`)
    },
  })

  return multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
    fileFilter: (req, file, cb) => {
      const allowed = /\.(pdf|png|jpg|jpeg|webp|gif|svg)$/i
      if (allowed.test(path.extname(file.originalname))) {
        cb(null, true)
      } else {
        cb(new Error('Only PDF, PNG, JPG, WEBP, GIF, SVG files are allowed'))
      }
    },
  })
}

// ===========================================
// ROUTES
// ===========================================

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    if (mongoose.connection.readyState === 1) {
      const newMessage = new Message({ name, email, subject, message })
      await newMessage.save()
    }

    // Send email notification using Nodemailer if credentials are set
    const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env
    if (EMAIL_USER && EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail', // Standard Gmail configuration
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS,
        },
      })

      const mailOptions = {
        from: `"${name} (Portfolio)" <${EMAIL_USER}>`,
        to: EMAIL_TO || EMAIL_USER, // Send to EMAIL_TO if set, otherwise to self
        replyTo: email, // So you can hit 'Reply' directly to the person
        subject: `New Portfolio Message: ${subject}`,
        text: `You have a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `<div style="font-family: sans-serif; padding: 20px; color: #333;">
                 <h2>New Message from your Portfolio!</h2>
                 <p><strong>Name:</strong> ${name}</p>
                 <p><strong>Email:</strong> ${email}</p>
                 <p><strong>Subject:</strong> ${subject}</p>
                 <hr/>
                 <p><strong>Message:</strong></p>
                 <p style="white-space: pre-wrap;">${message}</p>
               </div>`,
      }

      await transporter.sendMail(mailOptions)
    }

    res.status(201).json({ success: true, message: 'Message received successfully!' })
  } catch (err) {
    console.error('Contact form error:', err.message)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get messages (requires DB)
app.get('/api/messages', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database not connected' })
    }
    const messages = await Message.find().sort({ createdAt: -1 })
    res.json(messages)
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

// ===========================================
// FILE UPLOAD ENDPOINTS
// ===========================================

// Upload resume
app.post('/api/upload/resume', createUploader('resume').single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' })
  res.json({
    success: true,
    filename: req.file.filename,
    path: `/assets/resume/${req.file.filename}`,
  })
})

// Upload certificate
app.post('/api/upload/certificate', createUploader('certificates').single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' })
  res.json({
    success: true,
    filename: req.file.filename,
    path: `/assets/certificates/${req.file.filename}`,
  })
})

// Upload project image
app.post('/api/upload/project', createUploader('projects').single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' })
  res.json({
    success: true,
    filename: req.file.filename,
    path: `/assets/projects/${req.file.filename}`,
  })
})

// Upload profile image
app.post('/api/upload/profile', createUploader('profile').single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' })
  res.json({
    success: true,
    filename: req.file.filename,
    path: `/assets/profile/${req.file.filename}`,
  })
})

// List assets in a folder
app.get('/api/assets/:folder', (req, res) => {
  const { folder } = req.params
  if (!ASSET_FOLDERS.includes(folder)) {
    return res.status(400).json({ error: 'Invalid folder' })
  }

  const dir = path.join(ASSETS_DIR, folder)
  try {
    const files = fs.readdirSync(dir).filter((f) => !f.startsWith('.'))
    res.json({
      folder,
      files: files.map((f) => ({
        name: f,
        path: `/assets/${folder}/${f}`,
        size: fs.statSync(path.join(dir, f)).size,
      })),
    })
  } catch {
    res.json({ folder, files: [] })
  }
})

// Delete an asset
app.delete('/api/assets/:folder/:filename', (req, res) => {
  const { folder, filename } = req.params
  if (!ASSET_FOLDERS.includes(folder)) {
    return res.status(400).json({ error: 'Invalid folder' })
  }

  const filePath = path.join(ASSETS_DIR, folder, filename)
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath)
      res.json({ success: true, message: 'File deleted' })
    } else {
      res.status(404).json({ error: 'File not found' })
    }
  } catch {
    res.status(500).json({ error: 'Failed to delete file' })
  }
})

// Error handler for multer
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large. Maximum size is 10MB.' })
    }
    return res.status(400).json({ error: err.message })
  }
  if (err) {
    return res.status(400).json({ error: err.message })
  }
  next()
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
