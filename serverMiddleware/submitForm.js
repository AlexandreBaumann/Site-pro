// serverMiddleware /submit-form.js

//adapter
import validator from 'validator'
import sanitizeHtml from 'sanitize-html'
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      firstName,
      lastName,
      email,
      message,
      honeypot,
      privacyPolicyAccepted,
    } = req.body

    // Check if the honeypot field is filled out
    if (honeypot) {
      return res.status(200).json({ message: 'Form submitted successfully' })
    }

    // Check if privacy checkbox is checked
    if (!privacyPolicyAccepted) {
      return res
        .status(400)
        .json({ error: 'You must accept the privacy policy' })
    }

    // Validate and sanitize the form data here
    if (!validator.isEmail(email) || !firstName || !lastName || !message) {
      return res
        .status(400)
        .json({ error: 'All fields are required and must be valid' })
    }

    // Sanitize the inputs
    const cleanFirstName = sanitizeHtml(firstName)
    const cleanLastName = sanitizeHtml(lastName)
    const cleanMessage = sanitizeHtml(message)

    let transporter = nodemailer.createTransport({
      host: 'illinois.o2switch.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: { rejectUnauthorized: false },
    })

    let mailOptions = {
      from: 'admin@manuels-de-droit.fr',
      to: 'contact@alexandrebaumann.com',
      subject: 'New message from your website',
      text: `First Name: ${cleanFirstName}\nLast Name: ${cleanLastName}\nEmail: ${email}\nMessage: ${cleanMessage}`,
    }

    let info = await transporter.sendMail(mailOptions)

    return res.end(
      JSON.stringify({ message: 'Formulaire soumis avec succès!' })
    )
  } else {
    res.setHeader('Allow', 'POST')
    res.statusCode = 405
    res.end('Method Not Allowed')
  }
}
