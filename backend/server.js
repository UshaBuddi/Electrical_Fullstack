const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage }).array('files', 10); // Up to 10 files



// API route to handle form submission
app.post('/send-email', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const { name, email, phone, jobAddress, jobDescription } = req.body;
    const files = req.files;

    // Attach uploaded files
    const attachments = files.map((file) => ({
      filename: file.originalname,
      path: file.path,
    }));

    // Configure Nodemailer for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER, // Replace with your business email
    pass: process.env.EMAIL_PASS, // Replace with your email password or app password
  },
});

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.BUSINESS_EMAIL, // Replace with the business email to receive the quote
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      text: 
    `Name:${name} 
      Gmail: ${email}
      Phone: ${phone}
      Job Address: ${jobAddress}
      Job Description: ${jobDescription}`,
      attachments: attachments,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ error: 'Error sending email' });
      }
      return res.status(200).json({ message: 'Quote request sent successfully!' });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});