import { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // opens default email client with prefilled message
    window.location.href = `mailto:ashishjpaul@gmail.com?subject=Message from ${form.name}&body=${form.message} - From: ${form.email}`
    setSent(true)
  }

  return (
    <section className="contact-page">
      <h2 className="section-title">&gt; CONTACT_ME</h2>

      <div className="contact-container">


        <div className="contact-left">
          <div className="contact-info">
            <h3 className="contact-heading">Let's Connect!</h3>
            <p className="contact-subtext">
              I'm currently open to frontend internships and junior 
              developer roles. Feel free to reach out — 
              whether it's an opportunity, a question or just a hello!
            </p>
          </div>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">EMAIL</span>
              <a href="mailto:ashishjpaul@gmail.com" className="contact-value">
                ashishjpaul@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">LOCATION</span>
              <span className="contact-value">TamilNadu, India 🇮🇳</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">STATUS</span>
              <span className="contact-value status-open">● Open to Work</span>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/ashdevjp"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ashishjp24/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ashishjpaul@gmail.com"
              className="social-btn gold"
            >
              Email Me
            </a>
          </div>
        </div>

        {/* Right — Form */}
        <div className="contact-right">
          {sent ? (
            <div className="success-message">
              <p className="success-title">&gt; MESSAGE_SENT.EXE ✓</p>
              <p className="success-sub">
                Thanks for reaching out! I'll get back to you soon.
              </p>
              <button
                className="btn btn-outline"
                onClick={() => setSent(false)}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">YOUR NAME</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name..."
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">YOUR EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email..."
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">MESSAGE</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  required
                  className="form-input form-textarea"
                  rows={6}
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message ↗
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}

export default Contact