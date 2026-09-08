const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = 3001;

// Config
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'hello@tfcthrive.com';
const SMTP_USER = process.env.SMTP_USER || 'hello@tfcthrive.com';
const SMTP_PASS = process.env.SMTP_PASS;
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || 'https://mock.tfcthrive.com,https://www.tfcthrive.com,https://tfcthrive.com').split(',');

if (!SMTP_PASS) {
  console.error('SMTP_PASS environment variable is required');
  process.exit(1);
}

// Trust nginx proxy
app.set('trust proxy', 1);

// Middleware
app.use(helmet());
app.use(express.json());
app.use(cors({
  origin: ALLOWED_ORIGINS,
  methods: ['POST'],
}));

// Rate limit: 5 submissions per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many submissions. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

// Verify SMTP connection on startup
transporter.verify().then(() => {
  console.log('SMTP connection verified');
}).catch((err) => {
  console.error('SMTP connection failed:', err.message);
});

// Simple validation
function validateContact(body) {
  const { name, email, interest, message, phone, source } = body;
  const errors = [];
  if (!name || name.trim().length < 2) errors.push('Name is required');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid email is required');
  if (interest && interest.length > 100) errors.push('Interest too long');
  if (message && message.length > 2000) errors.push('Message too long');
  if (phone && phone.length > 20) errors.push('Phone too long');
  if (source && source.length > 50) errors.push('Source too long');
  return errors;
}

// Contact form endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  const errors = validateContact(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ error: errors.join(', ') });
  }

  const { name, email, phone, interest, message, source } = req.body;

  const interestLabels = {
    child: 'Child & Adolescent Counseling',
    adult: 'Adult & Individual Counseling',
    family: 'Family Counseling',
    gifted: 'Gifted & Neurodivergent Support',
    anxiety: 'Anxiety & Depression',
    trauma: 'Trauma-Informed Care',
    other: 'Something else',
  };

  const interestText = interestLabels[interest] || interest || 'Not specified';
  const sourceText = source === 'psychologytoday' ? ' (via Psychology Today)' : '';

  const emailBody = `
New consultation request${sourceText}

Name: ${name.trim()}
Email: ${email.trim()}
${phone ? `Phone: ${phone.trim()}\n` : ''}Interest: ${interestText}
${message ? `\nMessage:\n${message.trim()}` : ''}

---
Sent from tfcthrive.com contact form
`.trim();

  const htmlBody = `
<div style="font-family: sans-serif; max-width: 600px;">
  <h2 style="color: #5B7B6A; margin-bottom: 4px;">New Consultation Request${sourceText}</h2>
  <hr style="border: none; border-top: 1px solid #E8EDE9; margin: 16px 0;" />
  <table style="border-collapse: collapse;">
    <tr><td style="padding: 6px 16px 6px 0; color: #5C5650; font-weight: 600;">Name</td><td style="padding: 6px 0;">${name.trim()}</td></tr>
    <tr><td style="padding: 6px 16px 6px 0; color: #5C5650; font-weight: 600;">Email</td><td style="padding: 6px 0;"><a href="mailto:${email.trim()}">${email.trim()}</a></td></tr>
    ${phone ? `<tr><td style="padding: 6px 16px 6px 0; color: #5C5650; font-weight: 600;">Phone</td><td style="padding: 6px 0;"><a href="tel:${phone.trim()}">${phone.trim()}</a></td></tr>` : ''}
    <tr><td style="padding: 6px 16px 6px 0; color: #5C5650; font-weight: 600;">Interest</td><td style="padding: 6px 0;">${interestText}</td></tr>
  </table>
  ${message ? `<hr style="border: none; border-top: 1px solid #E8EDE9; margin: 16px 0;" /><p style="color: #2D2A26; line-height: 1.6;">${message.trim().replace(/\n/g, '<br>')}</p>` : ''}
  <hr style="border: none; border-top: 1px solid #E8EDE9; margin: 16px 0;" />
  <p style="font-size: 12px; color: #999;">Sent from tfcthrive.com contact form</p>
</div>
`.trim();

  try {
    await transporter.sendMail({
      from: `"Thrive Family Counseling" <${SMTP_USER}>`,
      to: NOTIFY_EMAIL,
      replyTo: email.trim(),
      subject: `New consultation request from ${name.trim()}`,
      text: emailBody,
      html: htmlBody,
    });

    console.log(`Contact form submitted: ${name.trim()} <${email.trim()}>${sourceText}`);
    res.json({ success: true });
  } catch (err) {
    console.error('Email send failed:', err.message);
    res.status(500).json({ error: 'Failed to send message. Please try calling or emailing directly.' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Contact API running on port ${PORT}`);
});
