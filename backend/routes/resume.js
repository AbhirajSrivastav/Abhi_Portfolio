const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'backend/public/resumes';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'abhi-resume-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'), false);
    }
  }
});

// Upload resume
router.post('/upload-resume', upload.single('resume'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  res.json({ 
    success: true,
    message: 'Resume uploaded successfully',
    url: `/resumes/${req.file.filename}`,
    filename: req.file.filename
  });
});

// Get current resume info (mock - scans folder)
router.get('/resume', (req, res) => {
  const resumesDir = 'backend/public/resumes';
  try {
    const files = fs.readdirSync(resumesDir);
    const pdfFiles = files.filter(f => f.endsWith('.pdf')).sort().slice(-1)[0];
    
    if (pdfFiles) {
      const stats = fs.statSync(path.join(resumesDir, pdfFiles));
      res.json({
        filename: pdfFiles,
        size: (stats.size / 1024).toFixed(1) + ' KB',
        lastModified: stats.mtime.toLocaleDateString(),
        url: `/resumes/${pdfFiles}`
      });
    } else {
      res.json(null);
    }
  } catch (error) {
    res.json(null);
  }
});

module.exports = router;

