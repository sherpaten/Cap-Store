import { useState } from 'react'
import '../styles/Pages.css'

const CONTACT_ITEMS = [
  { icon: '📍', title: 'Visit Us',     value: '123 Street Ave, Your City' },
  { icon: '📞', title: 'Call Us',      value: '+1 (555) 000-0000'          },
  { icon: '✉️', title: 'Email Us',     value: 'hello@thecapstore.com'      },
  { icon: '🕐', title: 'Store Hours',  value: 'Mon–Sat: 9am – 8pm'        },
]

export default function Contact() {
  const [sent, setSent]     = useState(false)
  const [form, setForm]     = useState({ name: '', email: '', subject: 'General Inquiry', message: '' })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  return (
    <main>
      <section className="contact-page">
        <div className="container">
          {/* Left info */}
          <div>
            <p className="contact-info__label">Get In Touch</p>
            <h1 className="contact-info__title">Let's<br />Talk Caps.</h1>
            <p className="contact-info__desc">
              Got a question, a collab idea, or just want to geek out about headwear?
              We'd love to hear from you.
            </p>
            <div className="contact-items">
              {CONTACT_ITEMS.map((item, i) => (
                <div className="contact-item" key={i}>
                  <div className="contact-item__icon">{item.icon}</div>
                  <div>
                    <p className="contact-item__title">{item.title}</p>
                    <p className="contact-item__val">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="contact-form-wrap">
            {sent ? (
              <div className="form-success">
                <div className="form-success__icon">🎉</div>
                <h3 className="form-success__title">Message Sent!</h3>
                <p className="form-success__msg">Thanks {form.name}! We'll get back to you within 24 hours.</p>
                <button className="btn btn-primary" style={{ marginTop: 12 }} onClick={() => setSent(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3>Send a Message</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange}>
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Wholesale</option>
                    <option>Custom Design</option>
                    <option>Collaboration</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="What's on your mind?..." />
                </div>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleSubmit}>
                  Send Message →
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
