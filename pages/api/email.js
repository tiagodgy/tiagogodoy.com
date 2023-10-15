import { Resend } from 'resend'
import EmailTemplate from '../../components/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function sendEmail(req, res) {
  try {
    const data = req.body

    await resend.emails.send({
      from: 'tiagogodoy.com <website@tiagogodoy.com>',
      to: 'tiagogodoymoreira@gmail.com',
      replyTo: data.email,
      subject: `${data.name} - via tiagogodoy.com`,
      react: <EmailTemplate {...data} />,
    })

    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
